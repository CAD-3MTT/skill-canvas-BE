import postmark from "postmark";

export function sendMail(req, res) {
  // Send an email:
  //   var client = new postmark.ServerClient("POSTMARK-SERVER-API-TOKEN-HERE");
  var client = new postmark.ServerClient();

  client.sendEmail({
    // From: "sender@example.com",
    To: "recipient@example.com",
    Subject: "Test",
    TextBody: "Hello from Postmark!",
  });
}
