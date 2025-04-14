import React from 'react';

interface PrimaryBtnProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ children, className }) => {
    return (
        <button
            className={`mb-2 mt-auto border-2 text-lg gap-2 border-[#ffffff1d] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 ${className}`}
        >
            {children}
        </button>
    );
};

export default PrimaryBtn;
