import {memo} from 'react';
import Box from '../../atoms/Box';

import './styles.scss';

const items = [
  {
    name: 'Title 1',
    href: '/',
    desc: 'Nullam lectus ipsum, dapibus a velit vel. Suspendisse condimentum, in suscipit odio purus sed augue.'
  },
  {
    name: 'Title 2',
    href: '/',
    desc: 'Nullam lectus ipsum, dapibus a velit vel. Suspendisse condimentum, in suscipit odio purus sed augue.'
  },
  {
    name: 'Title 3',
    href: '/',
    desc: 'Nullam lectus ipsum, dapibus a velit vel. Suspendisse condimentum, in suscipit odio purus sed augue.'
  },
  {
    name: 'Title 4',
    href: '/',
    desc: 'Nullam lectus ipsum, dapibus a velit vel. Suspendisse condimentum, in suscipit odio purus sed augue.'
  }
];

function Box1Section() {
  return (
    <section className="box1">
      {items.map((item, index) => (
        <Box key={index} className="box1__element">
          <h5 className="box1__title">{item.name}</h5>
          <a href={item.href} className="box1__link">link&#8250;</a>
          <div className="box1__image"></div>
          <p className="box1__desc">{item.desc}</p>
        </Box>
      ))}
    </section>
  );
}

export default memo(Box1Section);