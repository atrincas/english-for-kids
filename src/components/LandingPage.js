import React from 'react';
import Quiz from "./Quiz"
import colors from '../styles/images/colors.jpg';
import fruits from '../styles/images/fruits.jpg';
import clothes from '../styles/images/clothes.jpg';
import drinks from '../styles/images/drinks.jpg';
import animals from '../styles/images/animals.jpg';
import partsOfBody from '../styles/images/partsOfBody.jpg';


class LandingPage extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            section: ""
        }

		this.sectionSelection = this.sectionSelection.bind(this);
	}


    sectionSelection = (e) => {          
        this.setState({section: e.currentTarget.id })
        setTimeout(() => {
            console.log(this.state)
        }, 1000);         
    }
    

    render() {

                
        if (this.state.section === "") {
                return (                    
                    <div>
                        <div className="LPImage">
                            <div className="LPcontainer">                
                            </div>                
                        </div>
                        <p className="welcome">Welcome to English For Kids</p>
                        <div className="row">
                            <div  className="column" >                    
                                <a href="#"  rel="noopener noreferrer" onClick={ this.sectionSelection } id="colors"  className="rc">
                                    <img src={colors}   alt="colors"/>
                                    <div className="middle">
                                        <div className="text"  >Colors</div>
                                    </div>
                                </a>                  
                            </div>
                            <div className="column" >
                            <a href="/#" onClick={ this.sectionSelection } id="fruits"  className="rc">
                                    <img src={fruits} alt="fruits"/>
                                    <div className="middle">
                                        <div className="text" >Fruits</div>
                                    </div>
                                </a>                    
                            </div>
                        </div>
                        <div className="row">
                            <div className="column" >
                            <a href="#" onClick={ this.sectionSelection } id="clothes" className="rc">
                                    <img src={clothes} alt="clothes"/>
                                    <div className="middle">
                                        <div className="text">Clothes</div>
                                    </div>
                                </a>                    
                            </div>
                            <div className="column" >
                            <a href="#" onClick={ this.sectionSelection } id="drinks" className="rc">
                                    <img src={drinks} alt="drinks"/>
                                    <div className="middle">
                                        <div className="text">Drinks</div>
                                    </div>
                                </a>                    
                            </div>
                        </div>
                        <div className="row">
                            <div className="column" >
                            <a href="#" onClick={ this.sectionSelection } id="animals" className="rc">
                                    <img src={animals}  alt="animals"/>
                                    <div className="middle">
                                        <div className="text">Animals</div>
                                    </div>
                                </a>                    
                            </div>
                            <div className="column" >
                            <a href="#" onClick={ this.sectionSelection } id="partsOfBody"className="rc">
                                    <img src={partsOfBody} alt="partsOfBody"/>
                                    <div className="middle">
                                        <div className="text">Parts Of Body</div>
                                    </div>
                                </a>                    
                            </div>
                        </div>
                    </div>                    
                )
        }           
        else if ( this.state.section === "colors" || "fruits" || "clothes" || "drinks" || "animals" || "partsOfBody") {
            const prop = this.state.section
            const section = this.props
            return (
            <Quiz 
            newState = { prop }
            />
            )
        }
    }
}

export default LandingPage;    