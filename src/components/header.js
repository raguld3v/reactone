import './header.css';
import styles from './header.module.css';

function Header(){
    // const myStyle = {color:"red",backgroundColor:"lightblue"};
    return(
        <>
        {/* <h1 style={myStyle}>hello styling</h1> */}
        <h1 className={styles.bigBlue}>hello styling</h1>
        <p>add a lil style</p>
        </>
    )
}

export default Header;