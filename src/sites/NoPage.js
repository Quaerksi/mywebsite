import Footer from '../modules/Footer.js';

export default function NoPage(props){
    return(
        <div className="Layout" >
            <div className="Main-Content Content">
                <div className="NoPage-Content">
                    <h1>404</h1>
                    <p style={props.stylesContentEnglish}>Page not found</p>
                    <p style={props.stylesContentGerman}>Seite nicht gefunden</p>
                </div> 
            </div>
            <Footer stylesContentGerman={props.stylesContentGerman} stylesContentEnglish={props.stylesContentEnglish}/> 
        </div>
        
    )
};