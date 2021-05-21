import React from 'react';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Study from './Study/Study';
import Hobby from './Hobby/Hobby';
import ContactForm from './ContactForm/ContactForm';
import './Portfolio.css';

export default function Portfolio() {
    return (
        <div>
            <div className="pink"></div>
            <Skills />
            <Projects />
            <Experience />
            <Study />
            <Hobby />
            <ContactForm />
            <div className="pink">
            </div>
        </div>
    )
}