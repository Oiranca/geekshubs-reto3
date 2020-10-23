import React from 'react'
import SecondNav from "../components/boards/secondNav/SecondNav";
import FirstNav from "../components/boards/firstNav/FirstNav";
import './Products.scss';

const Products =()=> {
    return (
        <React.Fragment>
            <FirstNav/>
            <SecondNav/>

             <div className="products">
            <h1>Products</h1>
            </div>

            </React.Fragment>
    )
}

export default Products;
