import { useState } from 'react';
import type { ReactNode } from 'react';
import '../../styles/Tooltip.css';

interface TooltipProps {
  text: ReactNode;
  children: ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  width?: string | number;
}

export default function Tooltip({ text, children, position = 'top', width = 'inherit' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      style={{width}}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`tooltip-box tooltip-${position}`}>
          {text}
        </div>
      )}
    </div>
  );
}
