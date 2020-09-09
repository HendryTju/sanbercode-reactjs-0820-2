import React, { useState, useEffect } from "react";
import axios from "axios";

const DaftarBuah = () => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    id: null,
    name: "",
    price: "",
    weight: null,
  });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (data === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        });
    }
  }, [data]);

  const submitBuah = (e) => {
    e.preventDefault();
    if (input.id === null) {
      axios
        .post(` http://backendexample.sanbercloud.com/api/fruits`, {
          name: input.name,
          price: input.price,
          weight: input.weight,
        })
        .then((res) => {
          var data = res.data;
          setData([
            ...data,
            {
              id: data.id,
              name: data.name,
              price: data.price,
              weight: parseInt(data.weight),
            },
          ]);
          setInput({ id: null, name: "", price: "", weight: "" });
          setShow(false);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      axios
        .put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {
          name: input.name,
          price: input.price,
          weight: input.weight,
        })
        .then((res) => {
          var newdata = data.map((buah) => {
            if (buah.id === input.id) {
              buah.name = input.name;
              buah.price = input.price;
              buah.weight = parseInt(input.weight);
            }
            return buah;
          });
          setData(newdata);
          setInput({ id: null, name: "", price: "", weight: "" });
          setShow(false);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  const deleteBuah = (e) => {
    e.preventDefault();
    var idBuah = parseInt(e.target.value);
    alert(`Yakin hapus ini? `);
    axios
      .delete(` http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
      .then((res) => {
        var newdata = data.filter((buah) => buah.id !== idBuah);
        setData(newdata);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const changeInput = (e) => {
    e.preventDefault();
    var value = e.target.value;
    var name = e.target.name;
    setInput({ ...input, [name]: value });
    console.log(value);
  };
  const editForm = (e) => {
    e.preventDefault();
    setShow(true);
    var idBuah = parseInt(e.target.value);
    var buah = data.find((buah) => buah.id === idBuah);
    setInput({
      id: idBuah,
      name: buah.name,
      price: buah.price,
      weight: buah.weight,
    });
  };
  return (
    <>
      <div id="layouts">
        {show ? (
          <div id="form">
            <form onSubmit={submitBuah}>
              <label>
                Nama{" "}
                <input name="name" value={input.name} onChange={changeInput} />
              </label>
              <label>
                Harga{" "}
                <input
                  name="price"
                  value={input.price}
                  onChange={changeInput}
                />
              </label>
              <label>
                Berat{" "}
                <input
                  name="weight"
                  value={input.weight}
                  onChange={changeInput}
                />
              </label>
              <button id="btn-submit">Submit Buah</button>
            </form>
          </div>
        ) : (
          <h1>Table Buah</h1>
        )}
        <div id="table">
          <button id="btn-tambah" onClick={() => setShow(true)}>
            (+) Tambah Data Buah
          </button>
          <table>
            <thead>
              <tr>
                <td>No</td>
                <td>Nama</td>
                <td>Harga</td>
                <td>Berat</td>
                <td colspan="2" style={{ textAlign: "center" }}>
                  Aksi
                </td>
              </tr>
            </thead>
            <tbody>
              {data !== null &&
                data.map((buah, index) => {
                  return (
                    <tr key={buah.id}>
                      <td>{index + 1}</td>
                      <td>{buah.name}</td>
                      <td>{buah.price}</td>
                      <td>{buah.weight / 1000}</td>
                      <td>
                        <button
                          id="btn-edit"
                          value={buah.id}
                          onClick={editForm}
                        >
                          Edit Buah
                        </button>
                      </td>
                      <td>
                        <button
                          id="btn-hapus"
                          value={buah.id}
                          onClick={deleteBuah}
                        >
                          Hapus Buah
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default DaftarBuah;
