import "./About.css";
import Footer from '../modules/Footer.js';
import {useEffect, useRef} from 'react';

export default function ProjectLinks(props) {
    
    const refMenueOpen = useRef(null);

    //let content disappear for full site menu
    useEffect(()=>{
        // console.log(`menue open? ${props.menueForSmallInput}`)
        if(window.innerWidth < 1280 && props.menueForSmallInput === true){
            refMenueOpen.current.style.display = 'none';
         } else {
            refMenueOpen.current.style.display = 'block';
        }
     }, [props.menueForSmallInput]);

    return(
        <div className="Layout">
            <div className="Main-Content Content" ref={refMenueOpen}>
                <h1 className="Template-Headline" style={props.stylesContentGerman}>Projektlinks</h1>
                <h1 className="Template-Headline" style={props.stylesContentEnglish}>Project Links</h1>
                <div className="Grid-About">
                    
                        <div style={props.stylesContentGerman}>
                            {/*  Weather App german*/}
                            <p>
                                Ein Wetter Widget <br/>
                                &#8594; next.js, Zustand.js, React SWR Hook
                            </p>
                            <a target="blank" href="https://weather-widget-jade.vercel.app/">&#128279;Wetter App</a>
                        </div>
                        <div style={props.stylesContentEnglish}>
                            {/* Weather App english*/}
                            <p>
                                A funktionsfähige weather app <br/>
                                &#8594; next.js, Zustand.js, React SWR Hook
                            </p>
                            <a target="blank" href="https://weather-widget-jade.vercel.app/">&#128279;Weather App</a>
                        </div>
                        <div style={props.stylesContentGerman}>
                        {/* Chat App german*/}
                        <p>
                            Eine kleine funktionsfähige Chatanwendung <br/>
                            &#8594; JavaScript ES6, HTML5, CSS3, express, EJS, socket.io, dotenv, bcryptjs, cookie-parser, jsonwebtoken, mongoose
                        </p>
                        <a className="" target="blank" href="https://juliettes-great-chat-app.herokuapp.com">&#128279;Chat App</a>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        {/* Chat App english*/}
                        <p>
                            A small chat application <br/>
                            &#8594; JavaScript ES6, HTML5, CSS3, express, EJS, socket.io, dotenv, bcryptjs, cookie-parser, jsonwebtoken, mongoose
                        </p>
                        <a className="" target="blank" href="https://juliettes-great-chat-app.herokuapp.com">&#128279;Chat App</a>
                    </div>
                    <div style={props.stylesContentGerman}>
                        {/*  landingpage german*/}
                        <p>
                            Bookmark Landingpage Frontend Mentor Herausforderung <br/>
                            &#8594; JavaScript, ES6, HTML5
                        </p>
                        <a target="blank" href="http://bookmark-landing-page.salevsky.net/">&#128279;Landing Page</a>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        {/*  landingpage english*/}
                        <p>
                            Bookmark Landingpage Frontend Mentor Challenge <br/>
                            &#8594; JavaScript, ES6, HTML5
                        </p>
                        <a target="blank" href="http://bookmark-landing-page.salevsky.net/">&#128279;Landing Page</a>
                    </div>
                    <div style={props.stylesContentGerman}>
                        {/*  Snake Game german*/}
                        <p>
                            Ein kleines Schlangenspiel <br/>
                            &#8594; vanilla JS
                        </p>
                        <a className="" target="blank" href="http://snake-game.salevsky.net/">&#128279;Snake Game</a>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        {/* Snake Game english*/}
                        <p>
                            A small snake game <br/>
                            &#8594; vanilla JS
                        </p>
                        <a className="" target="blank" href="http://snake-game.salevsky.net/">&#128279;Snake Game</a>
                    </div>
                </div>
            </div>
            <Footer stylesContentGerman={props.stylesContentGerman} stylesContentEnglish={props.stylesContentEnglish}/>
        </div>
    )
}