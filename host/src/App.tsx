import React from "react";
import ReactDOM from "react-dom/client";

import Header from "remote/Header";
import Footer from "footer/Footer";

import "./index.scss";

const App = () => (
  <>
    <Header />
    <div className="mt-10 mx-auto max-w-6xl">
      <main>
        <div>Name: host</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Tailwind</div>
      </main>
    </div>
    <Footer/>
  </>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
