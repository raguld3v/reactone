function Car(props){
    // const { carBrand, carColor } = props;
    const { carInfo } = props;
    const {brand, color} = carInfo;
    const text = `hi, Im a ${color + ' ' + brand} Car`;
    return (<h2>{text}</h2>)
}

export default Car;