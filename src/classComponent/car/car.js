import React from "react";

class Car extends React.Component {
    constructor(){
        super();
        this.state = {color: "red",model: "ford"}
    }


    render(){
        console.log("car state",this.state);
        return(
            // <><h1>my car is {this.state.color + " " + this.state.model}</h1><button onClick={() => { this.setState({ color: "blue" }); } }>Change color</button></>
            <><h1>my car is {this.state.color + " " + this.state.model}</h1><button onClick={() => { this.setState(previousState=>{return{...previousState,color:"blue"}}); } }>Change color</button></>
        )
    }
}

export default Car;