let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let message = document.getElementById("message");

let sendBtn = document.getElementById("sendBtn");
let successDiv = document.getElementById("successDiv");

let count = 0;

sendBtn.addEventListener("click", function (e) {
  
    count++;

    if(count > 2){
        sendBtn.style.color = "#00ff00";
        sendBtn.textContent = "You have sent too many messages. Try again later...";
        return;
    }

    if(fullName.value == "" || email.value == "" || message.value == ""){
        alert("Complete the form before submitting");
        return;
    }

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending message...";
    sendBtn.style.color = "#00ff00";

    Email.send({
      SecureToken: "df8d6874-5eb0-46f2-b950-cef8390f9d9f",
      To: "help@navox.io",
      From: "help@navox.io",
      Subject: "New Message From " + fullName.value,
      Body: ` 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->

        <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="format-detection" content="date=no"/>
        <meta name="format-detection" content="address=no"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="x-apple-disable-message-reformatting"/>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" rel="stylesheet">

        <title>Email</title>
    </head>

    <body style="margin: 0; padding: 0; font-family: 'Manrope', sans-serif; min-height: 100vh; width: 100vw; background: #1F1F1F;">
        <center>
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #1F1F1F; margin-top: -60px;">
                <tr>
                    <td align="center">
                        <table width="380px" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td style="padding: 35px">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td style="text-align:center;  padding: 42px 15px 16px;">
                                                <a href="#" target="_blank">
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/bitpokket.appspot.com/o/logo_long.png?alt=media&token=3dd6d672-93e0-4015-a16f-002a934761b8&_gl=1*jlqln3*_ga*NTg4MjE0Mzk5LjE2NjU1MzI2MjM.*_ga_CW55HF8NVT*MTY5NzQwMDEzNC4xNDUuMS4xNjk3NDAwMjU2LjM3LjAuMA.." style="width: 50%;" border="0" alt="Logo"/>
                                                </a>
                                            </td>
                                        </tr>

                                        

                                        <tr>
                                            <td style="border-radius: 8px;" bgcolor="#141414">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="font-size:24px; color:#00ff00; text-align: center; min-width:auto !important; font-weight: bold; padding: 32px 32px 0;">
                                                          Message from contact page
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="font-size:14px; color:#ffffff; min-width:auto !important; line-height: 20px; padding: 32px;">
                                                            
                                                            <br/>
                                                            <br/>
                                                            
                                                            
                                                            <br/>
                                                            <br/>
                                                            Name: ${fullName.value}
                                                            <br/>
                                                            <br/>
                                                            Email: ${email.value}
                                                            <br/>
                                                            <br/>
                                                            Message: ${message.value}

                                                            
                                                            <br>
                                                            <br>

                                                            
                                                        </td>
                                                    </tr>

                                                    
                                                </table>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="font-size:12px; color:#B2BEC3; min-width:auto !important; line-height: 12px; text-align:center; padding-top: 42px;">
                                                Copyright © 2023
                                                <a href="https://www.navox.io/" target="_blank" style="text-decoration:none; color:#00ff00;">Navox.io</a>
                                                All rights reserved.
                                            </td>
                                        </tr>

                                        
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </center>

    <!-- <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script> -->

</body>
</html> `,
    }).then((message) => {
      console.log(message);
      sendBtn.style.display = "none";
      successDiv.style.display = "flex";
    });

    



});