import React from "react";
import "./Accueil.css";



class Accueil extends React.Component{

    render(){
        return(
            <section className="presentation">
                <div className="presentation-background">
                    <div className="background-image">
                        <h1>Développeu<span>se</span> Web.|</h1>
                    </div>
                </div>
            </section>
        )
    }
}

export default Accueil;