import React from "react";

import './Boards.scss'

import FirstNav from "./firstNav/FirstNav";
import SecondNav from "./secondNav/SecondNav";


const Boards = (props) => {

    return (

        <React.Fragment>

            <FirstNav/>
            <SecondNav/>

        </React.Fragment>


    )
};

export default Boards;
