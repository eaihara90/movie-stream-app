import { ReactNode, useRef, useState } from 'react';
import './Slider.scss';

interface SliderProps {
  children: ReactNode;
}

export function Slider({ children }: SliderProps): JSX.Element {
  const sliderContent = useRef<HTMLDivElement>(null);
  const [translation, setTranslation] = useState<number>(0);

  const handleNavigate = (direction: 'left' | 'right'): void => {
    
    switch (direction) {
      case 'left':
        setTranslation(_prev => ((window.innerWidth / 3) + translation > 0 ? 0 : _prev + (window.innerWidth / 3)));
        break;
      case 'right':
        setTranslation(_prev => _prev - (window.innerWidth / 3));
        break;
    }
  }
  
  return (
    <div className="slider">
      <button
        className="btn-control left"
        disabled={translation >= 0}
        onClick={() => handleNavigate('left')}>
        <i className="ph ph-caret-left"></i>
      </button>

      <div className="slider-content" ref={sliderContent} style={{ translate: translation }}>
        {children}
      </div>

      <button
        className="btn-control right"
        onClick={() => handleNavigate('right')}>
        <i className="ph ph-caret-right"></i>
      </button>
    </div>
  );
}