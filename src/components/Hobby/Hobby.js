import React from 'react';
import './Hobby.css';
import tools from '../../assets/tools.png';
import family from '../../assets/family.png';

export default function Hobby() {
    return (
        <section id="hobby">
            <div className="hobby-colored-box">
                <h2 className="hobby-title">Mon temps libre, je le passe à ...</h2>
                <p className="hobby-info"></p>
            </div>
            <div className="all-hobbies">
                <div className="hobby-blocks">
                    <img
                        src={family}
                        alt="family"
                        className="icons"
                    />
                    <h3 className="hobby-titles">Ma famille</h3>
                    <p className="hobby-info">
                        Maman de deux petites filles, je passe une grande partie de mon temps
                        libre à trouver des activités à réaliser avec elles. Que ce soit du bricolage,
                        du coloriage ou de la pâtisserie, tout est bon pour s'occuper et éveiller leur curiosité.
                    </p>
                </div>
                <div className="hobby-blocks">
                    <img
                        src={tools}
                        alt="outils"
                        className="icons"
                    />
                    <h3 className="hobby-titles">La rénovation intérieure</h3>
                    <p className="hobby-info">
                        Parallèlement au code, ma grande passion se révèle être la rénovation intérieure.
                        Rien de tel que le travail manuel pour faire s'évader l'esprit. Et tout y passe :
                        pose de parquet, peinture, carrelage... J'adore décorer
                        les espaces de vie !
                    </p>
                </div>
            </div>
        </section>
    )
}