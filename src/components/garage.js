import Car from './car';
import Apple from '../classComponent/apple';

function Garage(){
    const isDoorOpened = false;
    // const brand = "ferrari";
    // const color = "black";
    const carInfo = {brand: "Ferrari", color: "black"};
    // const carInfo = {};
    const appleInfo = {type: "fuji", color:"red"};
    const carList = [
        {brand: "bwm", color: "Red"},
        {brand: "ford", color: "blue"},
        {brand: "ferrari", color: "black"},
    ];

    const numberList = [1,2,3,4,5,6];

    const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined;

    return(
        <>
        <h3>Who is this</h3>
        {/* <Car carBrand={brand} carColor={color}/> */}
        {showCarInfo && <Car carInfo={carInfo}/>}
        <Apple appleInfo={appleInfo}/>
        {isDoorOpened?<h2>Garage door is open</h2>:<h2>Garage door is close</h2>}
        <ul>
            {carList.map((carInfo)=> <li key={carInfo.brand}><Car carInfo={carInfo}/></li>)}
        </ul>
        <ul>
            {numberList.map((e,index)=><p key={index}>{e}</p>)}
        </ul>
        </>
    )
}

export default Garage;