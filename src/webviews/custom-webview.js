const vscode = require('vscode');
const Webview = require('../utilities/webview');

class CustomWebview extends Webview {

  constructor(name, contributeCommand) {
    super(
      name, 
      contributeCommand,
      `<!doctype html>
            <head>
              <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
            </head>
            <body>
              <p id="fingerprint"></p>
              <script>
                axios.get("http://localhost:5000/vscode/fingerprint")
                .then((response) => {
                  document.getElementById("fingerprint").innerHTML = JSON.stringify(response.data)
                })
                .catch((error) => {
                  document.getElementById("fingerprint").innerHTML = "error"
                })
              </script>
            </body>
        </html>
      `,
      vscode.ViewColumn.Three,
      true, 
      true,
      false,
      null,
      null,
      false
    );
  }
}

module.exports = CustomWebview;
