// Thanks prasetyo507

import React, { useState } from "react";
import Tugas9 from "../Tugas-9/Tugas9";
import Tugas10 from "../Tugas-10/Tugas10";
import Tugas11 from "../Tugas-11/Tugas11";
import Tugas12 from "../Tugas-12/Tugas12";
import Tugas13 from "../Tugas-13/Tugas13";
import Tugas14 from "../Tugas-14/Tugas14";
import ThemedButton from "./ThemeTogglerButton";
import { Switch, Route } from "react-router";

const Routes = () => {
  const [running, setRunning] = useState(true);
  let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 },
  ];
  const stop = (params) => {
    console.log(params);
    if (params === 0) {
      setRunning(false);
    }
  };
  return (
    <Switch>
      <Route exact path="/">
        <section className="content">
          <Tugas9 />
        </section>
      </Route>
      <Route path="/tugas10">
        <section className="content">
          <Tugas10 data={dataHargaBuah} />
        </section>
      </Route>
      <Route path="/tugas11">
        {running ? (
          <section className="content">
            <Tugas11 start={100} timer={stop.bind(this)} />
          </section>
        ) : null}
      </Route>
      <Route path="/tugas12">
        <section className="content">
          <Tugas12 />
        </section>
      </Route>
      <Route path="/tugas13">
        <section className="content">
          <Tugas13 />
        </section>
      </Route>
      <Route path="/tugas14">
        <section className="content">
          <Tugas14 />
        </section>
      </Route>
      <Route path="/tugas15">
        <section className="content">
          <ThemedButton />
        </section>
      </Route>
    </Switch>
  );
};

export default Routes;
