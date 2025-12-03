"use client";
import React from "react";

interface SolidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  shadow?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function SolidButton({
  children,
  onClick,
  className = "",
  type = "button",
  backgroundColor = "#38A169",
  hoverBackgroundColor = "#2F855A",
  textColor = "#FFFFFF",
  borderColor = "rgba(255,255,255,0.03)",
  borderRadius = "8px",
  padding = "8px 24px",
  fontSize = "16px",
  fontWeight = "500",
  shadow = "0 6px 18px rgba(15, 23, 42, 0.35)",
  fullWidth = false,
  disabled = false,
}: SolidButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={typeof children === "string" ? children : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative z-20
        font-medium 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-1
        transition-colors 
        duration-200 
        whitespace-nowrap
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      style={{
        backgroundColor: isHovered && !disabled ? hoverBackgroundColor : backgroundColor,
        color: textColor,
        border: `1px solid ${borderColor}`,
        borderRadius: borderRadius,
        padding: padding,
        fontSize: fontSize,
        fontWeight: fontWeight,
        boxShadow: shadow,
      }}
    >
      {children}
    </button>
  );
}