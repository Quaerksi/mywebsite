import './About.css';
import Footer from '../modules/Footer.js';
import {useEffect, useRef} from 'react';

export default function About(props){

    const refMenueOpen = useRef(null);

    // console.log(`Menue outside in about?: ${props.menueForSmallInput}`);

    useEffect(()=>{
         console.log(`windows screen width: ${window.screen.width}`);
        if(window.screen.width < 1280 && props.menueForSmallInput === true){
            refMenueOpen.current.style.display = 'none';
            // console.log('styleInput' + styleInput)
         } else {
        refMenueOpen.current.style.display = 'block';
        //    console.log('styleInput' + styleInput)
        }
     }, [props.menueForSmallInput]);


    return(
        // About-Wrapper 
        <div className="Layout">
            <div className="Main-Content Content" ref={refMenueOpen}>
                <h1 className="Template-Headline" style={props.stylesContentEnglish}>My Project</h1>
                <h1 className="Template-Headline" style={props.stylesContentGerman}>Mein Projekt</h1>
                <div className="Grid-About">
                    <div>
                    <h3 className="H3-About">1. Client-Side-Routing mit React Router</h3>
                        <p className="Grid-Item-About P-About">
                            Ich hoste auf Strato. Auf einem php driven Apache Server. Um beim Neuladen einer
                            Seite, folgende Fehlermeldung zu verweiden: "The requested URL was not found on this server.",
                            werde ich Ordner mit, kurzen PHP Scripts einbringen, welche auf die Hauptseite weiterleiten.
                            To DO: Anderen Provider suchen und mit Node.js eigenen Server mit express aufsetzen.
                            Work Arround: Forwarding mittels PHP
                        </p>
                    </div>
                    <div>
                    <h3 className="H3-About">2. Email weiter leiten mit Axios</h3>
                        <p className="Grid-Item-About P-About">
                           Läuft
                        </p>
                    </div>
                    <div>
                    <h3 className="H3-About">Snake Game Handyfähig machen</h3>
                        <p className="Grid-Item-About P-About">
                           Das klingt spannend. 
                           
                        </p>
                    </div>
                    <div>
                    <h3 className="H3-About">4. Mehrspachigkeit</h3>
                        <p className="Grid-Item-About P-About">
                           Aus den zwei Variablen eine machen. 
                           Perspektive: Objeckt einfügen. So kann später auf weitere Sprachen erweitert werden.
                        </p>
                    </div>
                    <div>
                    <h3 className="H3-About">5. Die Menüführung für kleine Seiten wird nicht über den gesamten
                        Bildschirm angezeigt</h3>
                        <p className="Grid-Item-About P-About">
                            Das Menü ist in den Header eingebaut. Dies bringt bei 
                            der Ansich auf kleinen Seiten das Problem, dass das Menü nur einen Teil des Bildschirms bedeckt.
                            TO DO: Das Menü in App.js einbauen und mittels useEffect ansteuern.
                            Work Arround: Content mit useEffekt und useRef ausblenden. So ist gesichert, das das Menü voll sichtbar ist. 
                            Problem hierbei: Hintergrund verschwindet bevor Menü ganz da ist. Führt auch zu Codewiederholung.
                        </p>
                    </div>
                    <div>
                    <h3 className="H3-About">6. Bildschirmgröße  verringern</h3>
                        <p className="Grid-Item-About P-About">
                            Es wird unter umständen das Full-Site-Menue geöffnet beim verringern der Displaygröße.
                            Die Links im Menü sind immer die selben. Im kleinen Full-Site-Menü wie auch auf der großen Seite.
                            Der Zustand ob das Fullsite Mnü ausgefahren ist wird über einen Toggler erfasst.
                            To Do: Toggler ändern in Zustandhaltendes Objekt.                         </p>
                    </div>
                    <div>
                    <h3 className="H3-About">6. Link zum Schlangenspiel</h3>
                        <p className="Grid-Item-About P-About">
                            Weiterleitung unsicher.
                            To Do: Mit wildcard zertifikat schützen oder in React programmieren 
                            statt in Vanilla JS
                        </p>
                    </div>
                    <div>
                    <h3 className="H3-About">6. Besseres Sitetamplate</h3>
                        <p className="Grid-Item-About P-About">
                            Header mit Footer vereinen.
                            Content einfügen
                        </p>
                    </div>
                </div>
            </div>   
            <Footer /> 
        </div>
        
    )
};