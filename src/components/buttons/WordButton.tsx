"use client";
import React from "react";

interface WordButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function WordButton({
  children,
  onClick,
  className = "",
}: WordButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={typeof children === "string" ? children : undefined}
      className={`
        px-4 py-2 
        text-white 
        font-medium 
        rounded-lg 
        hover:bg-white/10
        focus:outline-none 
        transition-colors 
        duration-200 
        whitespace-nowrap
        ${className}
      `}
    >
      {children}
    </button>
  );
}