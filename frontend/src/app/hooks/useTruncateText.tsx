


import { useState, useEffect } from 'react';

const useTruncateText = ({text, containerWidth}: any) => {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    const getTextWidth = (text: any, fontSize = 16, fontFamily = 'arial') => {
        const canvas = document.createElement('canvas');
        let context: any  = canvas.getContext('2d');

        context = {
            ...context, 
            font: `${fontSize}px ${fontFamily}`
        };
        const textWidth = context.measureText(text).width;
        return textWidth;
    }
    const truncateText = () => {
      const textWidth = getTextWidth(truncatedText);
      if (textWidth > containerWidth) {
        setTruncatedText(truncatedText.slice(0, -1) + '…');
      }
    };
    truncateText();
  }, [containerWidth, truncatedText]);

  return truncatedText;
};

export default useTruncateText