import { useState } from "react";

function FavoriteColor(){
    const [color, setColor] = useState('blue');
    // let color = "blue";
    return(
        <><h1>My favo color is {color}</h1><button onClick={() => { setColor("red") } }>Change color</button></>
    )
}

export default FavoriteColor;