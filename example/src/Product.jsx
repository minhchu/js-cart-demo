import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    background: #03fcfc;
    border-radius: 3px;
    margin: 30px 0px;
    padding: 10px;
`;

const Product = ({ data }) => (
    <Wrap>
        <p>Product ID: { data.id }</p>
        <p>Product Price: { data.price }</p>
        <p>Product URL: { data.url }</p>
        <img src={data.image}></img>
        <p>{ data.description }</p>
        <button className="js-cart"
            data-item-id={data.id}
            data-item-price={data.price}
            data-item-url={data.url}
            data-item-image={data.image}
            data-item-description={data.description}
        >Add to cart</button>
    </Wrap>
);

export default Product;
