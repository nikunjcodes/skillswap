import SibApiV3Sdk from "sib-api-v3-sdk";

// Configure API key
const apiKey = process.env.BREVO_API_KEY;

console.log("Brevo API Key loaded:", apiKey ? "YES" : "NO"); // Add this line for debugging

SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey = apiKey;

const sendEmail = async (toEmail, subject, htmlContent) => {
  try {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const sender = {
      email: "SkillSwap.app@gmail.com", // Must be verified in Brevo
      name: "SkillSwap",
    };

    const receivers = [{ email: toEmail }];

    await apiInstance.sendTransacEmail({
      sender,
      to: receivers,
      subject,
      htmlContent,
    });

    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
