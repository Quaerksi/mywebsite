import {useEffect, useRef} from 'react';
import "../sites/About.css";

// image import
// import imgNewJob from '../images/newJob.jpg';

function HomepageContent(props) {

  const refMenueOpen = useRef(null);

  //let content disappear for full site menu
  useEffect(()=>{
   if(window.innerWidth < 1280 && props.menueForSmallInput === true){
       refMenueOpen.current.style.display = 'none';
    } else {
      refMenueOpen.current.style.display = 'block';
   }
}, [props.menueForSmallInput]);

  return (
    <div className="Main-Content Content" ref={refMenueOpen}>
      <div className="Grid-About Grid-About-Homepage">
      <section className="Content Content-Homepage NoBorder" style={props.stylesContentGerman}>
        <div className="Hompage-Introduction ">
          <div>
            <h1 className="Template-Headline Template-Headline-Homepage">Hallo, ihr Lieben!</h1>
            <p>JavaScript programmiere ich. Full Stack.</p>
            <p>Ich habe Medieninformatik an der Beuth Hochschule für Technik studiert, erfolgreich eine von Webmasters Europe autorisierte Weiterbildung zum Thema 
              moderne Webanwendung abgeschlossen und viele Workshops auf Scrimba durchgearbeitet.
            </p>
            <p>Bitte schaut euch meine Projekte an, checkt meinen <a href="https://github.com/Quaerksi/" target="blank">GitHub Account</a> 
            &nbsp;und besucht mein <a href="https://www.linkedin.com/in/link-juliette/" target="blank">LinkedIn</a> Profil.</p>
            <h4>Ich brenne darauf, ein Unternehmen zu finden, das zu mir passt. In dem ich programmieren und ein wichtiger Teil werden darf.</h4>          
            <p>Herzliche Grüße Juliette Salevsky</p>
            </div>
            <img className="newJob" src={'./images/newJob.jpg'}></img>  
        </div>
      </section>
      <section className="Content Content-Main NoBorder" style={props.stylesContentEnglish}>
      <div className="Hompage-Introduction ">
          <div>
            <h1 className="Template-Headline Template-Headline-Homepage">Hello</h1>
            <p>I program JavaScript. Full stack.</p>
            <p>I studied media informatics at the Beuth Hochschule für Technik Berlin, successfully completed a further training course on modern web applications 
              authorized by Webmasters Europe and worked through many workshops on Scrimba.</p>
            <p>Please take a look at my projects, check my <a href="https://github.com/Quaerksi/" target="blank">GitHub account</a> 
            &nbsp;and visit my  <a href="https://www.linkedin.com/in/link-juliette/" target="blank">LinkedIn</a> profile.</p>
            <h4>I am looking for a company that suits me. Where I can program and become an important part.</h4>          
            <p>Hope to see you soon, Juliette Salevsky</p>
            </div>
            <img className="newJob" src={'./images/newJob.jpg'}></img>  
        </div>
      </section> 
     
      </div>
    </div>
  );
}

export default HomepageContent;