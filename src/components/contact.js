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
                                <a href="https://github.com/dakotaheninger" target="_blank"><FontAwesome stack="2x" name="github"/></a>
                            </span>
                            <h4 className="bio">Bio:</h4>
                              <div>
                            <p>Lyft photo booth offal artisan, fingerstache pabst succulents next level cronut meggings palo santo squid venmo ugh semiotics. Shabby chic vegan tbh copper mug slow-carb. Tacos neutra cray, jianbing polaroid chia yuccie try-hard kickstarter intelligentsia synth. Franzen four loko gentrify selfies, trust fund cornhole scenester viral skateboard vinyl air plant kombucha ennui iPhone fanny pack. Edison bulb leggings direct trade, prism letterpress gochujang hell of mixtape XOXO hoodie squid copper mug raw denim post-ironic. Palo santo etsy gentrify waistcoat poke plaid roof party. Master cleanse air plant fixie XOXO drinking vinegar la croix. Health goth wayfarers edison bulb, pickled scenester wolf tbh helvetica readymade. Franzen shoreditch chicharrones brooklyn lyft pabst VHS fingerstache fam butcher messenger bag. Tote bag single-origin coffee art party direct trade, iceland cold-pressed fashion axe seitan vexillologist shoreditch taxidermy asymmetrical activated charcoal retro twee. Poutine iPhone austin four dollar toast pop-up.
Oh. You need a little dummy text for your mockup? How quaint.

I bet you’re still using Bootstrap too…</p>
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
                                <a href="https://github.com/JordanDJensen" target="_blank"><FontAwesome stack="2x" name="github"/></a>
                            </span>
                            <h4 className="bio">Bio:</h4>
                        </div>
                        <div>
                            <p></p>
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
                                <a href="https://github.com/monteblack7" target="_blank"><FontAwesome stack="2x" name="github"/></a>
                            </span>
                            <h4 className="bio">Bio:</h4>
  <div>
                            <p>Lyft photo booth offal artisan, fingerstache pabst succulents next level cronut meggings palo santo squid venmo ugh semiotics. Shabby chic vegan tbh copper mug slow-carb. Tacos neutra cray, jianbing polaroid chia yuccie try-hard kickstarter intelligentsia synth. Franzen four loko gentrify selfies, trust fund cornhole scenester viral skateboard vinyl air plant kombucha ennui iPhone fanny pack. Edison bulb leggings direct trade, prism letterpress gochujang hell of mixtape XOXO hoodie squid copper mug raw denim post-ironic. Palo santo etsy gentrify waistcoat poke plaid roof party. Master cleanse air plant fixie XOXO drinking vinegar la croix. Health goth wayfarers edison bulb, pickled scenester wolf tbh helvetica readymade. Franzen shoreditch chicharrones brooklyn lyft pabst VHS fingerstache fam butcher messenger bag. Tote bag single-origin coffee art party direct trade, iceland cold-pressed fashion axe seitan vexillologist shoreditch taxidermy asymmetrical activated charcoal retro twee. Poutine iPhone austin four dollar toast pop-up.
Oh. You need a little dummy text for your mockup? How quaint.
 
I bet you’re still using Bootstrap too…</p>
                        </div>
                        </div>
                    
                    </div>

                </div>
            </div>

        );
    }
}

export default Contact;