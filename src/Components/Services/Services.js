import React from "react";
import './Services.css';
import Graph from '../images/Graphic design basics.png';

class Services extends React.Component{
    render(){
        return(
            <section id="services">
                <img src={Graph} alt="présentation des services"/>
            </section>
        )
    }
}

export default Services;