import React, { Component } from 'react';

export default class Header extends Component {

    render(){
        return(
            <section id="header">
            <div className="inner">
                <span className="icon solid major fa-cloud"></span>
                <h1>Exercice <strong>React </strong>=> one page<br />
                Parcour d'apprentissage <a href="https://www.becode.org/">Becode.org</a>.</h1>
                <p>Liens GitHub repo:</p>
                <ul className="actions special">
                    <li><a href="https://github.com/becodeorg/CRL-Turing-3.11/tree/master/Parcours/07-ReactJS/01.Intro" className="button scrolly">GitHub</a></li>
                </ul>
            </div>
        </section>
        );
    }
};
