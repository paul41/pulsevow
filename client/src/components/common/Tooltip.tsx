import { useState } from 'react';
import type { TooltipProps } from './types';
import '../../styles/Tooltip.css';

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