import type { Dish } from './dish-model';
import baconEgg from '../images/plate__bacon-eggs.png';
import chickenSalad from '../images/plate__chicken-salad.png';
import fishSticksFries from '../images/plate__fish-sticks-fries.png';
import frenchFries from '../images/plate__french-fries.png';
import ravioli from '../images/plate__ravioli.png';
import salmonVegetables from '../images/plate__salmon-vegetables.png';
import spaghettiMeatSauce from '../images/plate__spaghetti-meat-sauce.png';
import tortellini from '../images/plate__tortellini.png';

export const dishes: Array<Dish> = [
  {
    id: '1',
    image: baconEgg,
    name: 'Bacon, Eggs, and Toast',
    price: 4.5,
    bgColor: 'rgba(122, 179, 243, 0.2)',
  },
  {
    id: '2',
    image: chickenSalad,
    name: 'Chicken Salad',
    price: 4.5,
    bgColor: 'rgba(233, 121, 178, 0.2)',
  },
  {
    id: '3',
    image: fishSticksFries,
    name: 'Fish Sticks Fries',
    price: 4.5,
    bgColor: 'rgba(215, 215, 249, 0.2)',
  },
  {
    id: '4',
    image: frenchFries,
    name: 'French Fries with Ketchup',
    price: 4.5,
    bgColor: 'rgba(120, 247, 187, 0.2)',
  },
  {
    id: '5',
    image: ravioli,
    name: 'Ravioli',
    price: 4.5,
    bgColor: 'rgba(122, 179, 243, 0.2)',
  },
  {
    id: '6',
    image: salmonVegetables,
    name: 'Salmon and Vegetables',
    price: 4.5,
    bgColor: 'rgba(233, 121, 178, 0.2)',
  },
  {
    id: '7',
    image: spaghettiMeatSauce,
    name: 'Spaghetti with Meat Sauce',
    price: 4.5,
    bgColor: 'rgba(215, 215, 249, 0.2)',
  },
  {
    id: '8',
    image: tortellini,
    name: 'Tortellini',
    price: 4.5,
    bgColor: 'rgba(120, 247, 187, 0.2)',
  },
];
