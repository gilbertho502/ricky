import React from "react";

const Footer = ({brand}) => {
    return(
        <div className="navbar navbar-dark bg-dark fixed-bottom">
            <div className="container .text-light">
                {brand} 
            </div>
        </div>
    )
}

export default Footer