import React from 'react';

const importAll = async () => {
    const icons: Record<string, React.ComponentType<{ height?: string | number; width?: string | number; color?: string }>> = {};

    // Dynamically importing the SvgsIcons module
    const SvgsIcons = await import('./SvgsIcons');

    // Looping through each key in SvgsIcons
    for (const key in SvgsIcons) {

        if (Object.prototype.hasOwnProperty.call(SvgsIcons, key)) {

        // Ensuring key is of type keyof typeof SvgsIcons
        const iconName = key as keyof typeof SvgsIcons;
        const iconComponent = SvgsIcons[iconName];
        if (typeof iconComponent === 'function') {
            icons[iconName] = iconComponent;
        }
        }
    }

    return icons;
};


interface IconsListProps {
    filter?: string; // Filter pattern
    height?: number | string; // Height of icons
    width?: number | string; // Width of icons
    color?: string; // Color of icons
}

// Creating and exporting icons
export const IconsList: React.FC<IconsListProps> = ({ filter, height, width, color }) => {

    const [icons, setIcons] = React.useState<Record<string, React.ComponentType<{ height?: string | number; width?: string | number; color?: string }>>>({});
    const [copiedIcon, setCopiedIcon] = React.useState<string>('');

    React.useEffect(() => {
        importAll().then(setIcons);
    }, []);

    const filterIcons = (iconName: string, filter: string) => {
        if (!filter) return true; // Returns true if no filter is provided
  
        const filterLower = filter.toLowerCase(); // Converting filter pattern to lowercase
  
        // Converting icon name to lowercase for case-insensitive comparison
        const iconNameLower = iconName.toLowerCase();
  
        // Splitting icon name into individual words based on capitalization
        const words = iconName.match(/[A-Z][a-z]+/g) || []; // Match capitalization pattern
        const nameCombinations = [iconNameLower, ...words.map(word => word.toLowerCase())];
  
        // Checking if any combination partially matches the filter pattern
        const matches = nameCombinations.some(name => name.includes(filterLower));
  
        return matches; // Returns true if any combination partially matches the filter pattern
    };
  

    const copyToClipboard = async (iconName: string) => {
        try {
            await navigator.clipboard.writeText(iconName);
            setCopiedIcon(iconName); // Setting state to indicate which icon has been copied
            setTimeout(() => setCopiedIcon(''), 2000); // Resetting copiedIcon state after 2 seconds
        } catch (error) {
            console.error('Failed to copy icon name to clipboard:', error);
        }
    };

    return (
        <>
            {Object.entries(icons)
            .filter(([iconName]) => filterIcons(iconName, filter || ''))
            .map(([iconName, IconComponent]) => {

                const Icon = IconComponent as React.ComponentType<{ height?: string | number; width?: string | number; color?: string }>;
                
                return (
                    <div key={iconName} className="flex flex-col items-center cursor-pointer" onClick={() => copyToClipboard(iconName)}>
                        <Icon height={height} width={width} color={color} />
                        <span className="mt-2 text-xs text-white">{iconName.replace(/(Icon|SvgIcon)$/, '').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()}</span>
                        {copiedIcon === iconName && <span className="text-green-500">Copied!</span>}
                    </div>
                );
            })}
        </>
    );
};
