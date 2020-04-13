import React, { Component } from 'react'
function FancyBorder(props) {
return (
    <div style={{color:props.color}}> 
    {props.children}
    </div>
);
}
function WelcomeDialog() {
return (
    <FancyBorder color="blue">
    <h1>
        Welcome
    </h1>
    <p>
        Thank you for visiting our spacecraft!
    </p>
    </FancyBorder>
);
}
class Fancy extends Component { 
    render() { 
        return ( 
            <div>
                {
                    WelcomeDialog()
                }
            </div>
         );
    }
}
 
export default Fancy;