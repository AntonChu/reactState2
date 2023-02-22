import React, { useState } from 'react';
import './App.css';
import IconSwitch from './components/IconSwitch';

const Store = (props) => {
  const cards = props.cards;
  const [icon, setIcon] = useState('view_module');
  const onSwitch = () => {
    setIcon(prev => prev === 'view_module' ? 'view_list' : 'view_module')
  }

  return (
    <>
      <IconSwitch icon={icon} onSwitch={onSwitch} cards={cards}/>
    </>
  )
}

function App() {
  const products = [
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "1"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "2"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "3"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "4"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "7"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "5"
  }];

  return (
  <>
    <Store cards={ products } />
  </>
  )
}

export default App
