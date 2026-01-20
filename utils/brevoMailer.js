import SibApiV3Sdk from "sib-api-v3-sdk";

const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

// Create API instance
const transactionalApi = new SibApiV3Sdk.TransactionalEmailsApi();

export const sendBrevoEmail = async ({ to, subject, htmlContent, textContent }) => {
  try {
    const sendSmtpEmail = {
      sender: {
        email: process.env.SENDER_EMAIL,
        name: process.env.SENDER_NAME || "GreatStack",
      },
      to: [
        {
          email: to,
        },
      ],
      subject,
      htmlContent,
      textContent,
    };

    const response = await transactionalApi.sendTransacEmail(sendSmtpEmail);
    return response;
  } catch (error) {
    console.error("Brevo email error:", error.response?.body || error.message);
    throw new Error("Failed to send email via Brevo");
  }
};
