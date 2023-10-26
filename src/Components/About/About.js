import React from "react";
import './About.css';
import photo from '../images/c-lacanal-carre.png';
import Presentation from "../Presentation/Presentation";
import Skills from "../Skills/Skills";

class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            myPresentation : true,
            mySkills : false
        };
        this.handleClickMyPresentation = this.handleClickMyPresentation.bind(this);
        this.handleClickMySkills = this.handleClickMySkills.bind(this);
    }

    handleClickMyPresentation() {
        this.setState(state => ({
          myPresentation: true,
          mySkills: false
        }));
      }

    handleClickMySkills() {
        this.setState(state => ({
          mySkills: true,
          myPresentation: false
        }));
      }

    render(){
        return(
            <section id="about">
                <div className="container-about">
                    <div className="photo">
                        <img src={photo} alt="photo-claire"/>
                    </div>
                    <div className="container-presentation">
                        <div className="liens">
                            <a onClick={this.handleClickMyPresentation} className="a-propos">
                                A propos
                            </a>
                            <a onClick={this.handleClickMySkills} className="mes-competences">
                                Mes compétences
                            </a>
                        </div>
                        <div className="paragraphes-presentation">
                            <p>{this.state.myPresentation ? <Presentation/> : <Skills/>}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;