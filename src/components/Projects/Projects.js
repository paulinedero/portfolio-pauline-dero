import React from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <section id="project">
            <h2 className="project-title">Mes projets</h2>
            <p className="project-intro">
                Retrouvez ci-dessous les projets réalisés depuis ma réorientation
                vers le développement web.
            </p>

            <div className="all-projects">
                <div id="space-explorer" className="project-blocks">
                    <h3 className="project-subtitles">Space Explorer</h3>
                    <p className="project-date">Mai 2021</p>
                    <p className="project-info">
                        Grande gagnante du 1e Hackathon de la Wild Code School, cette app a
                        pour objectif de rendre l'apprentissage du système solaire ludique et facile.
                    </p>
                    <p className="project-collab">
                        Réalisé en collaboration avec : Dumitru Zgherea
                    </p>
                    <a
                        href="https://paulinedero.github.io/solar-system/"
                        target="blank"
                        className="link"
                    >
                        Voir le projet
                    </a>
                </div>

                <div id="be-safe" className="project-blocks">
                    <h3 className="project-subtitles">Be-Safe</h3>
                    <p className="project-date">Avril - Mai 2021</p>
                    <p className="project-info">
                        Cette app a pour but d'informer l'utilisateur de la situation
                        sanitaire reliée au Coronavirus, soit par la géolocation, soit par un filtre.
                    </p>
                    <p className="project-collab">
                        Réalisé en collaboration avec : Mario Carvalho et Xavier Dewez
                    </p>
                    <a
                        href="https://paulinedero.github.io/be-safe/"
                        target="blank"
                        className="link"
                    >
                        Voir le projet
                    </a>
                </div>

                <div id="game-studio" className="project-blocks">
                    <h3 className="project-subtitles">Game Studio</h3>
                    <p className="project-date">Mars - Avril 2021</p>
                    <p className="project-info">
                        1e exercice à la Wild Code School : Petit site HTML/CSS rassemblant
                        des jeux en ligne. Les jeux ne sont pas fonctionnels.
                    </p>
                    <p className="project-collab">
                        Réalisé en collaboration avec : Dumitru Zgherea et Sam Azinfar
                    </p>
                    <a
                        href="https://paulinedero.github.io/game-site/"
                        target="blank"
                        className="link"
                    >
                        Voir le projet
                    </a>
                </div>

                <div id="app-react-native" className="project-blocks">
                    <h3 className="project-subtitles">App React Native</h3>
                    <p className="project-date">Mai - Juillet 2021</p>
                    <p className="project-info">
                        Application React réalisée pour un commanditaire externe.
                    </p>
                    <p className="project-collab">Coming soon...</p>
                </div>
                
            </div>
        </section>
    )
}