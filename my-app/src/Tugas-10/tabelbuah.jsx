import React from "react";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

class Nama extends React.Component {
  render() {
    return <td>{this.props.name}</td>;
  }
}

class Harga extends React.Component {
  render() {
    return <td>{this.props.harga}</td>;
  }
}

class Berat extends React.Component {
  render() {
    return <td>{this.props.berat / 1000} KG</td>;
  }
}

class TabelBuah extends React.Component {
  render() {
    return (
      <>
        <div id="header-buah">
          <h1>Tabel Harga Buah</h1>
        </div>
        <table id="table-buah">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
          </thead>
          <tbody>
            {dataHargaBuah.map((e) => {
              return (
                <tr>
                  <Nama name={e.nama} />
                  <Harga harga={e.harga} />
                  <Berat berat={e.berat} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default TabelBuah;
