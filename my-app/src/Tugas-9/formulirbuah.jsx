import React from "react";

// Create react app based on Quiz
// Use the same inline styling, because just need to change inside app.js

function FormulirBuah() {
  return (
    <div
      style={{
        width: "40%",
        margin: "0 auto",
        border: "1px solid #000",
        borderRadius: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Form Pembelian Buah</h1>
      <div style={{ padding: "20px", paddingTop: "0px" }}>
        <div style={{ display: "block", marginBottom: "1em" }}>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Nama Pelanggan
          </div>
          <input
            style={{ display: "inline-block", type: "text", name: "name" }}
          />
        </div>
        <div style={{ display: "block", marginBottom: "1em" }}>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Daftar Item
          </div>
          <div style={{ display: "inline-block" }}>
            <input type="checkbox" name="semangka" />
            <label>Semangka</label>
            <br />
            <input type="checkbox" name="jeruk" />
            <label>Jeruk</label>
            <br />
            <input type="checkbox" name="nanas" />
            <label>Nanas</label>
            <br />
            <input type="checkbox" name="salak" />
            <label>Salak</label>
            <br />
            <input type="checkbox" name="anggur" />
            <label>Anggur</label>
            <br />
          </div>
        </div>
        <button style={{ background: "white", borderRadius: "20px" }}>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Kirim
          </a>
        </button>
      </div>
    </div>
  );
}

export default FormulirBuah;
