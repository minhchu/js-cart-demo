import React from 'react'

import { ExampleComponent } from 'js-cart-demo'
import 'js-cart-demo/dist/index.css'
import Product from './Product'

const products = [{
  "id": 1,
  "price": 77.8,
  "url": "http://plala.or.jp/lectus.json",
  "description": "Wine - Carmenere Casillero Del",
  "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
}, {
  "id": 2,
  "price": 95.48,
  "url": "https://ycombinator.com/blandit.js",
  "description": "Beef - Inside Round",
  "image": "http://dummyimage.com/100x100.png/dddddd/000000"
}, {
  "id": 3,
  "price": 96.56,
  "url": "http://constantcontact.com/eu/felis/fusce/posuere/felis/sed.png",
  "description": "Energy Drink Bawls",
  "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
}, {
  "id": 4,
  "price": 88.92,
  "url": "http://pagesperso-orange.fr/tempus/sit/amet/sem.jpg",
  "description": "Ocean Spray - Kiwi Strawberry",
  "image": "http://dummyimage.com/100x100.png/dddddd/000000"
}, {
  "id": 5,
  "price": 1.36,
  "url": "http://naver.com/ut/nulla/sed/accumsan/felis/ut/at.json",
  "description": "Muffin Hinge 117n",
  "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
}]

const App = () => {
  return (
      <div>
        {products.map((product, index) => (
            <Product data={product} key={index}/>
        ))}
        <ExampleComponent text="Create React Library Example 😄" />
      </div>
  );
}

export default App
