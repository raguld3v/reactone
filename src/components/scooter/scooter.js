import { useState } from "react";

function Scooter(){

    const [scooter,setScooter] = useState({
        color:"red",
        brand:"honda",
        model:"activa 6g",
        year:"2020"
    })

    const updateColor = () => setScooter(previousState=>{
        return {...previousState,color:"blue"}
    });

    // console.log('current state',scooter);
    // const [color,setColor] = useState("red");
    // const [brand,setbrand] = useState("honda");
    // const [model,setModel] = useState("activa 6g");
    // const [year,setYear] = useState("2020")
    return(
        <><h1>My scooter</h1><p>color: {scooter.color}</p><p>brand: {scooter.brand}</p><p>model: {scooter.model}</p><p>year: {scooter.year}</p><button onClick={updateColor}>Change color</button></>
    )
}

export default Scooter;