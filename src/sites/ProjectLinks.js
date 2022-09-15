import "./About.css";
import Footer from '../modules/Footer.js';
import {useEffect, useRef} from 'react';
import {ReactComponent as GitIcon} from '../images/github.svg';
import {ReactComponent as LinkIcon} from '../images/link-solid.svg';

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
                <h1 className="Template-Headline" style={props.stylesContentGerman}>Projekte</h1>
                <h1 className="Template-Headline" style={props.stylesContentEnglish}>Projects</h1>
                <div className="Grid-About">
                    
                        <div style={props.stylesContentGerman}>
                            {/*  Weather App german*/}
                            <p>
                                Ein Wetter Widget <br/>
                                &#8594; next.js, Zustand.js, React SWR Hook
                            </p>
                            {/* <a className="Project-Link" target="blank" href="https://weather-widget-jade.vercel.app/">&#128279;</a> */}
                            <a target="blank" href="https://weather-widget-jade.vercel.app/">
                                <LinkIcon className="LinkExtern"/>
                            </a>
                            <a target="blank" href="https://github.com/Quaerksi/weather-widget">
                                <GitIcon className="LinkExtern LinkExtern-MarginLeft"/>
                            </a>
                        </div>
                        <div style={props.stylesContentEnglish}>
                            {/* Weather App english*/}
                            <p>
                                A weather app <br/>
                                &#8594; next.js, Zustand.js, React SWR Hook
                            </p>

                            <a target="blank" href="https://weather-widget-jade.vercel.app/">
                                <LinkIcon className="LinkExtern"/>
                            </a>
                            <a target="blank" href="https://github.com/Quaerksi/weather-widget">
                                <GitIcon className="LinkExtern LinkExtern-MarginLeft"/>
                            </a>
                        </div>
                        <div style={props.stylesContentGerman}>
                        {/* Chat App german*/}
                        <p>
                            Eine kleine Chatanwendung <br/>
                            &#8594; JavaScript ES6, HTML5, CSS3, express, EJS, socket.io, dotenv, bcryptjs, cookie-parser, jsonwebtoken, mongoose
                        </p>

                        <a target="blank" href="https://juliettes-great-chat-app.herokuapp.com">
                            <LinkIcon className="LinkExtern"/>
                        </a>
                        <a target="blank" href="https://github.com/Quaerksi/chatapp-withLoginAndDesign">
                            <GitIcon className="LinkExtern LinkExtern-MarginLeft"/>
                        </a>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        {/* Chat App english*/}
                        <p>
                            A small chat application <br/>
                            &#8594; JavaScript ES6, HTML5, CSS3, express, EJS, socket.io, dotenv, bcryptjs, cookie-parser, jsonwebtoken, mongoose
                        </p>
                        
                        <a target="blank" href="https://juliettes-great-chat-app.herokuapp.com">
                            <LinkIcon className="LinkExtern"/>
                        </a>
                        <a target="blank" href="https://github.com/Quaerksi/chatapp-withLoginAndDesign">
                            <GitIcon className="LinkExtern LinkExtern-MarginLeft"/>
                        </a>
                    </div>
                    <div style={props.stylesContentGerman}>
                        {/*  landingpage german*/}
                        <p>
                            Bookmark Landingpage Frontend Mentor Herausforderung <br/>
                            &#8594; JavaScript ES6, HTML5
                        </p>
                        <a target="blank" href="http://bookmark-landing-page.salevsky.net/">
                            <LinkIcon className="LinkExtern"/>
                        </a>
                        <a target="blank" href="https://github.com/Quaerksi/bookmark-landing-page">
                            <GitIcon className="LinkExtern LinkExtern-MarginLeft"/>
                        </a>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        {/*  landingpage english*/}
                        <p>
                            Bookmark Landingpage Frontend Mentor Challenge <br/>
                            &#8594; JavaScript ES6, HTML5
                        </p>
                        
                        <a target="blank" href="http://bookmark-landing-page.salevsky.net/">
                            <LinkIcon className="LinkExtern"/>
                        </a>
                        <a target="blank" href="https://github.com/Quaerksi/bookmark-landing-page">
                            <GitIcon className="LinkExtern LinkExtern-MarginLeft"/>
                        </a>
                    </div>

                    <div style={props.stylesContentGerman}>
                        {/*  my blog german*/}
                        <p>
                            Meine Webseite - Juliettes Blog <br/>
                            &#8594; React + JSX, JavaScript ES6, HTML5, CSS, PHP
                        </p>
                        <a target="blank" href="https://www.salevsky.net/">
                            <LinkIcon className="LinkExtern"/>
                        </a>
                        <a target="blank" href="https://github.com/Quaerksi/mywebsite">
                            <GitIcon className="LinkExtern LinkExtern-MarginLeft"/>
                        </a>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        {/*  my blog english*/}
                        <p>
                            My website - Juliettes Blog <br/>
                            &#8594; React + JSX, JavaScript ES6, HTML5, CSS, PHP
                        </p>
                        
                        <a target="blank" href="https://www.salevsky.net/">
                            <LinkIcon className="LinkExtern"/>
                        </a>
                        <a target="blank" href="https://github.com/Quaerksi/mywebsite">
                            <GitIcon className="LinkExtern LinkExtern-MarginLeft"/>
                        </a>
                    </div>

                    <div style={props.stylesContentGerman}>
                        {/*  tic tac toe german*/}
                        <p>
                            Tic Tac Toe Spiel<br/>
                            &#8594; express, socket.io
                        </p>

                        <a target="blank" href="https://juliettes-tic-tac-toe.herokuapp.com/">
                            <LinkIcon className="LinkExtern"/>
                        </a>
                        <a target="blank" href="https://github.com/Quaerksi/tic-tac-toe">
                            <GitIcon className="LinkExtern LinkExtern-MarginLeft"/>
                        </a>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        {/*  tic tac toe english*/}
                        <p>
                            Tic Tac Toe game <br/>
                            &#8594; express, socket.io
                        </p>
                        
                        <a target="blank" href="https://juliettes-tic-tac-toe.herokuapp.com/">
                            <LinkIcon className="LinkExtern"/>
                        </a>
                        <a target="blank" href="https://github.com/Quaerksi/tic-tac-toe">
                            <GitIcon className="LinkExtern LinkExtern-MarginLeft"/>
                        </a>
                    </div>

                    <div style={props.stylesContentGerman}>
                        {/*  Snake Game german*/}
                        <p>
                            Ein kleines Schlangenspiel <br/>
                            &#8594; vanilla JS
                        </p>

                        <a target="blank" href="http://snake-game.salevsky.net/">
                            <LinkIcon className="LinkExtern"/>
                        </a>
                        <a target="blank" href="https://github.com/Quaerksi/mywebsite/tree/main/snakegame">
                            <GitIcon className="LinkExtern LinkExtern-MarginLeft"/>
                        </a>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        {/* Snake Game english*/}
                        <p>
                            A small snake game <br/>
                            &#8594; vanilla JS
                        </p>
                        <a target="blank" href="http://snake-game.salevsky.net/">
                            <LinkIcon className="LinkExtern"/>
                        </a>
                        <a target="blank" href="https://github.com/Quaerksi/mywebsite/tree/main/snakegame">
                            <GitIcon className="LinkExtern LinkExtern-MarginLeft"/>
                        </a>
                    </div>
                </div>
            </div>
            <Footer stylesContentGerman={props.stylesContentGerman} stylesContentEnglish={props.stylesContentEnglish}/>
        </div>
    )
}