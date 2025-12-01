"use client";

import React from "react";

interface SolidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function SolidButton({
  children,
  onClick,
  className = "",
}: SolidButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={typeof children === "string" ? children : undefined}
      className={`
        relative z-20 shadow-md
        px-6 py-2 
        text-white 
        font-medium 
        rounded-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-1
        transition-colors 
        duration-200 
        whitespace-nowrap
        ${className}
      `}
      style={{
        backgroundColor: "#38A169", // brighter green for contrast
        boxShadow: "0 6px 18px rgba(15, 23, 42, 0.35)",
        border: "1px solid rgba(255,255,255,0.03)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2F855A")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#38A169")}
    >
      {children}
    </button>
  );
}
