import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
export const sendEmail = async (email:any, subject:any, payload:any, template:any) => {
    try {
      // create reusable transporter object using the default SMTP transport
      console.log(email);
      
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        // service: 'ionos',
        debug: true,
        secure: true,
        port: 465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
      });
        
      let isHtml= true
  if (isHtml) {
  const source = fs.readFileSync(path.join(__dirname, template), "utf8");
  const compiledTemplate = handlebars.compile(source);
  const options = () => {
    return {
      from: process.env.FROM_EMAIL,
      to: email,
      subject: subject,
      html: compiledTemplate(payload),
    };
  };
      
    try {
      const testResult = await transporter.verify();
      console.log(testResult);
    } catch (error) {
      console.error({ error });
    }
  
      transporter.sendMail(options(), function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
      // Send email
    } catch (error) {
      return error;
    }
  };