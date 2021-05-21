import React from 'react';
import './Experience.css'

export default function Experience() {
    return (
        <section id="experience">
            <div className="experience-colored-box">
                <h2 className="experience-title">Mes expériences</h2>
                <p className="experience-intro">Retrouvez ici le détail de mes expériences professionnelles précédentes.</p>
            </div>
            <div className="all-experiences">
                <div className="experience-blocks">
                    <h3 className="experience-subtitles">Junior Web Developer</h3>
                    <p className="experience-date">Mars 2021</p>
                    <p className="experience-date">Wild Code School</p>
                    <ul className="experience-info">
                        <li>Travaille au quotidien avec Ubuntu, la CLI, Git-GitHub, Slack/Discord et en utilisant la méthode SCRUM.</li>
                        <li>Prends en compte les besoins client</li>
                        <li>Définis les spécificités techniques d'un projet</li>
                        <li>Mets au point les maquettes</li>
                        <li>Développe les composants nécessaires. Aussi bien Front-end que Back-end.</li>
                        <li>Fixe les problèmes et bugs</li>
                    </ul>
                </div>
                <div className="experience-blocks">
                    <h3 className="experience-subtitles">Marketing Manager</h3>
                    <p className="experience-date">Juin2018 - Mars 2021</p>
                    <p className="experience-date">Maison Modulart</p>
                    <ul className="experience-info">
                        <li>Elaboration d'un stratégie de marketing digital pour favoriser la génération de prospects</li>
                        <li>Elaboration d'un brandbook complet</li>
                        <li>Analyse des groupes-cibles par la technique des Personas</li>
                        <li>Réalisation d'un plan de communication annuel et gestion du budget associé</li>
                        <li>Gestion complète du site internet wordpress / Avada</li>
                        <li>Marketing automation et campagnes d'emailing avec Mailchimp</li>
                        <li>Participation à la mise en place et au développement de l'ERP Mercator</li>
                        <li>Réalisation des supports de communication (print et online)</li>

                    </ul>
                </div>
                <div className="experience-blocks">
                    <h3 className="experience-subtitles">Project Manager Coordinator Marketing</h3>
                    <p className="experience-date">Août 2014 - Mai 2018</p>
                    <p className="experience-date">DATS 24 - Colruyt Group</p>
                    <ul className="experience-info">
                        <li>Responsable du volet communication client pour le lancement de la carte Xtra chez DATS 24.</li>
                        <li>Analyse des groupes-cibles</li>
                        <li>Elaboration de plans de communication</li>
                        <li>Elaboration de campagnes de communication et de Marketing direct</li>
                        <li>Rédaction de briefings destinés aux agences</li>
                        <li>Elaboration d'outils de communication (salesmap, direct mailing, etc.)</li>
                        <li>Particpation à la mise en place de Salesforce pour l'équipe de commerciaux</li>
                    </ul>
                </div>
                <div id="previous-exp" className="experience-blocks">
                    <h3 className="experience-subtitles">Autres</h3>
                    <p className="experience-date">Avant août 2014</p>
                    <ul className="experience-info">
                        <li>Copywriter Info Produits chez Premedia (Colruyt Group)</li>
                        <li>Stage en communication interne chez Delhaize Belgique</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}