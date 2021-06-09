import React, {useEffect, useState, memo} from 'react';
import clsx from 'clsx';
import MobileMenu from '../MobileMenu';

import './styles.scss';

const navlinks = [
  {
    name: 'Item1',
    href: '/'
  },
  {
    name: 'Item2',
    href: '/'
  },
  {
    name: 'Item3',
    href: '/'
  }
]

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = 0;
    const sticky = window.pageYOffset > offset;
    setIsSticky(sticky);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className="header">
      <div className={clsx("header__wrapper", isSticky && "header__sticky")}>
        <p>Sticky header</p>
        <MobileMenu navlinks={navlinks} className="header__nav--mobile" />
        <nav className="header__nav--desktop">
          {navlinks && navlinks.map((item, index) => (
            <a key={index} className="header__nav--item" href={item.href}>{item.name}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default memo(Header);