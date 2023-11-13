import React from 'react';

const Eliminar = ({ handleEliminarSeleccionadas, handleElimanarTodas }) => {
  return (
    <>
      <input type="button" value="Eliminar Seleccionadas" onClick={handleEliminarSeleccionadas} />
      <input type="button" value="Eliminar Todas" onClick={handleElimanarTodas}/>
    </>
  );
};

export default Eliminar;