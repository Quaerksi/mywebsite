import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './modules/Header';
import Homepage from './sites/Homepage';
import About from './sites/About';
import NoPage from './sites/NoPage';
import TenziesMain from './tenzies/TenziesMain';
import Contact from './sites/Contact'
import ProjectLinks from './sites/ProjectLinks'

// import { useEffect, useState } from 'react';
import { useState , useEffect} from 'react';
import {useLocation} from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
     window.scrollTo(1, 1);
  }, [location])
  return <>{props.children}</>
};

export default function App(){

    let languages = ['german', 'english']

    //lazy state initialization
    const [language, setLanguage] = useState(() => languages[0])

    const[menueForSmallInput, setMenueForSmallInput] = useState(() => false)

    // useEffect(() => {
    //   console.log(`Menue outside?: ${menueForSmallInput}`) 
    // },[menueForSmallInput] )
  
    function changeLanguage(){
      language === languages[0] ? setLanguage(()=>languages[1]) :  setLanguage(()=>languages[0]);
    }

    let stylesContentGerman = {
        display: language === languages[0] ? 'block' : 'none'
      }
    
      let stylesContentEnglish = {
        display: language === languages[0] ? 'none' : 'block'
      }

      

    return(
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
                <Route path="/" element={<Header setMenueForSmallInput={setMenueForSmallInput} menueForSmallInput={menueForSmallInput} stylesContentGerman={stylesContentGerman} stylesContentEnglish={stylesContentEnglish} toggleLanguage={changeLanguage}/>}>
                  <Route exact index element={<Homepage stylesContentGerman={stylesContentGerman} stylesContentEnglish={stylesContentEnglish} menueForSmallInput={menueForSmallInput}/>} />
                  <Route path="myproject" element={<About stylesContentGerman={stylesContentGerman} stylesContentEnglish={stylesContentEnglish} menueForSmallInput={menueForSmallInput}/>} />
                  <Route path="*" element={<NoPage stylesContentGerman={stylesContentGerman} stylesContentEnglish={stylesContentEnglish}/>} />
                  <Route path="tenzies" element={<TenziesMain stylesContentGerman={stylesContentGerman} stylesContentEnglish={stylesContentEnglish} menueForSmallInput={menueForSmallInput}/>} />
                  <Route path="contact" element={<Contact stylesContentGerman={stylesContentGerman} stylesContentEnglish={stylesContentEnglish} menueForSmallInput={menueForSmallInput}/>} />
                  <Route path="projectLinks" element={<ProjectLinks stylesContentGerman={stylesContentGerman} stylesContentEnglish={stylesContentEnglish} menueForSmallInput={menueForSmallInput}/>} />
                </Route>
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
    )
}