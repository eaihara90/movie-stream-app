import { ReactNode } from 'react';

import './InputContainer.scss';

interface InputContainerProps {
  children: ReactNode;
  label?: string;
  labelFor?: string;
}

export function InputContainer({ children, label, labelFor }: InputContainerProps): JSX.Element {
  return (
    <div className="input-container">
      { label && <label htmlFor={labelFor} className="label">{label}</label> }
      { children }
    </div>
  );
}