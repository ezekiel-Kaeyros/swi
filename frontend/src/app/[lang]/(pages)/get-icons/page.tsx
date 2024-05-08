"use client"
// page.tsx
import { useState } from 'react';
import { IconsList } from "@/app/common/components/svgs/icons";

export default function GetIcons() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="h-full flex flex-col items-center justify-center py-8 2xl:w-11/12 mx-auto bg-newPrimaryDark">
            <div className="w-full max-w-screen-lg px-2 mb-8">
                <input
                    type="text"
                    placeholder="Search icons..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex flex-row gap-10 flex-wrap justify-center">
                <IconsList filter={searchTerm} height={40} width={40} color="black" />
            </div>
        </div>
  );
}
