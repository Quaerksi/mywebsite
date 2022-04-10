import './About.css';
import Footer from '../modules/Footer.js';
import {useEffect, useRef} from 'react';

export default function About(props){

    const refMenueOpen = useRef(null);

    //let content disappear for full site menu
    useEffect(()=>{
        if(window.screen.width < 1280 && props.menueForSmallInput === true){
            refMenueOpen.current.style.display = 'none';
         } else {
            refMenueOpen.current.style.display = 'block';
        }
     }, [props.menueForSmallInput]);


    return(
        // About-Wrapper 
        <div className="Layout">
            <div className="Main-Content Content" ref={refMenueOpen}>
            <h1 className="Template-Headline" style={props.stylesContentGerman}>Mein Projekt</h1>
                <h1 className="Template-Headline" style={props.stylesContentEnglish}>My Project</h1>
                <div className="Grid-About">
                    <div style={props.stylesContentGerman}>
                        <h3 className="H3-About">1. Client-Side-Routing mit React Router</h3>
                        <p className="Grid-Item-About P-About">
                            Beim Neuladen einer Seite erhalte ich folgende Fehlermeldung: "The requested URL was not 
                            found on this server." <br/>
                            Momentane Lösung: Forwarding mittels PHP <br/>
                            TO DO: Eigenen Server unter Node.js mit express aufsetzen.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                    <h3 className="H3-About">1. Client-Side-Routing with React Router</h3>
                        <p className="Grid-Item-About P-About">
                            When reloading a page I get the following error message: "The requested URL was not
                            found on this server." <br/> <br/>
                            Current solution: Forwarding using PHP <br/>
                            TO DO: Set up my own server under Node.js with express.
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                    <h3 className="H3-About">2. Email weiter leiten mit Axios</h3>
                        <p className="Grid-Item-About P-About">
                           Läuft
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                    <h3 className="H3-About">2. Forward emails with Axios</h3>
                        <p className="Grid-Item-About P-About">
                            Runs
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                    <h3 className="H3-About">3. Das Schlangenspiel geht nur mit Tastatur</h3>
                        <p className="Grid-Item-About P-About">
                           TO DO: Das Spiel Handyfähig umschreiben.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                    <h3 className="H3-About">3. The snake game only works with the keyboard</h3>
                        <p className="Grid-Item-About P-About">
                        TO DO: Rewrite the game to make it mobile-friendly.
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                    <h3 className="H3-About">4. Mehrspachigkeit</h3>
                        <p className="Grid-Item-About P-About">
                            Momentan wird jede Sprache in einer eigenen Variable übergeben. <br/>
                            TO DO: Objekt einfügen. So kann später auch auf weitere Sprachen erweitert werden.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                    <h3 className="H3-About">4. Multilingualism</h3>
                        <p className="Grid-Item-About P-About">
                            Currently each language is passed in its own variable. <br/>
                            TO DO: Insert an object that can later be extended to other languages.
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                    <h3 className="H3-About">5. Das Menü für kleine Seiten wird nicht über den gesamten Bildschirm angezeigt</h3>
                        <p className="Grid-Item-About P-About">
                            Das Menü ist in den Header eingebaut. Dies bringt bei der Ansicht auf kleinen Seiten das Problem, 
                            dass das Menü nur einen Teil des Bildschirms bedeckt. <br/>
                            Momentane Lösung: Content mit useEffekt und useRef ausblenden. So ist gesichert, dass das Menü voll sichtbar ist. 
                            Transition muss jetzt leider raus. <br/>
                            TO DO: Das Menü im Seitentemplate einbauen und mittels useEffect ansteuern. <br/> 
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                    <h3 className="H3-About">5. The small pages menu does not fill the entire screen</h3>
                        <p className="Grid-Item-About P-About">
                            The menu is built into the header. This causes the problem when viewing small pages,
                            that the menu only covers part of the screen. <br/>
                            Current solution: Hide content with useEffect and useRef. This ensures that the menu is fully visible.
                            Unfortunately, Transition has to go now. <br/>
                            TO DO: Install the menu in the site template and control it using useEffect.<br/> 
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                    <h3 className="H3-About">6. Beim Bildschirmgröße verringern klappt das Menü selbstständig aus</h3>
                        <p className="Grid-Item-About P-About">
                            Der Zustand, ob das Fullsite Menü ausgefahren ist, wird über einen Toggler erfasst.<br/>
                            TO DO: Zustandshaltendes Objekt einfügen                        
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                    <h3 className="H3-About">6. When reducing the screen size, the menu folds out automatically</h3>
                        <p className="Grid-Item-About P-About">
                            The status of whether the full-site menu is extended is recorded using a toggle.<br/>
                            TO DO: Insert state-keeping object                        
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                    <h3 className="H3-About">7. Weiterleitung zum Schlangenspiel unsicher</h3>
                        <p className="Grid-Item-About P-About">
                            TO DO: Mit Wildcard Zertifikat schützen oder das Spiel in React programmieren statt in Vanilla JS
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                    <h3 className="H3-About">7. The redirection to the snake game is not secure</h3>
                        <p className="Grid-Item-About P-About">
                            TO DO: Protect with a wildcard certificate or program in React instead of vanilla JS.
                        </p>
                    </div>
                    <div style={props.stylesContentGerman}>
                    <h3 className="H3-About">8. Footer muss auf jeder Seite eingefügt werden.</h3>
                        <p className="Grid-Item-About P-About">
                            Besseres Sitetamplate erstellen<br/>
                            TO DO: Header mit Footer zu neuem Template vereinen.
                        </p>
                    </div>
                    <div style={props.stylesContentEnglish}>
                    <h3 className="H3-About">8. Footer must be inserted on every page.</h3>
                        <p className="Grid-Item-About P-About">
                            Create a better site template <br/>
                            TO DO: Combine header with footer to create a new template.
                        </p>
                    </div>
                </div>
            </div>   
            <Footer stylesContentGerman={props.stylesContentGerman} stylesContentEnglish={props.stylesContentEnglish}/> 
        </div>
        
    )
};