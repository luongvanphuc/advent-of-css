import { Dish } from './dish.model';

import BaconEggsImage from '../images/plate__bacon-eggs.png';
import ChickenSaladImage from '../images/plate__chicken-salad.png';
import FishSticksFriesImage from '../images/plate__fish-sticks-fries.png';
import FrenchFriesImage from '../images/plate__french-fries.png';
import RavioliImage from '../images/plate__ravioli.png';
import SalmonVegetablesImage from '../images/plate__salmon-vegetables.png';
import SpaghettiMeatSauceImage from '../images/plate__spaghetti-meat-sauce.png';
import TortelliniImage from '../images/plate__tortellini.png';

export const dishes: Array<Dish> = [{
  id: 1,
  image: BaconEggsImage,
  name: 'Bacon, Eggs, and Toast',
  price: 4.5,
  bgColor: 'rgba(122, 179, 243, 0.2)',
}, {
  id: 2,
  image: ChickenSaladImage,
  name: 'Chicken Salad',
  price: 4.5,
  bgColor: 'rgba(233, 121, 178, 0.2)',
}, {
  id: 3,
  image: FishSticksFriesImage,
  name: 'Fish Sticks Fries',
  price: 4.5,
  bgColor: 'rgba(215, 215, 249, 0.2)',
}, {
  id: 4,
  image: FrenchFriesImage,
  name: 'French Fries with Ketchup',
  price: 4.5,
  bgColor: 'rgba(120, 247, 187, 0.2)',
}, {
  id: 5,
  image: RavioliImage,
  name: 'Ravioli',
  price: 4.5,
  bgColor: 'rgba(122, 179, 243, 0.2)',
}, {
  id: 6,
  image: SalmonVegetablesImage,
  name: 'Salmon and Vegetables',
  price: 4.5,
  bgColor: 'rgba(233, 121, 178, 0.2)',
}, {
  id: 7,
  image: SpaghettiMeatSauceImage,
  name: 'Spaghetti with Meat Sauce',
  price: 4.5,
  bgColor: 'rgba(215, 215, 249, 0.2)',
}, {
  id: 8,
  image: TortelliniImage,
  name: 'Tortellini',
  price: 4.5,
  bgColor: 'rgba(120, 247, 187, 0.2)',
}];
