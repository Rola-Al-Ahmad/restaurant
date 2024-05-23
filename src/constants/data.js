import images from './image';

const juices = [
  {
    title: 'Spirulina Surge',
    price: '$4.99',
    tags: 'Blueberry | Banana | Apple Juice | Spirulina',
  },
  {
    title: 'Omega Mega',
    price: '$6.99',
    tags: 'Strawberry | Banana | Flax Oil | Apple Juice',
  },
  {
    title: 'Rise & Shine',
    price: '$7.99',
    tags: 'Coconut Water | Banana | Mango | Blueberry | Cinnamon',
  },
  {
    title: 'Liquid Sunshine',
    price: '$7.99',
    tags: 'Orange | Carrot | Ginger',
  },
  {
    title: 'Lemon Cleanser',
    price: '$7.99',
    tags: 'Apple | Lemon | Ginger | Cayenne',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { juices, cocktails, awards };
