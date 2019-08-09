import React, { Component } from 'react';

export default class Compo3 extends Component {
    render(){
        return(
            <section id="three" class="main style1 special">
				<div class="container">
					<header class="major">
						<h2>React</h2>
					</header>
					<div class="row gtr-150">
						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="/images/react2.jpeg" alt="" /></span>
							<h3>Un composant à état</h3>
							<p>En plus de pouvoir recevoir des données (accessibles via this.props), un composant peut maintenir un état local (accessible via this.state). Lorsque l’état local d’un composant change, son affichage est mis à jour en appelant render() une nouvelle fois.</p>
							<ul class="actions special">
								
							</ul>
						</div>
						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="/images/react5.jpg" alt="" /></span>
							<h3>Un composant avec des plugins tiers</h3>
							<p>React est flexible et fournit divers moyens de l’intégrer avec d’autres bibliothèques ou frameworks. Cet exemple utilise remarkable, une bibliothèque tierce pour gérer le format Markdown, afin de convertir le contenu de la balise "textarea" en temps réel.</p>
							<ul class="actions special">
								
							</ul>
						</div>
						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="/images/react4.jpg" alt="" /></span>
							<h3>Une application</h3>
							<p>En utilisant propset state on peut créer une petite application de gestion de tâches. Cet exemple utilise state pour maintenir la liste des tâches et le texte que l’utilisateur a saisi. Bien que les gestionnaires d’événements soient définis directement dans le code, ils seront regroupés et gérés en utilisant les principes de délégation des événements.</p>
							<ul class="actions special">
								
							</ul>
						</div>
					</div>
				</div>
			</section>

        )
    }

};