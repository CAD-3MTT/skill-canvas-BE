export function contactUsTemplate() {
  return `
            <h1>Hi, {{name}}!</h1>
            <p>{{invite_sender_name}} with {{invite_sender_organization_name}} has invited you to use {{ product_name }} to collaborate with them. Use the button below to set up your account and get started:</p>
            <!-- Action -->
            <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td align="center">
                <!-- Border based button https://litmus.com/blog/a-guide-to-bulletproof-buttons-in-email-design -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                    <td align="center">
                        <table border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td>
                            <a href="{{action_url}}" class="button button--" target="_blank">Set up account</a>
                            </td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>
            <p>If you have any questions for {{invite_sender_name}}, you can reply to this email and it will go right to them. Alternatively, feel free to <a href="mailto:{{support_email}}">contact our customer success team</a> anytime. (We're lightning quick at replying.) We also offer <a href="{{live_chat_url}}">live chat</a> during business hours.</p>
            <p>Welcome aboard,
            <br>The {{ product_name }} Team</p>
            <p><strong>P.S.</strong> Need help getting started? Check out our <a href="{{help_url}}">help documentation</a>.</p>
            <!-- Sub copy -->
            <table class="body-sub">
            <tr>
                <td>
                <p class="sub">If you’re having trouble with the button above, copy and paste the URL below into your web browser.</p>
                <p class="sub">{{action_url}}</p>
                </td>
            </tr>
            </table>
  `;
}
