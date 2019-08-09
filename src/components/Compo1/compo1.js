import React, { Component } from 'react';

export default class Compo1 extends Component {
render(){
    return(
        <section id="one" class="main style1">
        <div class="container">
            <div class="row gtr-150">
                <div class="col-6 col-12-medium">
                    <header class="major">
                        <h2>React</h2>
                        <h3>

Une bibliothèque JavaScript pour créer des interfaces utilisateurs</h3>
                    </header>
                    <p>Grâce à React, il est facile de créer des interfaces utilisateurs interactives. Définissez des vues simples pour chaque état de votre application, et lorsque vos données changeront, React mettra à jour, de façon optimale, juste les composants qui en auront besoin.</p>
                </div>
                <div class="col-6 col-12-medium imp-medium">
                    <span class="image fit"><img src= "/images/react.png" alt="react logo" /></span>
                </div>
            </div>
        </div>
    </section>
    );
}
};