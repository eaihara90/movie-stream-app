import { InputHTMLAttributes } from 'react';

import './Input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function Input({ ...props }: InputProps): JSX.Element {
  return (
    <input
      {...props}
      className="input"
    />
  );
}