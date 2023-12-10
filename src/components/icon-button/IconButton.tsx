import { ButtonHTMLAttributes, ReactNode } from 'react';

import './IconButton.scss';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size: string;
}

export function IconButton({ children, size, ...props }: IconButtonProps): JSX.Element {
  const numericalSize = size.split(/px|rem|em/)[0];
  const unitIndexStart = size.search(/px|rem|em/);
  const unit = size.substring(unitIndexStart);
  const fontSize = `${(Number.parseFloat(numericalSize) / 2)}${unit}`;

  return (
    <button
      {...props}
      className="icon-button"
      style={{ width: size, height: size, fontSize: fontSize }}>
      {children}
    </button>
  );
}