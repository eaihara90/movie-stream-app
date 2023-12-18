import { TextareaHTMLAttributes } from 'react';
import './Textarea.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

export function Textarea({ ...props }: TextareaProps): JSX.Element {
  return (
    <textarea {...props} className="text-area"></textarea>
  )
}