// Assets
import HamburguesaImg from '../../assets/images/food/hamburguesa.jfif';
import PastelImg from '../../assets/images/food/pastel.jfif';
import PizzaImg from '../../assets/images/food/pizza.jfif';
import TacosImg from '../../assets/images/food/tacos.jfif';

export const drawerWidth = 290;

export const comidas = [
  {
    id: 1,
    titulo: 'Hamburguesa',
    descripcion: 'Deliciosa hamburguesa de res, con queso y pepinillos.',
    imagen: HamburguesaImg,
    precio: '$ 5.00',
  },
  {
    id: 2,
    titulo: 'Pizza',
    descripcion:
      'Deliciosa pizza de peperoni, con orilla de queso y salsa ranch.',
    imagen: PizzaImg,
    precio: '$ 6.00',
  },
  {
    id: 3,
    titulo: 'Pastel',
    descripcion: 'Delicioso pastel de tres leches con canela.',
    imagen: PastelImg,
    precio: '$ 2.80',
  },
  {
    id: 4,
    titulo: 'Tacos',
    descripcion: 'Deliciosos tacos de res, pollo, cerdo y con chismol.',
    imagen: TacosImg,
    precio: '$ 3.50',
  },
];
