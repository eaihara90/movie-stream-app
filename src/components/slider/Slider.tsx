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
        setTranslation(_prev => _prev + (window.innerWidth / 2));
        break;
      case 'right':
        console.log(window.innerWidth)
        setTranslation(_prev => _prev - (window.innerWidth / 2));
        break;
    }
  }

  // const calculateTranslation = () => {
  //   sliderContent.current?.firstChild?.ATTRIBUTE_NODE
  // }
  
  return (
    <div className="slider">
      <button
        disabled={translation >= 0}
        onClick={() => handleNavigate('left')}>
        <i className="ph ph-caret-circle-left"></i>
      </button>

      <div className="slider-content" ref={sliderContent} style={{ translate: translation }}>
        {children}
      </div>

      <button onClick={() => handleNavigate('right')}>
        <i className="ph ph-caret-circle-right"></i>
      </button>
    </div>
  );
}