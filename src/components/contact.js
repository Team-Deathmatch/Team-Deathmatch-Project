import React from 'react';
import FontAwesome from "react-fontawesome";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="row move-right">
                    <div className="col-lg-4">
                        <h3>Dakota Heninger</h3>
                        <img src="/devs/Dakota" className="dev"/>
                        <div className="info">
                            <h4>Phone:
                            </h4>
                            <p>385.288.7378</p>
                            <h4>Email:
                            </h4>
                            <p>dakota.heninger.22@gmail.com</p>
                            <h4>Github:</h4>
                            <span className="fa-stack fa-lg hub">
                                <a href="https://github.com/dakotaheninger" target="_blank"><FontAwesome stack="2x"
                                                                                                         name="github"/></a>
                            </span>
                            <h4 className="bio">Bio:</h4>
                            <div>
                                <p> Hello! My name is Dakota Heninger and I am a Web Developer! I am a recent graduate
                                    from V School in Salt Lake City, Utah. I attended V School to learn and sharpen my
                                    skills through an intensive Full Stack Javascript Course. I have a passion for Web
                                    Development and enjoy pushing myself to the limits to learn and grow! I also have a
                                    passion for many other things, these include: Fishing, Hunting, Snowboarding, Video
                                    Games, Movies, Binge Watching Netflix, and Sports! Enjoy the site!</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 ">
                        <h3 className="name">Jordan Jensen</h3>
                        <img src="/devs/Jordan.jpg" className="dev"/>
                        <div className="info">
                            <h4>Phone:</h4>
                            <p>801-608-0266</p>
                            <h4>Email:</h4>
                            <p>jojo.jensen03@gmail.com</p>
                            <h4>Github:</h4>
                            <span className="fa-stack fa-lg hub">
                                <a href="https://github.com/JordanDJensen" target="_blank"><FontAwesome stack="2x"
                                                                                                        name="github"/></a>
                            </span>
                            <h4 className="bio">Bio:</h4>
                        </div>
                        <div>
                            <p>I am 22 years old. I am attending Salt Lake Community College to obtain my Associate
                                degree in Computer Science. My coding journey started in a college class where I learned
                                HTML and CSS. From there my passion for coding grew and since then I have looked for
                                opportunities to build up my skills . My goal right now is to eventually become a Senior
                                Web Developer. I am excited to be on this journey and meet people along the way that are
                                pursuing similar goals as I am. Check out this web site and see what Dakota, Wyatt, and
                                I have created. Enjoy!</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <h3 className="name">Wyatt Blackhurst</h3>
                        <img src="/devs/Wyatt" className="dev"/>
                        <div className="info">
                            <h4>Phone:
                            </h4>
                            <p>801.707.1905</p>
                            <h4>Email:
                            </h4>
                            <p>dmonteblackhurst@gmail.com</p>
                            <h4>Github:</h4>
                            <span className="fa-stack fa-lg hub">
                                <a href="https://github.com/monteblack7" target="_blank"><FontAwesome stack="2x"
                                                                                                      name="github"/></a>
                            </span>
                            <h4 className="bio">Bio:</h4>
                            <div>
                                <p></p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        );
    }
}

export default Contact;