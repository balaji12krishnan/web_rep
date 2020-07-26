import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    name: 'covid-19',
    imageUrl: '/images/products/covid19.jpg',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: '#Food',
    imageUrl: '/images/products/food.jpg',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: '#Earthquake',
    imageUrl: '/images/products/earth.jpg',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: '#cyclone',
    imageUrl: '/images/products/cyclone.jpg',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: '#Water',
    imageUrl: '/images/products/water.jpg',
    updatedAt: moment().subtract(9, 'hours')
  }
];
