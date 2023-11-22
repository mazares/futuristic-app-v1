import "./App.css";

import DarkStar from "./components/darkstar/DarkStar";

import Header from "./components/header/Header";

import Nav from "./components/nav/Nav";

import Main from "./components/main/Main";

import Footer from "./components/footer/Footer";

export default function App(params) {
  return (
    <div className="app">
      <DarkStar />

      <Header />

      <Nav />

      <Main />

      <Footer />
    </div>
  );
}
