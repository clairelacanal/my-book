import React from "react";
import axios from "axios";
import './Formulaire.css';


class Formulaire extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            prenom: '',
            nom:  '',
            email: '',
            sujet: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const {prenom, nom, email, sujet, message} = this.state;
        axios({
            method: "POST",
            url: "http://localhost:3000",
            data: this.state
        }).then((response) => {
            if(response.data.status === 'success'){
                alert("Message Sent");
                this.resetForm();
            }else if(response.data.status === 'fail'){
                alert("Message failed to send");
            }
        });
    }

    resetForm(){
        this.setState({prenom:'', nom: '', email: '', sujet: '', message: '' });
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    render(){
        return(
            <section className="formulaire">
                <form onSubmit={this.handleSubmit} method="POST">
                            <div className="names">
                                <input type="text" value={this.state.prenom} id="prenom" required placeholder="Prénom *" onChange={this.handleChange}></input>
                                <input type="text" value={this.state.nom} id="nom" required placeholder="Nom *" onChange={this.handleChange}></input>
                            </div>
                            <div className="email">
                                <input type="email" value={this.state.email} id="email" required placeholder='Email *' onChange={this.handleChange}></input>
                            </div>
                            <div className="sujet">
                                <input type="text" value={this.state.sujet} id="sujet" required placeholder='Sujet *' onChange={this.handleChange}></input>
                            </div>
                            <div className="message">
                                <textarea id="message" value={this.state.message} required placeholder='Message *' onChange={this.handleChange}></textarea>
                            </div>
                            <button type="submit" value="Submit">Envoyez le message</button>
                        </form>
            </section>
        )
    }
}

export default Formulaire;