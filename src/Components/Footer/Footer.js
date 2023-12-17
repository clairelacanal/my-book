import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <section className="footer">
                <p>© 2022 ClaireLacanal - All Rights Reserved</p>
                <Link to="/mentions-legales">Mentions légales</Link>
            </section>
        )
    }
}

export default Footer;