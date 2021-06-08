import {memo} from 'react';

import './styles.scss';

function HeroSection() {
  return (
    <section className="hero">
      <h1 className="hero__title">Centered text</h1>
    </section>
  );
}

export default memo(HeroSection);