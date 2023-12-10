import { useEffect, useState } from 'react';

const ROOT_TITLE: string = 'NetFreelix';

export function useBrowserTitle(initialValue?: string): React.Dispatch<React.SetStateAction<string>> {

  const [title, setTitle] = useState<string>(() => {
    return !initialValue ?  '' : initialValue;
  });

  useEffect(() => {
    document.title = ROOT_TITLE;
    
    if (title) {
      document.title += ` | ${title}`;
    }
  }, [title]);
  
  return setTitle;
}