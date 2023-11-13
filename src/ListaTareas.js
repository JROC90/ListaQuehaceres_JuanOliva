import React from 'react';
import './ListaTareas.css'

const ListaTareas = ({ listaTareas, handleCheckedBoxTarea }) => {
  return (
    <div className="lista-tareas">
      <h2>TAREAS:</h2>
      {listaTareas.map((tarea) => (
        <div className="tareas" key={tarea.id}>
          <input
            type="checkbox"
            checked={tarea.completada}
            onChange={() => handleCheckedBoxTarea(tarea.id)}
          />
          <label className={tarea.completada ? 'completada' : ''}>
            {tarea.descripcion}
          </label>
        </div>
      ))}
    </div>
  );
};
export default ListaTareas;