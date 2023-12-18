import { FormEvent, ReactNode } from 'react';

import './Form.scss';

interface FormProps {
  children: ReactNode;
  onSubmit: (_ev: FormEvent) => void
}

export function Form({ children, onSubmit }: FormProps): JSX.Element {
  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    onSubmit(ev);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      { children }
    </form>
  )
}