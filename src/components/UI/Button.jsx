import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button Component matching the client's guidelines
 * Height: 52px, Rounded: full, Fonts: Inter, Variants: Primary (Filled Navy) / Secondary (Outlined)
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyle = "inline-flex min-h-[48px] items-center justify-center rounded-full px-6 sm:px-8 font-inter text-xs sm:text-sm font-medium tracking-wider uppercase text-center transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 select-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-[#143464] hover:shadow-sm active:bg-[#061834]",
    secondary: "border border-primary text-primary hover:border-[#143464] hover:text-[#143464] hover:bg-background/50"
  };
  
  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
