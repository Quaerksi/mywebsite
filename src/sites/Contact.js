import "./Contact.css";
import Footer from '../modules/Footer.js';
import {useForm} from "react-hook-form";
import {useEffect, useRef} from 'react';
import axios from "axios";


export default function Contact(props) {

    //clear form data by clicking tab contact
    useEffect(()=> {
        document.getElementById('Input-Name').value = '';
        document.getElementById('Input-Email').value = '';
        document.getElementById('Input-textarea').value = '';
    });
    
    const {register, handleSubmit, formState: {errors}/*, watch */} = useForm();

    //pack form data
    const onSubmit = datas => {
        const formData = new FormData();
        formData.append('name', datas.name);
        formData.append('email', datas.email);
        formData.append('message', datas.message);


        axios.post('https://salevsky.net/senditaway.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            }).then(()=> {
                document.getElementById('Input-Name').value = '';
                document.getElementById('Input-Email').value = '';
                document.getElementById('Input-textarea').value = 'Email got send';
            })
            .catch(error => console.log(`Post error: ${error}`));
        }
    const handleError = (errors) => {
            console.log(`Errors on submit ${errors.name.type}`)
    };

    const registerOptions = {
        name: { required: "Name is required" },
        email:{
            required:"Email is required"
        },
        message: {
            required: "Message is required",
            minLength: {
              value: 8,
              message: "Message must have at least 12 characters"
            }
            // maxLength='1500'
          }
      };

    /* watch message length */
    //   const message = watch('message') || "";
    //   console.log(`Message ${message.length}`)

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
        <div className="Layout">
            <div className="Main-Content Content" ref={refMenueOpen}>
            <h1 className="Template-Headline Contact-Headline" style={props.stylesContentGerman}>Kontakt</h1>
                <h1 className="Template-Headline Contact-Headline" style={props.stylesContentEnglish}>Contact</h1>
                <form className="ContactForm" onSubmit={handleSubmit(onSubmit,  handleError )}>
                    
                    <div className="FormDiv"> 
                        <label style={props.stylesContentGerman}>Name </label>
                        <label style={props.stylesContentEnglish}>name</label>
                        <small className="Text-danger">
                            {errors?.name && errors.name.message}
                        </small>
                        
                        <input name="user-name" type="text"  className="Form-Input" id="Input-Name" {...register('name', registerOptions.name)} placeholder="Name" />
                    </div>
                    
                    <div className="FormDiv">
                        <label style={props.stylesContentGerman}>E-Mail </label>
                        <label style={props.stylesContentEnglish}>e-mail </label>
                        <small className="Text-danger">
                            {errors?.email && errors.email.message}
                        </small>
                        
                        <input name="user-email" type="email" className="Form-Input" id="Input-Email"{...register('email', registerOptions.email)} placeholder="E-Mail" />   
                    </div>
                    
                    <div className="FormDiv">
                        <label style={props.stylesContentGerman}>Nachricht</label>
                        <label className="P-Contact" style={props.stylesContentEnglish}>message</label>
                        <small className="Text-danger">
                            {errors?.message && errors.message.message}
                        </small>
                        
                        <textarea name="message" className="Form-Textarea" id="Input-textarea" {...register('message', registerOptions.message)} placeholder="Message" />
                    </div>
                    <input style={props.stylesContentGerman} className="btn" type="submit" value="absenden" />
                    <input style={props.stylesContentEnglish} className="btn" type="submit" value="send" />
                </form> 
            </div>
            <Footer stylesContentGerman={props.stylesContentGerman} stylesContentEnglish={props.stylesContentEnglish}/>
        </div>
    )
}