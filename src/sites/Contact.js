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
        // formData.append('nice', nice)

        // formData.append('name', 'Klara');
        // formData.append('email', 'klara@gmail.com');
        // formData.append('message', 'Hallo');


        // console.log(datas);
        // var dataForSend ={
        //     'name': datas.name,
        //     'email': datas.email,
        //     'message': datas.message,
        // }
        
        // var dataForSend ={
        //     'name': 'Klara',
        //     'email': 'klara@bus.de',
        //     'message': 'Hallo lödföhn',
        // }

        //POST data to the php file
        try{
            // axios({
            //     url: "https://salevsky.net/mail.php",   
            //     data: formData,
            //     method: 'post',
            //     // headers: {'Access-Control-Allow-Origin': '*'},
            //     headers: { 'Content-Type': 'multipart/form-data' },
            //    // headers: { "Content-Type": "multipart/x-www-form-urlencoded" },

            // })

            //senditaway.php!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            axios.post('https://salevsky.net/senditaway.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            });
        } catch(error) {
            // console.log(err.response.data)
            let e = error;
            if (error.response) {
                 e = error.response.data;                   // data, status, headers
            if (error.response.data && error.response.data.error) {
                e = error.response.data.error;           // my app specific keys override
            }
            } else if (error.message) {
                e = error.message;
            } else {
                e = "Unknown error occured";
            }
            console.log('Error: ' + e);
        }      
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
                <h1 className="Template-Headline">Contact</h1>
                <form id="contact-form" onSubmit={handleSubmit(onSubmit,  handleError )}>
                    <br/>
                    <div> 
                        <label>Name </label>
                        <small className="Text-danger">
                            {errors?.name && errors.name.message}
                        </small>
                        <br/>
                        <input name="user-name" type="text"  className="Form-Input" {...register('name', registerOptions.name)} placeholder="Name" />
                    </div>
                    <br />
                    <div>
                        <label>E-Mail </label>
                        <small className="Text-danger">
                            {errors?.email && errors.email.message}
                        </small>
                        <br/>
                        <input name="user-email" type="email" className="Form-Input"{...register('email', registerOptions.email)} placeholder="Email" />   
                    </div>
                    <br />
                    <div>
                        <label>Message </label>
                        <small className="Text-danger">
                            {errors?.message && errors.message.message}
                        </small>
                        <br/>
                        <textarea name="message" className="Form-Textarea" {...register('message', registerOptions.message)} placeholder="Message" />
                        
                    </div>
                    <input className="Form-Input" type="submit" value="send" />
                </form>
            </div>
            <Footer />
        </div>
    )
}