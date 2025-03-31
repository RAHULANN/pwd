import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppThemeProvider from "./utilities/Theme/Theme";
import { AuthProvider } from "./Component/Login/Auth"; // Import AuthProvider
import ReactGA from 'react-ga';
ReactGA.initialize('G-1P23QXMEKZ');
ReactGA.pageview(window.location.pathname);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
