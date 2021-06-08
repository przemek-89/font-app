import {memo} from 'react';
import Box from '../../atoms/Box';

import './styles.scss';

const items = [
  {
    name: 'Title 5',
  },
  {
    name: 'Title 6',
  }
];

function Box2Section() {
  return (
    <section className="box2">
      {items.map((item, index) => (
        <Box key={index} className="box2__element">
          <div className="box2__image"></div>
          <h5 className="box2__title">{item.name}</h5>
        </Box>
      ))}
    </section>
  );
}

export default memo(Box2Section);