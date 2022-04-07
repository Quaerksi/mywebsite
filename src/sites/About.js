import './About.css';
import Footer from '../modules/Footer.js';

export default function About(props){
    return(
        // About-Wrapper 
        <div className="Layout">
            <div className="Main-Content Content">
                <h1 className="Template-Headline" style={props.stylesContentEnglish}>Mein Projekt</h1>
                <h1 className="Template-Headline" style={props.stylesContentGerman}>My Project</h1>
                <div className="Grid-About">
                    <div>
                    <h3 className="H3-About">1. Client-Side-Routing mit React Router</h3>
                        <p className="Grid-Item-About P-About">
                            Weiterleitung mittels Subdomain funktioniert so nicht.
                        </p>
                    </div>
                    <div>
                    <h3 className="H3-About">2. PHP POST Request mit AXIOS</h3>
                        <p className="Grid-Item-About P-About">
                           Geht jetzt. War etwas schwierig. Tatsächlich stehen  mir beim 
                           Entwickeln meine Browser auch im Weg.Um ganz sicher etwas 
                           auf den Server geladenes testen zu können: Website schließen, 
                           Cache löschen, Website wieder öffnen inkl. Entwicklertools.
                        </p>
                    </div>
                    <div>
                    <h3 className="H3-About">3. Weg vom Starto Hosting?</h3>
                        <p className="Grid-Item-About P-About">
                           Ungern. Ich habe mich bewusst für einen Host mit Servern 
                           in Deutschland entschieden. Ich mag meine Webadresse und 
                           meinen Emailaccount.
                        </p>
                    </div>
                    <div>
                    <h3 className="H3-About">4. Node</h3>
                        <p className="Grid-Item-About P-About">
                           Es geht nun auf meinem Server. Ich bin kurz davor eine eigenen Server in
                           Node mit express zu erstellen und habe auch Lust dazu. 
                           Aber zuerst bringe ich die Seite auf diesem Server zum laufen
                        </p>
                    </div>
                    <div>
                    <h3 className="H3-About">5.</h3>
                        <p className="Grid-Item-About P-About">
                           
                        </p>
                    </div>
                    <div>
                    <h3 className="H3-About">6.</h3>
                        <p className="Grid-Item-About P-About">
                          
                        </p>
                    </div>
                </div>
            </div>   
            <Footer /> 
        </div>
        
    )
};