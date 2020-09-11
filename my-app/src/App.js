import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import FormBuah from './Tugas-9/FormBuah';
// import DaftarBuah from './Tugas-10/DaftarBuah';
// import Timer from './Tugas-11/Timer';
// import DaftarBuah from './Tugas-12/DaftarBuah';
// import DaftarBuah from './Tugas-13/DaftarBuah';
// import DaftarBuah from "./Tugas-14/DaftarBuah";
import Routes from "./Tugas-15/Routes";
import Nav from "./Tugas-15/Nav";
import { ThemeProvider } from "./Tugas-15/ThemeContext";

function App() {
  return (
    <>
      {/* <FormBuah/>
      <DaftarBuah/>
      <Timer start={5}/> */}
      {/* <DaftarBuah /> */}
      <Router>
        <ThemeProvider>
          <Nav />
          <section>
            <Routes />
          </section>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
