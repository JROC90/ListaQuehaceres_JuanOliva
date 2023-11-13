import React, { useState } from 'react';

const Formulario = ({ handleAgregarTarea }) => {

  const [tarea, setTarea] = useState("");

  return (
    <div>
      <input type='text' id="textField" onChange={(e) => setTarea(e.target.value)} value={tarea} />
      <input
        type="button"
        value="Agregar"
        onClick={() => {
          handleAgregarTarea(tarea);
          setTarea("");
          }
        }
      />
    </div>
  );
};

export default Formulario;