import {useState, useEffect, memo} from 'react';

import './styles.scss';

function FontChangeSection() {
  const htmlElement = document.documentElement.style;
  const localStorage = window.localStorage;
  const checkFontValue = JSON.parse(localStorage.getItem('FS')) || 100;
  const [fontSizeValue, setFontSizeValue] = useState(checkFontValue);
  const [isMounted, setIsMounted] = useState(true);
  const [isLimit, setIsLimit] = useState(false);

  const incrementFont = () => {
    if (fontSizeValue < 125) {
      setFontSizeValue(fontSizeValue + 5);
      setIsLimit(false);
    } else {
      setIsLimit(true);
      setTimeout(() => {
        setIsLimit(false);
      }, 5000);
    }
  }

  const decrementFont = () => {
    if (fontSizeValue > 75) {
      setFontSizeValue(fontSizeValue - 5);
      setIsLimit(false);
    } else {
      setIsLimit(true);
      setTimeout(() => {
        setIsLimit(false);
      }, 5000);
    }
  }

  const unmountComponent = () => {
    setIsMounted(false);
  }

  useEffect(() => {
    htmlElement.fontSize = `${fontSizeValue}%`;
    localStorage.setItem('FS', fontSizeValue);
  });

  if (!isMounted) {
    return null;
  }

  return (
    <section className="font-changer">
      <button onClick={() => unmountComponent()} className="close__btn"></button>
      {isLimit && <p className="font-changer__limit">osiągnięto limit</p>}
      <p>Font size: </p>
      <p>{fontSizeValue}%</p>
      <button onClick={() => decrementFont()} className="font-changer__btn">-</button>
      <button onClick={() => incrementFont()} className="font-changer__btn">+</button>
    </section>
  );
}

export default memo(FontChangeSection);