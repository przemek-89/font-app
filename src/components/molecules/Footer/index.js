import {memo} from 'react';

import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      Footer always at the bottom
    </footer>
  );
}

export default memo(Footer);