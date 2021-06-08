import React, {memo} from 'react';
import clsx from 'clsx';

import './styles.scss';

function MobileMenu(props) {
  const {navlinks, className} = props;

  return (
    <nav role="navigation" className={clsx(className)}>
      <div className="togglemenu">
        <input type="checkbox" />
        <span>Menu</span>
        <div className="backdropmenu">
          {navlinks && navlinks.map((item, index) => (
            <a key={index} href={item.href}>{item.name}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default memo(MobileMenu);