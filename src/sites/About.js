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
                            i.a The "My Project" page is now  "My Blog".<br/>
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
                            In the model-view-controller principle. Can very well be outsourced as a package. <br/>
                            First experience with Postman.
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">15.04.22 Chat Anwendung</h3>
                        <p className="P-About">
                             Ich habe eine Chat Anwendung mit Objektdatenhaltung programmiert. Link ist im Header.<br/>
                             Details zum Projekt sind auf der Seite zu finden.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">04/15/22 Chat App</h3>
                        <p className="P-About">
                            I have programmed a chat application with object data management. Link is in the header.<br/>
                            Details about the project can be found on the page.
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">22.03.22 Juliettes Block: Das Menü für kleine Seiten wird nicht über den gesamten Bildschirm angezeigt</h3>
                        <p className="P-About">
                            Das Menü ist in den Header eingebaut. Dies bringt bei der Ansicht auf kleinen Seiten das Problem, 
                            dass der Menühintergrund nur einen Teil des Bildschirms bedeckt. <br/>
                            Lösung: Content mit useEffekt und useRef ausblenden. So ist gesichert, dass das Menü voll sichtbar ist. 
                            Leider muss Transition raus und Code wiederholt sich. <br/>
                            Perspektivisch: Das Menü im Template einbauen und mittels useEffect ansteuern. <br/> 
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">03/22/22 Juliettes Block: The small pages menu does not fill the entire screen</h3>
                        <p className="P-About">
                            The menu is built into the header. This causes a problem when viewing small pages.
                            The menu background covers a part of the screen, only. <br/>
                            Solution: Hide content with useEffect and useRef. This ensures that the menu is fully visible.
                            Unfortunately, Transition has to go now and code repeats itself. <br/>
                            Perspective: Install the menu in the site template and control it using useEffect.<br/> 
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
                    </div>
                    <div style={props.stylesContentEnglish}>
                        <h3 className="H3-About">01/15/21 Start my blog</h3>
                        <p className="P-About">
                        </p>
                    </div>
                </div>
            </div>
            <Footer stylesContentGerman={props.stylesContentGerman} stylesContentEnglish={props.stylesContentEnglish}/> 
        </div>
        
    )
};