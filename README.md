
# QR Code Generator (Node.js + Express)

A simple web application for generating QR codes from a given URL. Built with Node.js, Express, and the `qr-image` library.

---

## 🚀 Features

- Generate a QR code from any URL.
- Display the QR code directly in the browser.
- Download the QR code as a PNG image.

---

## 🛠 Installation & Usage

### 1. Install Node.js and npm

- Go to the official Node.js website: [Node.js Official](https://nodejs.org)
- Download the LTS version (Recommended for most users) by clicking the green “LTS” button.
- Run the installer:
  - Open the downloaded `.msi` file.
  - Click "Next" through each step and accept the license agreement.
  - Keep all default settings and make sure "Automatically install the necessary tools" is checked (if available).
  - Click "Install" and wait for it to finish.
- Verify Installation:
  Open your terminal (Command Prompt or VS Code terminal) and run:
  ```bash
  node -v
  npm -v
  ```
  You should see version numbers like:
  ```bash
  v18.17.0
  9.6.7
  ```

### 2. Clone the Repository

Clone this repository to your local machine:
```bash
git clone https://github.com/Raav1s/qr_code_generate
cd qr_code_generate
```

### 3. Install Dependencies

Navigate to the project directory and install the necessary dependencies:
```bash
npm install express qr-image
```

### 4. Start the Server

Run the application:
```bash
node app.js
```

### 5. Open in Your Browser

Open [http://localhost:3000](http://localhost:3000) in your browser to start using the QR Code generator.

---

## 📁 Project Structure

```
├── app.js         # Express server
├── index.html     # Frontend UI
├── style.css      # Stylesheet
├── script.js      # Client-side logic
```

---

## 📦 Dependencies

- [express](https://www.npmjs.com/package/express) — Web framework for Node.js.
- [qr-image](https://www.npmjs.com/package/qr-image) — Library for generating QR codes.
- [Node.js](https://nodejs.org) — JavaScript runtime used for building the application.
