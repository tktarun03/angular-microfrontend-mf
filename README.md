# angular-microfrontend-mf

A micro frontend architecture built with Angular using Webpack Module Federation.

## 🚀 Features
- Uses **Angular** with **Webpack Module Federation** for micro frontend architecture.
- Implements a **host application** and a **remote micro frontend**.
- Scalable, flexible, and production-ready for modern UI applications.

## 📂 Project Structure
```
angular-microfrontend-mf/
│── host/  # Host application
│   ├── src/bootstrap.ts  # Bootstrap for Angular app
│   ├── webpack.config.js  # Webpack config for module federation
│── microfrontend/  # Remote micro frontend application
│   ├── src/bootstrap.ts  # Bootstrap for Angular app
│   ├── webpack.config.js  # Webpack config for module federation
│── README.md
```

## 🛠 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/tktarun03/angular-microfrontend-mf.git
   cd angular-microfrontend-mf
   ```

2. Install dependencies:
   ```bash
   cd host && npm install
   cd ../microfrontend && npm install
   ```

3. Start both applications:
   ```bash
   cd host && npm start
   cd ../microfrontend && npm start
   ```

4. Open **http://localhost:4200** to view the host application.

## 👨‍💻 About the Author

🚀 Created by [Arunkumar Thamilarasu](https://github.com/tktarun03) | UI Technical Architect | Angular & Micro Frontend Expert

## ⭐ Contribute & Support
- Fork & Star this repository! ⭐
- Submit Issues and PRs to improve the micro frontend setup.

---
🎯 **Follow me on GitHub**: [@tktarun03](https://github.com/tktarun03)
