export const Layout = ({
  body = "",
  bodyTags = "",
  headTags = "",
  props = {},
  sheets = "",
  title = "",
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <link rel='shortcut icon' href='/icons/favicon.png'>
      <link rel='apple-touch-icon' href='/icons/apple-touch-icon-60x60.png'>
      <link rel='apple-touch-icon' sizes='120x120' href='/icons/apple-touch-icon-120x120.png'>
      <link rel='apple-touch-icon' sizes='152x152' href='/icons/apple-touch-icon-152x152.png'>
      <link rel='apple-touch-icon' sizes='167x167' href='/icons/apple-touch-icon-167x167.png'>
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon-180x180.png'>
      <meta name='apple-mobile-web-app-title' content='${title}'>
      <meta name='apple-mobile-web-app-capable' content='yes'>
      <meta name='apple-mobile-web-app-status-bar-style' content='#f15953'>
      <meta name='theme-color' content='#f15953'>
      <link rel='manifest' href='/manifest.json'>

      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600'>
      <style type="text/css">${sheets.toString()}</style>
      <script>var reactProps = ${JSON.stringify(props)}</script>
      ${headTags}
    </head>
    <body>
      <div id="react">${body}</div>
      ${bodyTags}
    </body>
  </html>
`;
