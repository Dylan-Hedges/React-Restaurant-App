import image5 from './img/5.jpg';
import image7 from './img/7.jpg';
import image8 from './img/8.jpg';

var topimg = {
  title: 'JOES BBQ SMOKEHOUSE',
  phone: '(718) - 219 - 8652'
}
const contactus = {
  location: 'Los Angeles, California'
}

const specialmenu =[
  {
    title: 'Smoked Ribs',
        description: 'Full Rack of Ribs, Baked Potato or French Fries and side of Onion Rings',
    price: '$35',
    image: image7
  },
  {
    title: 'BBQ Chicken',
    description: 'Glazed BBQ Chicken, Coleslaw, Corn and Creamy Mashed Potatoes',
    price:'$30',
    image: image5
  },
  {
    title: 'All American Burgers',
    description: 'Freshly Ground Beef, Streaky Bacon, Cheddar Cheese and French Fries',
    price: '$25',
    image: image8
  }
]

const reviews = [
    {
      company: 'The Food Network',
      highlight: 'Best Restaurant in the L.A area!',
      author: 'Sarah Bastiachi',
      authorInfo: 'winner of the chef masters',
      review: 'Pariatur transferrem hic arbitror, o summis commodo pariatur, doctrina te quis singulis, aut expetendis ea mentitum. Minim ullamco philosophari, eu summis namtempor. De aut labore eiusmod.'
    },
    {
      company: 'HBO',
      highlight: 'Best Restaurant in the L.A area!',
      author: 'Sarah Bastiachi',
      authorInfo: 'winner of the chef masters',
      review: 'Pariatur transferrem hic arbitror, o summis commodo pariatur, doctrina te quis singulis, aut expetendis ea mentitum. Minim ullamco philosophari, eu summis namtempor. De aut labore eiusmod.'
    },
    {
      company: 'CBC',
      highlight: 'Best Restaurant in the L.A area!',
      author: 'Sarah Bastiachi',
      authorInfo: 'winner of the chef masters',
      review: 'Pariatur transferrem hic arbitror, o summis commodo pariatur, doctrina te quis singulis, aut expetendis ea mentitum. Minim ullamco philosophari, eu summis namtempor. De aut labore eiusmod.'
    },
    {
      company: 'MSNBC',
      highlight: 'Best Restaurant in the L.A area!',
      author: 'Sarah Bastiachi',
      authorInfo: 'winner of the chef masters',
      review: 'Pariatur transferrem hic arbitror, o summis commodo pariatur, doctrina te quis singulis, aut expetendis ea mentitum. Minim ullamco philosophari, eu summis namtempor. De aut labore eiusmod.'
    },
    {
      company: 'New York Times',
      highlight: 'Best Restaurant in the L.A area!',
      author: 'Sarah Bastiachi',
      authorInfo: 'winner of the chef masters',
      review: 'Pariatur transferrem hic arbitror, o summis commodo pariatur, doctrina te quis singulis, aut expetendis ea mentitum. Minim ullamco philosophari, eu summis namtempor. De aut labore eiusmod.'
    }
  ]

const reviewnumber = {
  currentreview: 0
}

const randomquote = [
  {
    authro: 'John Harrod',
    quote: ' "Simple ingredients prepared in a simple way - thats the best way to take your everyday cooking to a higher level." '
  },
  {
    authro: 'Ben Smith',
    quote: ' "Simple ingredients prepared in a simple way - thats the best way to take your everyday cooking to a higher level." '
  },
  {
    authro: 'Jenna Tyson',
    quote: ' "Simple ingredients prepared in a simple way - thats the best way to take your everyday cooking to a higher level." '
  },
]

//Must come last
const data = {
  topimg,
  contactus,
  specialmenu,
  reviews,
  reviewnumber
}
export default data;
