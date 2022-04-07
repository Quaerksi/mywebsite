import '../App.css';
// import Header from './modules/Header.js';
import Teaser from '../modules/Teaser.js';
import Content from '../modules/HomepageContent.js';
import Footer from '../modules/Footer.js';

// import { useEffect, useState } from 'react';

function Homepage(props) {

  return (
    /******************************************************* */
     <div className="Layout">
      {/************************************************************* */}
      {/* <Header toggleLanguage={changeLanguage}/>  */}
      <Teaser />
      <Content currentLanguage={props.language} possibleLanguages={props.languages} stylesContentGerman={props.stylesContentGerman} stylesContentEnglish={props.stylesContentEnglish}/>
       {/************************************************************* */}
      <Footer /> 
  </div>
  );
}

export default Homepage;
