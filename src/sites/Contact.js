import "./Contact.css";
import Footer from '../modules/Footer.js';
import {useForm} from "react-hook-form";
import {useEffect} from 'react';
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

    
    return(
        <div className="Layout">
            <div className="Main-Content Content">
            <h1 className="Template-Headline Contact-Headline" style={props.stylesContentGerman}>Kontakt</h1>
                <h1 className="Template-Headline Contact-Headline" style={props.stylesContentEnglish}>Contact</h1>
                <form className="ContactForm" onSubmit={handleSubmit(onSubmit,  handleError )}>
                    <br/>
                    <div className="FormDiv"> 
                        <label>Name </label>
                        <small className="Text-danger">
                            {errors?.name && errors.name.message}
                        </small>
                        <br/>
                        <input name="user-name" type="text"  className="Form-Input" id="Input-Name" {...register('name', registerOptions.name)} placeholder="Name" />
                    </div>
                    <br />
                    <div className="FormDiv">
                        <label>E-Mail </label>
                        <small className="Text-danger">
                            {errors?.email && errors.email.message}
                        </small>
                        <br/>
                        <input name="user-email" type="email" className="Form-Input" id="Input-Email"{...register('email', registerOptions.email)} placeholder="Email" />   
                    </div>
                    <br />
                    <div className="FormDiv">
                        <label>Message</label>
                        <small className="Text-danger">
                            {errors?.message && errors.message.message}
                        </small>
                        <br/>
                        <textarea name="message" className="Form-Textarea" id="Input-textarea" {...register('message', registerOptions.message)} placeholder="Message" />
                    </div>
                    <input className="btn" type="submit" value="send" />
                </form> 
            </div>
            <Footer stylesContentGerman={props.stylesContentGerman} stylesContentEnglish={props.stylesContentEnglish}/>
        </div>
    )
}