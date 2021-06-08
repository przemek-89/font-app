import {memo} from 'react';
import clsx from 'clsx';

import './styles.scss';

function Box(props) {
  const{children, className} = props;

  return (
    <div className={clsx("box", className)}>
      {children}
    </div>
  );
}

export default memo(Box);