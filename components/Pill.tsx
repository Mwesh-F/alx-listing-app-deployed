// components/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2
        ${
          isActive
            ? "bg-[#FF5A5F] text-white border border-[#FF5A5F]"
            : "bg-[#F7F7F7] text-[#484848] border border-[#E0E0E0] hover:bg-[#ececec]"
        }
      `}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
};

export default Pill;