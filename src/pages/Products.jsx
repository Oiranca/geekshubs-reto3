import React from 'react'
import SecondNav from "../componets/boards/secondNav/SecondNav";
import FirstNav from "../componets/boards/firstNav/FirstNav";

const Products =()=> {
    return (
        <React.Fragment>
            <FirstNav/>
            <SecondNav/>
        <div>
             <div className="products">
            <h1>Products</h1>
            </div>
        </div>
            </React.Fragment>
    )
}

export default Products;
