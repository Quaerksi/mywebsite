import '../App.css';
import Teaser from '../modules/Teaser.js';
import HomepageContent from '../modules/HomepageContent.js';
import Footer from '../modules/Footer.js';

function Homepage(props) {

  return (
    /******************************************************* */
     <div className="Layout">
      {/************************************************************* */}
      <Teaser />
      <HomepageContent currentLanguage={props.language} possibleLanguages={props.languages} menueForSmallInput={props.menueForSmallInput} stylesContentGerman={props.stylesContentGerman} stylesContentEnglish={props.stylesContentEnglish}/>
       {/************************************************************* */}
      <Footer stylesContentGerman={props.stylesContentGerman} stylesContentEnglish={props.stylesContentEnglish}/> 
  </div>
  );
}

export default Homepage;
