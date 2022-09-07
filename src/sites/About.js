import './About.css';
import Footer from '../modules/Footer.js';
import {useEffect, useRef} from 'react';

export default function About(props){

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
        // About-Wrapper 
        <div className="Layout">
            <div className="Main-Content Content" ref={refMenueOpen}>
                <h1 className="Template-Headline" style={props.stylesContentGerman}>Mein Blog</h1>
                <h1 className="Template-Headline" style={props.stylesContentEnglish}>My blog</h1>
                <div className="Grid-About">

                    {/* <div style={props.stylesContentGerman}>
                        <h3 className="H3-About"></h3>
                        <p className="P-About">
                             
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About"></h3>
                        <p className="P-About">
                            
                        </p>
                    </div> */}

                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">15.08.2022 Ein Wetter Widget</h3>
                        <p className="P-About">
                            Eine next.js Anwendung mit Zustand.js und React SWR Hook.
                            Ich nutze den built-in support für environment Variablen.
                            <h3>Quellen</h3>
                            Wetterdaten:  
                            <span> <a target="blank" href="https://www.visualcrossing.com">visualcrossing</a></span><br/>
                            SVG's: 
                            <span> <a target="blank" href="https://fontawesome.com/">Font Awesome</a></span><br/>
                            PNG's: 
                            <span> <a target="blank" href="https://www.flaticon.com/">Flaticon</a></span><br/>
                            <br/>
                            Ergebnis: <br/>
                            <span> <a target="blank" href="https://github.com/Quaerksi/weather-widget">Der Code</a></span><br/>
                            <span> <a target="blank" href="https://weather-widget-jade.vercel.app/">Die Seite</a></span>

                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">08/15/22 A weather Widget</h3>
                        <p className="P-About">
                            A next.js application with State.js and React SWR Hook.
                            I'm using the built-in environment variable support.
                            <h3>Sources</h3>
                            weather data:  
                            <span> <a target="blank" href="https://www.visualcrossing.com">visualcrossing</a></span><br/>
                            SVG's: 
                            <span> <a target="blank" href="https://fontawesome.com/">Font Awesome</a></span><br/>
                            PNG's: 
                            <span> <a target="blank" href="https://www.flaticon.com/">Flaticon</a></span><br/>
                            <br/>
                            result: <br/>
                            <span> <a target="blank" href="https://github.com/Quaerksi/weather-widget">The code</a></span><br/>
                            <span> <a target="blank" href="https://weather-widget-jade.vercel.app/">The page</a></span>
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">21.07.2022 Ich mache mich auf in ein neues Projekt</h3>
                        <p className="P-About">
                            Für folgende Technologien möchte ich ein Projekt entwickeln:
                            Next.js mit Zustand.js, Immer.js und React SWR.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">07/21/22 I'm starting a new project</h3>
                        <p className="P-About">
                            I want to develop a project for the following technologies:
                            Next.js with Zustand.js, Immer.js and the useSWR hook.
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">19.07.2022 Frontend Mentor Challenge Bookmark Landingpage</h3>
                        <p className="P-About">
                            Ergebnis: <br/>
                            <span> <a target="blank" href="https://github.com/Quaerksi/bookmark-landing-page">Der Code</a></span><br/>
                            <span> <a target="blank" href="http://bookmark-landing-page.salevsky.net/">Die Seite</a></span>
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">07/19/22 Frontend Mentor Challenge Bookmark Landingpage</h3>
                        <p className="P-About">
                            Result: <br/>
                            <span> <a target="blank" href="https://github.com/Quaerksi/bookmark-landing-page">The Code</a></span><br/>
                            <span> <a target="blank" href="http://bookmark-landing-page.salevsky.net/">The Site</a></span>
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">13.07.2022 Frontend Mentor Challenge Bookmark Landingpage</h3>
                        <p className="P-About">
                            Elemente programmiert: <br/>
                            <span> <a target="blank" href="https://github.com/Quaerksi/bookmark-landing-page-design-system">Das Designsystem</a></span><br/>
                            <span> <a target="blank" href="https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158">Die Herausforderung</a></span>
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">07/13/22 Frontend Mentor Challenge Bookmark Landingpage</h3>
                        <p className="P-About">
                             Programmed elements: <br/>
                             <span> <a target="blank" href="https://github.com/Quaerksi/bookmark-landing-page-design-system">The design system</a></span><br/>
                             <span> <a target="blank" href="https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158">The Challenge</a></span>
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">11.07.22 Best-Practice-Training beendet</h3>
                        <p className="P-About">
                            CSS, HTML Best-Practice-Training mit Kevin Powell - Build a space travel website 
                            <br/>

                            <span> <a target="blank" href="https://scrimba.com/learn/spacetravel">Learn modern CSS</a></span><br/>
                            <span><a target="blank" href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3">The Challenge</a></span><br/>

                            Programmierte selbst. Band seine Lösung ein. Verwirrte das Programm. Brachte es wieder zum Laufen. Jetzt weiß ich eine Menge mehr.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">07/11/22 Finished CSS best practice training</h3>
                        <p className="P-About">
                        CSS, HTML best practice Training with Kevin Powell - Build a space travel website <br/>

                        <span> <a target="blank" href="https://scrimba.com/learn/spacetravel">Learn modern CSS</a></span><br/>
                            <span><a target="blank" href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3">The Challenge</a></span><br/>

                        Did my solution. Mixed it up with hims. Crashed the programm. Rescued the programm. Know a lot more now.
                        </p>
                    </div>
                    
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">24.06.22 Erste Bewerbung über LinkedIn verschickt </h3>
                        <p className="P-About">
                             Versende die erste Bewerbung über LinkedIn. Wurde zu Join weiter geleitet.
                             Hier sollte ich meine Daten erneut eingeben. <br/> Definitv! ein neues graues Haar.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">6/24/22 First application sent via LinkedIn</h3>
                        <p className="P-About">
                            Submit the first application via LinkedIn. Got redirected to Join.
                            There I should re-enter my data. <br/> Definitely! a new gray hair.
                        </p>
                    </div>                     
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">22.06.22 LinkedIn Account erstellt</h3>
                        <p className="P-About">
                             Ich erstelle ein LinkedIn Profil.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">6/22/22 LinkedIn account created</h3>
                        <p className="P-About">
                            I create a LinkedIn profile.
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">21.06.22 Chat App Part 3: Login und Design</h3>
                        <p className="P-About">
                            Meine ChatApp hat jetzt einen Login.
                            Bekannte Bugs: Anzeige wer online ist aktualisiert sich nicht automatisch.
                        </p>
                    </div>
                    
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">6/21/22 Chat App Part 3: Login and Design</h3>
                        <p className="P-About">
                            My chat app has a login now.
                            Known bugs: Display of who is online does not update automatically.
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">10.06.22 Steuer angefertigt</h3>
                        <p className="P-About">
                            Yippi
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">6/10/22 tax made</h3>
                        <p className="P-About">
                            Yippi
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">06.06.22 Chat App Part 2: MongoDB <span>Datenbankanbindung</span></h3>
                        <p className="P-About">
                             Chatnachrichten werden nun mit Hilfe von mongosh in der nicht relationalen Datenbank dauerhaft gespeichert. <br/>
                             Repository: <a target="blank" href="https://github.com/Quaerksi/chat-app-with-db-connection">Chat App mit Datenbankanschluss</a>
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">6/6/22 Chat App Part 2: MongoDB database connection</h3>
                        <p className="P-About">
                            Chat messages are now stored in the non-relational database using Mongosh.
                            Repository: <a target="blank" href="https://github.com/Quaerksi/chat-app-with-db-connection">chat app with db connection</a>
                        </p>
                    </div>
                     
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">17.05.22 Juliettes Block: Upgrade</h3>
                        <p className="P-About">
                             u.a. Die Seite "Mein Projekt" ist jetzt "Mein Blog".<br/>
                             ScrollToTop() für Routenänderung hinzugefügt. <br/>
                             Verbesserte Grammatik.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">5/17/22 Juliettes Block: Redesign this page</h3>
                        <p className="P-About">
                            i.a The "My Project" page is now "My Blog".<br/>
                            Add scrollToTop() on route change. <br/>
                            Improve grammar.
                        </p>
                    </div>
                    
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">15.05.22 Basis Mongo DB Anwendung programmiert</h3>
                        <p className="P-About">
                            Grundlagen erarbeitet <br/>
                            Im Modell-View-Controller Prinzip. Kann sehr gut als Paket ausgelagert werden.<br/>
                            Erste Erfahrung mit Postman.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">05/15/22 Programmed a base Mongo DB application.</h3>
                        <p className="P-About">
                            Learned the basics.<br/>
                            In the model-view-controller principle. Can very well be outsourced as a package.<br/>
                            First experience with Postman.
                        </p>
                    </div>
                    
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">15.04.22 Chat App Part 1: Chat Anwendung</h3>
                        <p className="P-About">
                             Ich habe eine Chat Anwendung mit Objektdatenhaltung programmiert. Details zum Projekt sind auf der Seite zu finden.<br/>
                             Repository: <a target="blank" href="https://github.com/Quaerksi/chat-app-object-data-management">Chat App mit Objektdatenhaltung</a>
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">04/15/22 Chat App Part 1: Chat App</h3>
                        <p className="P-About">
                            I have programmed a chat application with object data management. Details about the project can be found on the page.<br/>
                            Repository: <a target="blank" href="https://github.com/Quaerksi/chat-app-object-data-management">chat app with object data management</a>
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">22.03.22 Juliettes Block: Das Menü für kleine Seiten wird nicht über den gesamten Bildschirm angezeigt</h3>
                        <p className="P-About">
                            Das Menü ist in den Header eingebaut. Dies bringt bei der Ansicht auf kleinen Seiten das Problem, 
                            dass der Menühintergrund nur einen Teil des Bildschirms bedeckt. <br/>
                            Lösung: Content mit useEffekt und useRef ausblenden. So ist gesichert, dass das Menü voll sichtbar ist und sich auch nich wegscrollen lässt. 
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">03/22/22 Juliettes Block: The small pages menu does not fill the entire screen</h3>
                        <p className="P-About">
                            The menu is built into the header. This causes a problem when viewing small pages.
                            The menu background covers a part of the screen, only. <br/>
                            Solution: Hide content with useEffect and useRef. This ensures that the menu is fully visible and cannot be scrolled away.
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">15.03.22 Juliettes Block: Beim Bildschirmgröße verringern klappt das Menü selbstständig aus</h3>
                        <p className="P-About">
                            Lösung: Listener für Bildschirmgröße eingefügt mit Debouncer.                       
                        </p>
                    </div>
                    
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">03/15/22 Juliettes Block: When reducing the screen size, the menu folds out automatically</h3>
                        <p className="P-About">
                            Solution: Insert listener for Screensize with debounce.                      
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">01.03.22 Juliettes Block: Sitetemplate ist unausgereift.</h3>
                        <p className="P-About">
                            Footer wird auf jeder Seite händisch eingefügt.<br/>
                            Perspektivisch: Header mit Footer im Template vereinen.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">03/01/22 Juliettes Block: Sitetemplate is immature.</h3>
                        <p className="P-About">
                            Footer is manually inserted on each page<br/>
                            Perspective: Unite header with footer in the template.
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">05.02.22 Juliettes Block: Formulardaten per E-Mail weiter leiten mit Axios</h3>
                        <p className="P-About">
                            Läuft
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">02/05/22 Juliettes Block: Forward form data via email with Axios</h3>
                        <p className="P-About">
                            Runs
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                            <h3 className="H3-About">28.01.22 Juliettes Block: Weiterleitung zum Schlangenspiel unsicher</h3>
                            <p className="P-About">
                                Mögliche Lösung: Mit Wildcard Zertifikat schützen.
                            </p>
                        </div>
                        <div style={props.stylesContentEnglish}>
                            <h3 className="H3-About">01/28/22 Juliettes Block: The redirection to the snake game is not secure</h3>
                            <p className="P-About">
                                Possible solution: Protect with a wildcard certificate.
                            </p>
                        </div>
                        
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">20.01.22 Juliettes Block: Client-Side-Routing mit React Router</h3>
                        <p className="P-About">
                            Beim Neuladen einer Seite erhalte ich folgende Fehlermeldung: "The requested URL was not 
                            found on this server." <br/>
                            Lösung: Forwarding mittels PHP <br/>
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">01/20/22 Juliettes Block: Client-Side-Routing with React Router</h3>
                        <p className="P-About">
                            When reloading a page I get the following error message: "The requested URL was not
                            found on this server." <br/> <br/>
                            Solution: Forwarding using PHP <br/>
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">15.01.21 Starte meinen Blog</h3>
                        <p className="P-About">
                            Diese React Website wird mit folgenden Technologien erstellt:
                            <ul>
                                <li>Java Script ES6</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>PHP</li>
                                <li>NPM</li>
                                <li>Git</li>
                                <li>Visual Studio Code</li>
                                <li>Gimp</li>
                                <li>Notepad</li>
                            </ul>
                            Sie läuft auf Strato Hosting Plus mit einem PHP Apache Unix Server.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">01/15/21 Start my blog</h3>
                        <p className="P-About">
                            This React website is built using the following technologies:
                            <ul>
                                <li>Java Script ES6</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>PHP</li>
                                <li>NPM</li>
                                <li>Git</li>
                                <li>Visual Studio Code</li>
                                <li>Gimp</li>
                                <li>Notepad</li>
                            </ul>
                            It runs on Strato Hosting Plus with a PHP Apache Unix Server.
                        </p>
                    </div>
                </div>
                
            </div>
            <Footer stylesContentGerman={props.stylesContentGerman} stylesContentEnglish={props.stylesContentEnglish}/> 
        </div>
        
    )
};