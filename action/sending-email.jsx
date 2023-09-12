'use server'
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY)



const validateString = (value ,maxLength) => {
    if(!value || typeof value !== "string" || value.length > maxLength   ){
        return false;
    }else{
        return true;
    }
}
   
//this is The Main function.......
export const sendEmail = async (formData) => {
   const  message = formData.get("message")
   const  email = formData.get("email")
  
  
 
if (!validateString(email,500 ) ){
    return{
        error : "invalid email address",
    }
    if (!validateString(message , 5000)){
        return{
            error :"invalid message"
        }
    }
}
try {
    
    resend.emails.send({
        from : "Contact Form <onboardin@resend.dev>",
        to : "md.sanzid@gmail.com",
        subject : "message from contact form ",
        reply_to: email,
        text : message,
        // react: <ContactFormEmail email={email} message={message} />
    })
} catch (error) {
    return{
        error : error.message
    }
}
}
