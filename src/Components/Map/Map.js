import React from "react";
import './Map.css';

class Map extends React.Component{
    render(){
        return(
            <section className="map">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4049.1112555606073!2d2.373470645019817!3d48.84822096925862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720574c1e7b1%3A0xcbaff2e66ba9f8e4!2s92%20Rue%20de%20Charenton%2C%2075012%20Paris!5e0!3m2!1sen!2sfr!4v1650612388387!5m2!1sen!2sfr" 
                width="600" 
                height="280" 
                style={{ border: 0 }} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </section>
        )
    }
}

export default Map;