import React, { useRef, useEffect, useState } from "react";
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
// import 'suneditor/src/assets/css/suneditor.css'
import Templates from '../../Email/EmailTemplates/Templates'
// import Content from "./EditorDemo";
import { ContentDemo, Content } from "./EditorDemo";
import { LinkedInContent } from "./LinkedInTemplate";

const data = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>Verification Code Template</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        table, td, div, h1, p {font-family: Arial, sans-serif;}
        table,   {border:2px solid #000000 !important;}
        
    </style>
</head>
<body style="margin:0;padding:0;">
    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
        <tr>
            <td align="center" style="padding:0px;">

              <table role="presentation" style="width:90%;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                  <tr>
                      <td align="center" style="padding:0; background:#071330; color: #ffffff; height: 120px; ">
                              
                              <img src="https://sajidtechnicalhub.github.io/Sophos-reactapp/static/media/logo.95eca5a4081fb87c65e0.png" alt="PhishCode" width="220" style="height: 45px;display:block;" />
                     </td>
                  </tr>

                  <tr>
                      <td style="padding:10px; line-height:25px; mso-line-height-rule:exactly;">
                        <p>Hi there,</p>
                          <p>You have been invited to join PhishCode by "Admin Name". Once you accept the invitation, you can log in to PhishCode and help "Admin Name" collaborate on projects. PhishCode is a leading phishing attack simulation software to train your end-users against the world's largest attack surface area.</p>
                          <center><button style="padding: 10px 10px; color: #ffffff; background:blue; border: none; font-weight:bold; font-size: 16px;">Accept Invitation</button></center>
                          
                          <p>PhishCode respects your privacy.</p>&nbsp;

                          <p>Thanks,</p>
                          <p>The PhishCode account team</p>
                          <p style="color:red; margin-top: -10px;" align="right">Note: Please do not forward this email.</p>

                          
                      </td>
                  </tr>
                  


                  <tr>
                      <td align="center" style="padding:0px;">

                          <table role="presentation" style="width:100%;border-collapse:collapse; border-spacing:0;text-align:left;">
                              <tr>
                                  <td align="center" style="padding:0; background:#071330; color: #ffffff; height: 120px; ">
                                    <table role="presentation" style="width:250px;border-collapse:collapse; border-spacing:0;text-align:left;  ">
                                          <tr>
                                                <td style="padding:0px ; color: #ffffff; width:30px">
                                                      <a href="">
                                                             <svg style='color: #ffffff; user-select: none;  display: inline-block; fill: currentcolor;flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; font-size: 2.5rem;'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FacebookIcon">
                                                            <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z">
                                                                  
                                                            </path>
                                                             </svg>
                                                      </a>
                                                </td>
                                                <td style="padding:0px ; color: #ffffff; width:30px">
                                                  <a href="">
                                                        <svg style='color: #ffffff; user-select: none;  display: inline-block; fill: currentcolor;flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; font-size: 2.5rem;'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TwitterIcon"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg>
                                                  </a>
                                                </td>
                                                <td style="padding:0px ; color: #ffffff; width:30px">
                                                      <a href="">
                                                            <svg style='color: #ffffff; user-select: none;  display: inline-block; fill: currentcolor;flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; font-size: 2.5rem;' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
                                                      </a>
                                                </td>
                                                <td style="padding:0px ; color: #ffffff; width:30px">
                                                      <a href="">
                                                            <svg style='color: #ffffff; user-select: none;  display: inline-block; fill: currentcolor;flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; font-size: 2.5rem;'focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="YouTubeIcon"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path></svg>
                                                      </a>
                                                </td>
                                                <td style="padding:0px ; color: #ffffff; width:50px; font-weight:bold;">
                                                     <a href="" style="text-decoration: none!important; color: #ffffff ;"> BLOG</a>
                                                </td>
                                          </tr>
                                    </table>
                                  </td>
                              </tr>
                          </table>
                 
                
            </td>
        </tr>
        <tr>
              <td style="padding:10px ; background: rgb(221, 215, 215);">
                    
              </td>
        </tr>
        <!-- give space -->
        <!-- <div style="line-height:10px;height:20px;mso-line-height-rule:exactly;">&nbsp;</div> -->
    </table>
</body>
</html>`

const EditEmailTemplate = ({initialValue}) => {

   

    return (
        <div>
            {/* <p> My Other Contents </p> */}
            <SunEditor
                name="my-editor"
                autoFocus={true}
                // width="99%"
                height="100%"
                setContents= {data}
                setOptions={{
                    buttonList: [
                        [
                            'undo',
                            'redo',
                            'preview',
                            'bold',
                            'underline',
                            'italic',
                            'font',
                            'fontSize',
                            'strike',
                            'subscript',
                            'superscript',
                            'removeFormat',

                            'fontColor',
                            'hiliteColor',
                            'indent',
                            'outdent',
                            'align',
                            'list',
                            'horizontalRule',
                            'table',
                            'link',
                            'video',
                            'audio',
                            'image',
                            'fullScreen',
                            'showBlocks',
                            'codeView',
                            'paragraphStyle',
                            'template',
                            'textStyle',
            
                        ]

                    ]
                }}
            

            />
            {/* <div>{props.template}</div> */}
            {/* <button onClick={() => onSubmit(content)}>Submit</button> */}
        </div>



    );
};
export default EditEmailTemplate;