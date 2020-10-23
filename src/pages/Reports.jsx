import React from 'react'
import FirstNav from "../components/boards/firstNav/FirstNav";
import SecondNav from "../components/boards/secondNav/SecondNav";

const Reports =()=> {
    return (
        <React.Fragment>
            <FirstNav/>
            <SecondNav/>
            <div>
                <div className="reports">
                    <h1>Reports</h1>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Reports;
