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
        backgroundColor: "#2F855A",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#287d4f")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2F855A")}
    >
      {children}
    </button>
  );
}
