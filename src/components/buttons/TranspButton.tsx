"use client";
import React from "react";

interface TranspButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function TranspButton({
  children,
  onClick,
  className = "",
}: TranspButtonProps) {
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
        backgroundColor: "transparent",
        boxShadow: "0 6px 18px rgba(15, 23, 42, 0.35)",
        border: "1px solid #2F855A",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2F855A")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
    >
      {children}
    </button>
  );
}