
import React, { useRef } from 'react';
import { UploadIcon } from './icons';

interface FileUploadProps {
    onFileUpload: (file: File) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onFileUpload(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".xlsx"
            />
            <button
                onClick={handleClick}
                className="flex items-center gap-2 bg-accent hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
                title="Upload monthly sales (.xlsx)"
            >
                <UploadIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Upload Sales</span>
            </button>
        </>
    );
};