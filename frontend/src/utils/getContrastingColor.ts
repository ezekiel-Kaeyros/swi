

function hexToRgb(hex: string) {
    const hexCode = hex.replace('#', '');
    const red = parseInt(hexCode.substring(0, 2), 16);
    const green = parseInt(hexCode.substring(2, 4), 16);
    const blue = parseInt(hexCode.substring(4, 6), 16);
  
    return `rgb(${red}, ${green}, ${blue})`;
}

export function getContrastingColor(backgroundColor: string) {

    const rgb: any = backgroundColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    console.log(rgb, backgroundColor, "...rgb")
    const r = parseInt(rgb[1]);
    const g = parseInt(rgb[2]);
    const b = parseInt(rgb[3]);
  
    // Calculate the contrasting color based on the background color
    const contrastingColor = (r * 0.299 + g * 0.587 + b * 0.114) > 186
      ? '#000'
      : '#fff';
  
    return contrastingColor;
}

export function getContrastColor(hexColor: string) {
    // Convert the hex color to RGB
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);

    // Calculate the relative luminance of the color
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Determine the contrasting color based on the luminance
    if (luminance > 0.5) {
      return '#000000'; // Return black for light backgrounds
    } else {
      return '#FFFFFF'; // Return white for dark backgrounds
    }
}