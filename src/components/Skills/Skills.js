import React from 'react';
import './Skills.css';
import pauline from '../../assets/pauline-dero.jpeg';
import devblue from '../../assets/dev-blue.png';
import designblue from '../../assets/design-blue.png';
import seoblue from '../../assets/seo-blue.png';

export default function Skills() {
    return (
        <div>
            <section id="intro">
                <h1 className="intro-title">WEB DEVELOPER REACT-NODE</h1>
                <p className="intro-baseline">Bonjour, je suis Pauline. Ravie de faire votre connaissance !</p>
                <img
                    src={pauline}
                    alt="Pauline De Ro"
                    className="portrait"
                />
                <div className="intro-colored-box">
                    <p className="intro-presentation">
                        Depuis mes débuts professionnels, j'ai travaillé sur un nombre
                        important de projets. Ayant commencé au sein de la grande distribution,
                        j'ai poursuivi ma route vers les carburants et, ensuite,
                        vers la construction.
                        Je ne retiendrai qu'une seule chose : naturellement curieuse et persévérante, 
                        je m'intéresse à de nombreux domaines. Et ce qui me convient le mieux, 
                        c'est de voir que j'apporte au quotidien une valeur ajoutée à l'entreprise
                        pour laquelle je travaille. Et si, en plus, elle me permets de continuer à
                        apprendre et à évoluer, nous formerons la meilleure des équipes !
                    </p>
                </div>
            </section>

            <section id="skills">
                <div id="Web development" className="skills-blocks">
                    <img
                        src={devblue}
                        alt="development"
                        className="icons"
                    />
                    <h2 className="skills-titles">Web development</h2>
                    <p className="skills-info">
                        J'aime coder, tout simplement. Le code est un défi que
                        l'on peut relever de manière créative. Il existe plusieurs
                        solutions pour arriver au même rendu.
                </p>
                    <h3 className="skills-subtitles">Mes outils de développement</h3>
                    <ul className="skills-list">
                        <li>HTML / CSS / JavaScript</li>
                        <li>SQL</li>
                        <li>React.js</li>
                        <li>Node.js / NPM</li>
                        <li>Express.js</li>
                        <li>REST Api's / Postman</li>
                        <li>Visual Studio Code</li>
                        <li>Git / GitHub</li>
                        <li>Jira Project Management</li>
                    </ul>
                </div>

                <div id="Design" className="skills-blocks">
                    <img
                        src={designblue}
                        alt="design"
                        className="icons"
                    />
                    <h2 className="skills-titles">Design</h2>
                    <p className="skills-info">
                        Avant de coder, je passe par une phase d'analyse et de création
                        de mock-ups : qu'attend l'utilisateur final ? Et comment
                        peut-on faire pour répondre à sa demande efficacement ?
                </p>
                    <h3 className="skills-subtitles">Mes outils de design</h3>
                    <ul className="skills-list">
                        <li>Adobe InDesign</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe Photoshop</li>
                        <li>Figma</li>
                    </ul>
                </div>

                <div id="SEO" className="skills-blocks">
                    <img
                        src={seoblue}
                        alt="seo"
                        className="icons"
                    />
                    <h2 className="skills-titles">SEO</h2>
                    <p className="skills-info">
                        Grâce à mon expérience en marketing, je suis en mesure d'orienter
                        la sémantique et la structure d'un contenu afin qu'il réponde à
                        la recherche de l'utilisateur.
                </p>
                    <h3 className="skills-subtitles">Mes plateformes</h3>
                    <ul className="skills-list">
                        <li>Google Analytics</li>
                        <li>Google Trends</li>
                        <li>Google Search Console</li>
                        <li>1.fr</li>
                        <li>SEM Rush</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}