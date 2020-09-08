import React, { Component } from "react";

class FormBuah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      inputName: "",
      inputPrice: "",
      inputWeight: 0,
      index: -1,
    };

    this.submitForm = this.submitForm.bind(this);
    this.deleteBuah = this.deleteBuah.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    var index = this.state.index;
    var inputAll = {
      nama: this.state.inputName,
      harga: this.state.inputPrice,
      berat: this.state.inputWeight,
    };
    if (index === -1) {
      this.setState({
        dataBuah: [...this.state.dataBuah, inputAll],
        inputName: "",
        inputPrice: "",
        inputWeight: "",
      });
    } else {
      var updateDataBuah = this.state.dataBuah;
      updateDataBuah[index] = inputAll;

      this.setState({
        dataBuah: [...updateDataBuah],
        inputName: "",
        inputPrice: "",
        inputWeight: "",
        index: -1,
      });
    }
    inputAll = {};
  }

  changeInputName = (event) => {
    var value = event.target.value;
    this.setState({ inputName: value });
  };
  changeInputHarga = (event) => {
    var value = event.target.value;
    this.setState({ inputPrice: value });
  };
  changeInputBerat = (event) => {
    var value = event.target.value;
    this.setState({ inputWeight: value });
  };

  editForm = (event) => {
    var index = event.target.value;
    var dataBuah = this.state.dataBuah[index];
    this.setState({
      inputName: dataBuah.nama,
      inputPrice: dataBuah.harga,
      inputWeight: dataBuah.berat,
      index: index,
    });
  };

  deleteBuah(event) {
    var index = event.target.value;
    var updateDataBuah = this.state.dataBuah;
    updateDataBuah.splice(index, 1);
    this.setState({
      inputPrice: "",
      inputPrice: "",
      inputWeight: "",
      index: -1,
    });
  }

  render() {
    return (
      <>
        <div>
          <h1>Tabel Harga Buah</h1>

          <table
            style={{ border: "1px solid", width: "40%", margin: "0 auto" }}
          >
            <thead style={{ background: "#aaa" }}>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody style={{ background: "coral" }}>
              {this.state.dataBuah.map((el, index) => {
                return (
                  <tr key={index}>
                    <td>{el.nama}</td>
                    <td>{el.harga}</td>
                    <td>{el.berat / 1000} kg</td>
                    <td>
                      <button value={index} onClick={this.editForm}>
                        Edit
                      </button>
                      <button value={index} onClick={this.deleteBuah}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <br></br>
          <br></br>

          <h1>Form Input Buah</h1>

          <form onSubmit={this.submitForm}>
            <table
              style={{ border: "1px solid", width: "40%", margin: "0 auto" }}
            >
              <tbody style={{ background: "coral" }}>
                <tr>
                  <td>
                    <strong>Nama</strong>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={this.state.inputName}
                      onChange={this.changeInputName}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Harga</strong>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={this.state.inputPrice}
                      onChange={this.changeInputHarga}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Berat</strong>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={this.state.inputWeight}
                      onChange={this.changeInputBerat}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button>Save</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </>
    );
  }
}

export default FormBuah;
