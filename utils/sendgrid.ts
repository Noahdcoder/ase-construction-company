import sgMail, { MailDataRequired } from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function sendEmail(msg: MailDataRequired): Promise<void> {
  try {
    await sgMail.send(msg);
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }

    throw new Error("Failed to send email");
  }
}
