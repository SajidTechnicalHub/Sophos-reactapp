import React from 'react'


const EmailQuaratineTemplate = (props) => {
  const CancelEvent = () => {
    props.Cancel()
  }
  const data = `<!DOCTYPE html>
  <html>
      <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
      <title>6 Undeliverables: Quarantine Sync Error for {userName}</title>
  <body>
  
  
  
      <p style="FONT-SIZE: 15px; FONT-FAMILY: &quot;Segoe UI&quot;, &quot;Segoe UI Web (West European)&quot;, &quot;Segoe UI&quot;, -apple-system, system-ui, Roboto, &quot;Helvetica Neue&quot;, sans-serif; COLOR: rgb(32,31,30); BACKGROUND-COLOR: rgb(255,255,255)"><span style="FONT-SIZE: large; BORDER-TOP: 0px; FONT-FAMILY: inherit; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit"><span style="FONT-SIZE: medium; BORDER-TOP: 0px; FONT-FAMILY: Arial, serif, EmojiFont; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit"><strong><font size="6"></font></strong></span></span>
      </p>
      <p style="FONT-SIZE: 15px; FONT-FAMILY: &quot;Segoe UI&quot;, &quot;Segoe UI Web (West European)&quot;, &quot;Segoe UI&quot;, -apple-system, system-ui, Roboto, &quot;Helvetica Neue&quot;, sans-serif; COLOR: rgb(32,31,30); BACKGROUND-COLOR: rgb(255,255,255)"><span style="FONT-SIZE: large; BORDER-TOP: 0px; FONT-FAMILY: inherit; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit"><span style="FONT-SIZE: medium; BORDER-TOP: 0px; FONT-FAMILY: Arial, serif, EmojiFont; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit"><strong><font size="6">Quarantine Notification</font></strong></span></span>
      </p>
      <p style="FONT-SIZE: 15px; FONT-FAMILY: &quot;Segoe UI&quot;, &quot;Segoe UI Web (West European)&quot;, &quot;Segoe UI&quot;, -apple-system, system-ui, Roboto, &quot;Helvetica Neue&quot;, sans-serif; COLOR: rgb(32,31,30); BACKGROUND-COLOR: rgb(255,255,255)"><span style="FONT-SIZE: large; BORDER-TOP: 0px; FONT-FAMILY: inherit; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit"><span style="FONT-SIZE: medium; BORDER-TOP: 0px; FONT-FAMILY: Arial, serif, EmojiFont; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit">Hello&nbsp;<span style="BORDER-TOP: 0px; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: blue; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px">{userName}<u>,</u></span></span>
          </span>
          <br>
          <br><strong>Delivery&nbsp;of&nbsp;6&nbsp;new emails to your inbox&nbsp;has been prevented,&nbsp;You can review&nbsp;these here and choose what&nbsp;happens to them.</strong>
          <br>
          <br><span style="FONT-SIZE: medium; BORDER-TOP: 0px; FONT-FAMILY: Arial, serif, EmojiFont; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit"><span style="BORDER-TOP: 0px; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px">Severity:</span>&nbsp;&nbsp;&nbsp;<span style="FONT-SIZE: 15pt; BORDER-TOP: 0px; FONT-FAMILY: inherit; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: rgb(0,188,242); PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit">?</span>&nbsp;<span style="BORDER-TOP: 0px; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: red; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px">High</span></span>
          <br><span style="BORDER-TOP: 0px; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px">Time:&nbsp;<font color="red">{date}</font><br>Activity:&nbsp;<span style="FONT-SIZE: medium; BORDER-TOP: 0px; FONT-FAMILY: Arial, serif, EmojiFont; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: rgb(33,33,33); PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit">6&nbsp;</span>Undelivered&nbsp;emails from Contact</span>
      </p>
      <div style="FONT-SIZE: 15px; BORDER-TOP: 0px; FONT-FAMILY: Arial, Helvetica, sans-serif, serif, EmojiFont; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: rgb(32,31,30); PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; BACKGROUND-COLOR: rgb(255,255,255); font-stretch: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit" dir="ltr">
          <div style="BORDER-TOP: 0px; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px">&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
              <table style="FONT-SIZE: 0px; FONT-FAMILY: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; WIDTH: 384px; COLOR: rgb(33,33,33); LINE-HEIGHT: 0px; font-stretch: inherit" cellspacing="0" cellpadding="0" border="0">
                  <tbody><tr>
                      <td style="BORDER-COLLAPSE: collapse; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 15px; PADDING-RIGHT: 15px; BACKGROUND-COLOR: rgb(53,88,168); border-radius: 4px" valign="middle" align="center"><span style="FONT-SIZE: small; BORDER-TOP: 0px; FONT-FAMILY: inherit; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit"><a id="x_x_x_x_x_x_x_x_x_m_5228229997781280426m_-4582864256604226611gmail-x_x_gmail-m_4628436401360325222m_1270713067398412679m_-1564249429224047007gmail-m_7976746255904800835LPlnk404747" style="FONT-SIZE: 18px; BORDER-TOP: 0px; FONT-FAMILY: Helvetica, Arial, sans-serif; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; FONT-WEIGHT: 600; COLOR: white; PADDING-BOTTOM: 15px; PADDING-TOP: 15px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; DISPLAY: block; LINE-HEIGHT: 21px; PADDING-RIGHT: 0px; font-stretch: inherit; border-radius: 4px; background-size: initial; background-origin: initial; text-decoration-line: none; background-clip: initial" href={phishingUrl} originalsrc="{phishingUrl}" shash="Es/S0uCGLfsz2lsmQQWLc0HZkT628oBSflAhL4Tr/6DQJRIKFe3u/35YCTziOcxYkhXlookZVPASGeKS5tCAjB3NFlCvgrSfdrldMHKSkjOxBizQtt4hUXCqRPuXjE+V2uuK/zvVBy5DtCGfgb1tqYUeFmqYpwVXONlxoMg1Xhw=" rel="noopener noreferrer" target="_blank" data-auth="NotApplicable" tabindex="0"><span style="FONT-SIZE: medium; BORDER-TOP: 0px; FONT-FAMILY: Arial, serif, EmojiFont; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit">Release Message</span></a>
                          </span>&nbsp;&nbsp; &nbsp; &nbsp;
                          <div style="BORDER-TOP: 0px; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px">&nbsp;</div>
                      </td>
                  </tr>
              </tbody></table>
          </div>
          <div style="BORDER-TOP: 0px; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px">&nbsp;</div>
          <div style="BORDER-TOP: 0px; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px"><span style="FONT-SIZE: 16px; BORDER-TOP: 0px; FONT-FAMILY: &quot;Times New Roman&quot;, serif, EmojiFont; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: black; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-ligatures: inherit; font-variant-caps: inherit"><span style="FONT-SIZE: small; BORDER-TOP: 0px; FONT-FAMILY: inherit; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit"><strong>&nbsp;nailor.com Support</strong></span></span>
          </div>
          <div style="BORDER-TOP: 0px; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px">
              <br><span style="FONT-SIZE: 16px; BORDER-TOP: 0px; FONT-FAMILY: &quot;Times New Roman&quot;, serif, EmojiFont; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: black; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-ligatures: inherit; font-variant-caps: inherit"><span style="FONT-SIZE: small; BORDER-TOP: 0px; FONT-FAMILY: inherit; BORDER-RIGHT: 0px; VERTICAL-ALIGN: baseline; BORDER-BOTTOM: 0px; COLOR: ; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; BORDER-LEFT: 0px; PADDING-RIGHT: 0px; font-stretch: inherit"><strong>(C)&nbsp;2020 Microsoft&nbsp;Corporation. All&nbsp;rights&nbsp;reservedd&nbsp;|&nbsp;Acceptable&nbsp;usage&nbsp;policy | Privacyy Notice</strong></span></span>
          </div>
      </div>
  
  </body>
  </html>
  `
  return (
    
    <div
    dangerouslySetInnerHTML={{__html: data}}
  />
  )
}

export default EmailQuaratineTemplate


