import "./Contact.css";
import Footer from '../modules/Footer.js';
import {useForm} from "react-hook-form";
import axios from "axios";


export default function Contact(){

    const {register, handleSubmit, formState: {errors}/*, watch */} = useForm();
    // var dataForSend;

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
                document.getElementById('Input-textarea').value = '';
                document.getElementById('On-Success').innerHTML = 'Email got send';
            })
            .catch(error => console.log(`Post error: ${error}`));

    //     try{
    //         //senditaway.php!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //         axios.post('https://salevsky.net/senditaway.php', formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //         });
    //         document.getElementById('Input-Name').value = '';
    //         document.getElementById('Input-Email').value = '';
    //         document.getElementById('Input-textarea').value = '';
    //         document.getElementById('On-Success').value = 'Email got send';
            

    //     } catch(error) {
    //         // console.log(err.response.data)
    //         let e = error;
    //         if (error.response) {
    //              e = error.response.data;                   // data, status, headers
    //         if (error.response.data && error.response.data.error) {
    //             e = error.response.data.error;           // my app specific keys override
    //         }
    //         } else if (error.message) {
    //             e = error.message;
    //         } else {
    //             e = "Unknown error occured";
    //         }
    //         console.log('Error: ' + e);
    //     }      
 }


    const handleError = (errors) => {
        // console.log(`Errors ${errors.name.type}`)
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
                <h1 className="Template-Headline Contact-Headline">Contact</h1>
                <form id="contact-form" onSubmit={handleSubmit(onSubmit,  handleError )}>
                    <br/>
                    <p id="On-Success"></p>
                    <div> 
                        <label>Name </label>
                        <small className="Text-danger">
                            {errors?.name && errors.name.message}
                        </small>
                        <br/>
                        <input name="user-name" type="text"  className="Form-Input" id="Input-Name" {...register('name', registerOptions.name)} placeholder="Name" />
                    </div>
                    <br />
                    <div>
                        <label>E-Mail </label>
                        <small className="Text-danger">
                            {errors?.email && errors.email.message}
                        </small>
                        <br/>
                        <input name="user-email" type="email" className="Form-Input" id="Input-Email"{...register('email', registerOptions.email)} placeholder="Email" />   
                    </div>
                    <br />
                    <div>
                        <label>Message </label>
                        <small className="Text-danger">
                            {errors?.message && errors.message.message}
                        </small>
                        <br/>
                        <textarea name="message" className="Form-Textarea" id="Input-textarea" {...register('message', registerOptions.message)} placeholder="Message" />
                    </div>
                    <input className="btn" type="submit" value="send" />
                </form>
            </div>
            <Footer />
        </div>
    )
}