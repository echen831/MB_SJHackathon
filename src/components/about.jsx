import React from 'react';

export const About = () => {
    return (
        <div className="about-all">

            <div className="about-1">
                <div className="objective">
                    <h1 className="">Objective</h1>
                    <p>Covid Daily Data is a data visual project completed for Mintbean's Social Justice Hackathon from Dec 4, 2020 to Dec 10, 2020. This project was built to provide updated Covid-19 data daily and as an extension to our Stop the Spread App.</p>
                    <li>Visit: <a href="https://rasheeq-ahmed.github.io/StoptheSpread/"> Stop the Spread </a></li>
                </div>
                <img src="https://directorsblog.nih.gov/wp-content/uploads/2020/03/COVID-19-Card-3.jpg" alt="" />
            </div>
            <div className="about-2">
                <div className="duration">
                    <h2>Duration</h2>
                    <img src="https://i.imgur.com/Nc2p740.png" alt="" />
                    <p>1 Week</p>

                </div>
                {/* <div className="prize">
                    <h2>Mintbean Hackathon</h2>
                    <img src="https://i.imgur.com/Rhi2W9b.png" alt="" />
                    <p>Honorable Mention</p>
                </div> */}
                <div className="tech">
                    <h2>Technology</h2>
                    <div className='tech-images'>
                        <div>
                            <img src="https://i.imgur.com/xQhefcL.png" alt="" />
                            <p>Javascript</p>
                        </div>
                        <div>
                            <img src="https://cdn.auth0.com/blog/react-js/react.png" alt="" />
                            <p>React</p> 
                        </div>
                        <div>
                            <img src="https://avatars3.githubusercontent.com/u/1562726?s=400&v=4" alt="" />
                            <p>D3</p>
                        </div>
                        <div>
                            <img src="https://coursehunters.online/uploads/default/original/2X/f/f1477b754f60a99bb5346934fb69c9f728ccf338.png" alt="" />
                            <p>Recharts</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="about-body">
                <div className="about-people-all">
                    <h1 id='team'>Created by</h1>
                    <div className="about-team-members">

                        <div className="person">
                            <div className="person-pic">
                                <img src="https://i.imgur.com/9TC4MxW.jpg" alt="" />
                            </div>
                            <h4 className="person-name">Rasheeq Ahmed</h4>
                            <div className="person-links">
                                <a href="https://www.linkedin.com/in/rasheeq-ahmed-53b7aa91/" target="_blank">
                                    <img id="linked-icon" src="https://i.imgur.com/Xm1qtqN.png" />
                                </a>
                                <a href="https://github.com/Rasheeq-Ahmed" target="_blank">
                                    <img id="git-icon" src="https://i.imgur.com/vwPks93.png" />
                                </a>
                            </div>

                        </div>
                        <div className="person">
                            <div className="person-pic">
                                <img src="https://i.imgur.com/vK31w0L.jpg" alt="" />
                            </div>
                            <h4 className="person-name">Eric Chen</h4>

                            <div className="person-links">
                                <a href="https://i.imgur.com/vK31w0L.jpg" target="_blank">
                                    <img id="linked-icon" src="https://i.imgur.com/Xm1qtqN.png" />
                                </a>
                                <a href="https://github.com/echen831" target="_blank">
                                    <img id="git-icon" src="https://i.imgur.com/vwPks93.png" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="about-footer"></div>
        </div>
    );
}