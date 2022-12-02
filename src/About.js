import React from 'react';
import * as Icon from 'react-bootstrap-icons';

function About() {
    return (
        <div>
            <div className="container">
                <div className="row pb-2 border-bottom">
                    <h1>My Skills</h1>
                    <p>Here is an overview of what I can do.</p>
                </div>
            </div>
            <div className="container px-4 py-5" id="icon-grid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                    <div className="col">
                        <span className="skills-icon py-2 my-2 text-primary"><Icon.Code /></span>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">HTML/CSS</h3>
                        </div>
                    </div>
                    <div className="col">
                        <span className="skills-icon py-2 my-2 text-primary"><Icon.BracesAsterisk /></span>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">React</h3>
                        </div>
                    </div>
                    <div className="col">
                        <span className="skills-icon py-2 my-2 text-primary"><Icon.Bootstrap /></span>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">BootStrap</h3>
                        </div>
                    </div>
                    <div className="col">
                        <span className="skills-icon py-2 my-2 text-primary"><Icon.Boxes /></span>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">PostgreSQL</h3>
                        </div>
                    </div>
                    <div className="col">
                        <span className="skills-icon py-2 my-2 text-primary"><Icon.Braces /></span>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Javascript</h3>
                        </div>
                    </div>
                    <div className="col">
                        <span className="skills-icon py-2 my-2 text-primary"><Icon.DatabaseUp /></span>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">MongoDB</h3>
                        </div>
                    </div>
                    <div className="col">
                        <span className="skills-icon py-2 my-2 text-primary"><Icon.FiletypePy /></span>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Python</h3>
                        </div>
                    </div>
                    <div className="col">
                        <span className="skills-icon py-2 my-2 text-primary"><Icon.JournalCode /></span>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">NodeJS</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;