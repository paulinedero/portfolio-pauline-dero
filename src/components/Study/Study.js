import React from 'react';
import './Study.css';
import diplomawhite from'../../assets/diploma-white.png';
import languageswhite from '../../assets/languages-white.png'

export default function Study () {
    return (
        <section id="studies">
                <h2 className="studies-title">Mes études</h2>
                <p className="studies-intro">Retrouvez ci-dessous le détail concernant mes études ainsi que les langues que je parle.</p>
                <div className="studies">
                    <div className="studies-blocks">
                        <img src={diplomawhite} alt="diploma" className="icons"/>
                        <h2 className="studies-titles">Cursus académique</h2>
                        <p className="studies-info">IHECS - Master en Communication Appliquée</p>
                        <p className="studies-info">Relations Publiques, Knowledge Management and Change Management</p>
                        <p className="studies-info">Mention : Grande Distinction</p>
                    </div>

                    <div className="studies-blocks">
                        <img src={languageswhite} alt="languages" className="icons"/>
                        <h2 className="studies-titles">Langues</h2>
                        <p className="studies-info">Français : langue maternelle (C2)</p>
                        <p className="studies-info">Néerlandais : Compétences professionnelles complètes (C1)</p>
                        <p className="studies-info">Anglais : Compétences professionnelles (B2)</p>
                    </div>
                </div>
            </section>
    )
}