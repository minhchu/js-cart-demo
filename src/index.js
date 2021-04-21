import React, { useState, useEffect } from 'react'
import Backdrop from './Backdrop';
import styled from 'styled-components';

const Text = styled.p`
    color: #fff;
`;

export const ExampleComponent = () => {
  const [isOpen, setOpen] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
      const elements = document.getElementsByClassName('js-cart');
  
      for (let i = 0; i < elements.length; i++) {
          const el = elements[i];
          el.addEventListener('click', () => {
              setOpen(true);
              const data = el.dataset;
              setItem({
                  id:data.itemId,
                  price:data.itemPrice,
                  url:data.itemUrl,
                  description:data.itemDescription,
                  image:data.itemImage
              });
          });
      }
  })

  return (
    isOpen ? 
    <Backdrop onClick={() => setOpen(false)}>
        <Text>ID: {item.id}</Text> 
        <Text>Price: {item.price}</Text> 
        <Text>URL: {item.url}</Text> 
        <Text>Image: {item.image}</Text> 
        <Text>Description: {item.description}</Text> 
    </Backdrop> : null
  );
}
