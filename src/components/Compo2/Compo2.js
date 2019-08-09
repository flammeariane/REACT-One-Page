import React, { Component } from 'react';

export default class Compo2 extends Component {

render(){
    return(
        <section id="two" class="main style2">
        <div class="container">
            <div class="row gtr-150">
                <div class="col-6 col-12-medium">
                    <ul class="major-icons">
                        <li><span class="icon solid style1 major fa-code"></span></li>
                        <li><span class="icon solid style2 major fa-bolt"></span></li>
                        <li><span class="icon solid style3 major fa-camera-retro"></span></li>
                        <li><span class="icon solid style4 major fa-cog"></span></li>
                        <li><span class="icon solid style5 major fa-desktop"></span></li>
                        <li><span class="icon solid style6 major fa-calendar"></span></li>
                    </ul>
                </div>
                <div class="col-6 col-12-medium">
                    <header class="major">
                        <h2>Is React Translated Yet? ¡Sí! Sim! はい！
23 février 2019 par Nat Alison</h2>
                    </header>
                    <p>We’re excited to announce an ongoing effort to maintain official translations of the React documentation website into different languages. Thanks to the dedicated efforts of React community members from around the world, React is now being translated into over 30 languages! You can find them on the new Languages page.

In addition, the following three languages have completed translating most of the React Docs! 🎉

   <li>Spanish: es.reactjs.org</li> 
   <li>Japanese: ja.reactjs.org</li> 
   <li>Brazilian Portuguese: pt-br.reactjs.org</li> 

Special congratulations to Alejandro Ñáñez Ortiz, Rainer Martínez Fraga, David Morales, Miguel Alejandro Bolivar Portilla, and all the contributors to the Spanish translation for being the first to completely translate the core pages of the docs!</p>
                 
                </div>
            </div>
        </div>
    </section>
    );
}
};