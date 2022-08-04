import React from "react";

const Opciones = ({opciones, handleOpciones}) => {
  return (
    <div className="opciones">
      <div className="opcion">
        <button id="A" className="botones" onClick={handleOpciones}>
          A
        </button>
        <h2> {opciones.a}</h2>
      </div>
      <div className="opcion">
        <button id="B" className="botones"  onClick={handleOpciones}>
          B
        </button>
        <h2>{opciones.b}</h2>
      </div>
    </div>
  );
};

export default Opciones;
