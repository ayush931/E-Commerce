import { sendMail } from "../utils/sendEmail.js";

const sendEmailFunction = async (to, subject, text, html) => {
  try {
    const result = await sendMail(to, subject, text, html);
    
    if (result.success) {
      console.log("Email sent successfully", result.messageId);
      return true;
    } else {
      console.error("Failed to send email", result.error);
      return false;
    }
  } catch (error) {
    console.error("Email sending error:", error);
    return false;
  }
}

export default sendEmailFunction;