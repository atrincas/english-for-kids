import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
        <div className="nav">
            <a href="/">Home</a>
            {/* <a href="/#">Quiz</a>         */}
            <a href="https://github.com/atrincas/english-for-kids/blob/master/README.md" target="_blank" rel="noopener noreferrer" >About</a>
            <div className="dropdown">
                <button className="dropbtn">Sections</button>
                <div className="dropdown-content">
                    <a href="#" style={{fontSize:"30px", padding:"0px", margin:"5px 0px 5px 0px"}}>Colors</a>
                    <a href="#" style={{fontSize:"30px", padding:"0px", margin:"5px 0px 5px 0px"}}>Fruits</a>
                    <a href="#" style={{fontSize:"30px", padding:"0px", margin:"5px 0px 5px 0px"}}>Clothes</a>
                    <a href="#" style={{fontSize:"30px", padding:"0px", margin:"5px 0px 5px 0px"}}>Drinks</a>
                    <a href="#" style={{fontSize:"30px", padding:"0px", margin:"5px 0px 5px 0px"}}>Animals</a>
                    <a href="#" style={{fontSize:"30px", padding:"0px", margin:"5px 0px 5px 0px"}}>PartsofBody</a>
                </div>
            </div>                         
        </div>        
         
        )
    }


export default Navbar;