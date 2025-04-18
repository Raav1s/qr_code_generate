QR Code Generator (Node.js + Express)

A simple web application for generating QR codes from a given URL. Built with Node.js, Express, and the `qr-image` library.

🚀 Features

- Generate a QR code from any URL.
- Display the QR code directly in the browser.
- Download the QR code as a PNG image.

🛠 Installation & Usage
1. Install node.js and npm:
   - Go to the official Node.js website: https://nodejs.org
   - Download the LTS version (Recommended for most users): Click the green “LTS” button to download the installer (.msi file).
   - Run the Installer:
     Open the downloaded .msi file.
     Click "Next" through each step.
     Accept the license agreement.
     Keep all default settings.
     Make sure "Automatically install the necessary tools" is checked (if available).
     Click "Install" and wait for it to finish.
   - Verify Installation: Open your terminal (Command Prompt or VS Code terminal) and run:
     node -v
     npm -v
     You should see version numbers like:
     v18.17.0
     9.6.7
2. Clone the repository:
   git clone https://github.com/Raav1s/qr_code_generate
3. Install dependencies:
   npm install express qr-image
4. Start the server:
   node app.js
5. Open in your browser:
   http://localhost:3000

📁 Project Structure
├── app.js         # Express server
├── index.html     # Frontend UI
├── style.css      # Stylesheet
├── script.js      # Client-side logic

📦 Dependencies
- [express](https://www.npmjs.com/package/express)
- [qr-image](https://www.npmjs.com/package/qr-image)
- [Node.js](https://nodejs.org)
