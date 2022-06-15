import React from 'react'
import '../../Email/EmailTemplates/Templates.css'
import Button from '@mui/material/Button';
 export const Content = `<!DOCTYPE html>
<html>
<body>


<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">


<table style="border-color: #808080; background-color: #ff6600;" border="1" cellspacing="1" cellpadding="1">

</table>
<p>&nbsp;</p>
<div>
<table cellspacing="0" cellpadding="0" width="550" align="center" border="0">
<tbody>
<tr>
<td bgcolor="#ececec" width="15"></td>
<td bgcolor="#ffffff" width="522" colspan="3">
<table cellspacing="0" cellpadding="0" width="100%">
<tbody>
<tr>
<td style="BACKGROUND-COLOR: rgb(237,235,233)" width="100%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: rgb(237,235,233); MARGIN-TOP: 0px" align="center">
Let us know if you did not make this request.</p>
</td>
</tr>
</tbody>
</table>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
<table cellspacing="0" cellpadding="0" width="100%">
<tbody>
<tr>
<td width="4.84%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
<td width="44.82%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px" align="left">
<img style="BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; DISPLAY: block" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=" width="95" height="60"></p>
</td>
<td width="45.16%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px" align="right">
<img style="BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; DISPLAY: block" alt="" src="data:image/png;base64,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" width="243" height="66"></p>
</td>
<td width="5.18%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
</tr>
</tbody>
</table>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;<span style="FONT-SIZE: 10pt">&nbsp;</span></p>
<div>
Dear CARD MEMBER,&nbsp;<b>Did you recently request a One-Time Password?</b></div><table cellspacing="0" cellpadding="0" width="100%">
<tbody>
<tr>

</tr></tbody></table><table cellspacing="0" cellpadding="0" width="100%">
<tbody>
<tr>
<td width="6.01%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>



<td width="5.42%">
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="6.01%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
<td width="93.99%" colspan="2">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>







<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px" align="center">
You recently called us and requested that we send a</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px" align="center">
One-Time Password so that you could</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px" align="center">
proceed with a transaction on your account.</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px" align="center">
<b>If you requested this One-Time Password,</b></p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px" align="center">
no further action is required.</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px" align="center">
<b>If you did not request this One-Time</b></p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px" align="center">
<b>Password,</b>&nbsp;&nbsp;<a href="" originalsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=" shape="rect" target="_blank" data-saferedirecturl="https://www.bing.com/">click
 here</a>&nbsp;to secure your account immediately</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px" align="center">
Thank you for your Card Membership,</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px" align="center">
<b><span>American</span>&nbsp;<span>Express</span>&nbsp;Customer Care</b></p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px" align="center">
<img style="BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; DISPLAY: block" alt="" src="data:image/png;base64,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" width="267" height="31"></p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 13pt; FONT-FAMILY: Arial; COLOR: rgb(0,23,90); MARGIN-TOP: 0px">
&nbsp;</p>







<table cellspacing="0" cellpadding="0" width="100%">
<tbody>
<tr>
<td style="BACKGROUND-COLOR: rgb(0,23,90)" width="100%">
<table cellspacing="0" cellpadding="0" width="100%">
<tbody>
<tr>
<td width="100%" colspan="5">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
</tr>
<tr>
<td style="BORDER-TOP: rgb(0,23,90) 1pt solid; BORDER-LEFT: rgb(0,23,90) 1pt solid" width="5%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
<td style="BORDER-TOP: rgb(0,23,90) 1pt solid; BORDER-RIGHT: rgb(0,23,90) 1pt solid" width="90%" colspan="3">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: white; MARGIN-TOP: 0px" align="center">
<a style="COLOR: rgb(255,255,255)" href="" originalsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=" shash="aLVBNIugBRMulAWdJOMFA28z6bE2Pf7Mq9iflOP69npJYGYdHnt45KFT6hI5Ib3uhxVHGvKWYGSsyiFpv6hK3D/YgOoGCdWkHDupco9wvsHSkHmiComzaPZPl7xJCQdKdhhXUsgoivJbWawa5ow5hB9tSUBiIE6kEtjpE5Vkugs=" rect"="" target="_blank" data-saferedirecturl="https://www.bing.com/">PRIVACY
 STATEMENT</a>&nbsp;|&nbsp;<a style="COLOR: rgb(255,255,255)" href="" originalsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=" shape="rect" target="_blank" data-saferedirecturl="https://www.bing.com/">UPDATE
 YOUR EMAIL</a></p>
</td>
<td style="BORDER-TOP: rgb(0,23,90) 1pt solid; BORDER-RIGHT: rgb(0,23,90) 1pt solid" width="5%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
</tr>
<tr>
<td style="BORDER-TOP: rgb(0,23,90) 1pt solid; BORDER-RIGHT: rgb(0,23,90) 1pt solid; BORDER-LEFT: rgb(0,23,90) 1pt solid" width="100%" colspan="5">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
</tr>
<tr>
<td style="BORDER-TOP: rgb(0,23,90) 1pt solid; BORDER-BOTTOM: rgb(0,23,90) 1pt solid; BORDER-LEFT: rgb(0,23,90) 1pt solid" width="5%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
<td style="BORDER-TOP: rgb(0,23,90) 1pt solid; BORDER-BOTTOM: rgb(0,23,90) 1pt solid" width="69.29%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: white; MARGIN-TOP: 0px">
Your account information is included above to help you recognize this as a customer care e-mail from&nbsp;<span>American</span>&nbsp;<span>Express</span>. To learn more about e-mail security or report a suspicious e-mail, please visit us at&nbsp;<a style="COLOR: rgb(255,255,255)" href="" originalsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=" shash="iVbEvGj68c5FDr9K5NYpz8MnLROBUi9hncoJwvz+vno2+cgrIYlbZ0JIdPD+NhxVSM4sAiLWF0S9x7B8YAbA60F/BU4DOJqcp7wx1Au840794c+uZN1vm8LnwXsL4yQe999tMlBfRt6Mv01QRM3FJxWo50toWxQAxl365PWhKWs=" shape="rect" target="_blank" data-saferedirecturl="https://www.bing.com/"><span>americanexpress</span>.com/<wbr>phishing</a>.
 We kindly ask you not to reply to this e-mail but instead contact us via&nbsp;<a style="COLOR: rgb(255,255,255)" href="" originalsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=" shash="0AsMloTzkKbNFRUiKo15NIJh5/GWfmdqZufSYIwhTnasSiusg3Ogi6rWejWy0kYZ00SrtrAaz1ej564CNX91CTA0bMhSj4Ixqmx0Byx1pYN22mY5Ob0DYb1LWvI0kvIvc/SQ31T3NVUz9sCsodZ55XkM0sfR6FfU0InWcFqz0Ek=" shape="rect" target="_blank" data-saferedirecturl="https://www.bing.com/">Customer
 Care</a>.</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: white; MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: white; MARGIN-TOP: 0px" align="left">
? 2020&nbsp;<span>American</span>&nbsp;<span>Express</span>. All rights reserved.</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: white; MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: white; MARGIN-TOP: 0px" align="left">
PWDENDMCVPW0005<img style="BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; DISPLAY: block" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=" width="1" height="1"></p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: white; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
<td style="BORDER-TOP: rgb(0,23,90) 1pt solid; BORDER-BOTTOM: rgb(0,23,90) 1pt solid" width="2.13%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
<td style="BORDER-TOP: rgb(0,23,90) 1pt solid; BORDER-RIGHT: rgb(0,23,90) 1pt solid; BORDER-BOTTOM: rgb(0,23,90) 1pt solid" width="18.57%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 6pt; FONT-FAMILY: Arial; MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px" align="right">
<img style="BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; DISPLAY: block" alt="" src="data:image/png;base64,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" width="95" height="95"></p>
</td>
<td style="BORDER-TOP: rgb(0,23,90) 1pt solid; BORDER-RIGHT: rgb(0,23,90) 1pt solid; BORDER-BOTTOM: rgb(0,23,90) 1pt solid" width="5%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table cellspacing="0" cellpadding="0" width="100%">
<tbody>
<tr>
<td style="BACKGROUND-COLOR: rgb(237,235,233)" width="100%">
<p style="MARGIN-BOTTOM: 0px; FONT-SIZE: 10pt; FONT-FAMILY: Arial; COLOR: black; MARGIN-TOP: 0px">
&nbsp;</p>
</td>
</tr>
</tbody>
</table>

If you would like to unsubscribe and stop receiving these emails <a href="" originalsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=" shash="z7AN5gn8r9vdP0bBhHWvQzLL3J8tiNkxOI23urHU5svJL6lvSxO6SW3AVg10jz+kdWFswSPPIj9EvU5MlzjqWMf7AaGtWb/htBj4Ii65erfvrYvTPO+RNRRlHK+BzcXdkA0Pa1BA2YvzC4fDb5AbK+ywsAh9xFSCA8Vf0b6VX+A=">
click here</a>. <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=" alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;">
</div>

</body>
</html>`;
 
      
export const ContentDemo =`<div>
<div> 
<div> 
<div>LinkedIn</div>
 
<p style="text-align: center;"><strong>(First Name), we&apos;re sorry to see you go.</strong></p>
 <br>
  </div>
 
<div style="text-align: center;"> 
<p style="text-align: center;">Closing your account will delete any recommendations or endorsements <br>
      you&apos;ve given or received, plus your messages and connections.</p>
 
<p style="text-align: center;"><strong>You can reopen your account in most case if it&apos;s been closed less <br>
      than 2 days, by clicking on the link below.</strong></p>
 <br>
    Reopen Your Account    
<hr>
 
<p style="text-align: center;">LinkedIn is social network and online platform for professionals. <a href="">Learn More</a></p>
 </div>
 
<div style="text-align: center;"> 
<div style="text-align: center;"> 
<div style="text-align: center;">
<p style="text-align: center;">Unsubscribe</p>
</div>
 
<div style="text-align: center;">
<p style="text-align: center;">Help</p>
</div>
 </div>
 </div>
 
<p style="text-align: center;">This email was sent to (First Name) (Last Name).</p>
 
<div>LinkedIn</div>
 <br>
</div>
</div>
`

