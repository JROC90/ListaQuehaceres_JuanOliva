import { useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import ListaTareas from './ListaTareas';
import Eliminar from './Eliminar';

function App() {
  const [listaTareas, setListaTareas] = useState([
    {id: 0, descripcion: "tarea 1", completada: false},
    {id: 1, descripcion: "tarea 2", completada: false}
  ]);

  let idCounter = 2;

  const handleAgregarTarea = ( tarea ) => { 
    let nuevaTarea = {id: idCounter++, descripcion: tarea, completada: false};
    setListaTareas([...listaTareas,nuevaTarea]);
  };

  const handleCheckedBoxTarea = ( id ) => {
    let index = listaTareas.findIndex((tarea) => tarea.id === id);
    let listaActualizada = [...listaTareas]
    listaActualizada[index].completada = !listaActualizada[index].completada; 
    setListaTareas(listaActualizada);
  };

  const handleEliminarSeleccionadas = (  ) => { 
    let cantidadInicial = listaTareas.length;
    let tareasActulizadas = listaTareas.filter((tarea) => (tarea.completada === false));
    if ( tareasActulizadas.length < cantidadInicial){
      setListaTareas(tareasActulizadas);
      return;
    }
    alert("No ha seleccionado ninguna tarea a eliminar");
  };

  const handleElimanarTodas = () => { 
    setListaTareas([]);
  };

  return (
    <div className="App">
      <div className="encabezado">
        <h1 className="tituloPrincipal">Lista de Quehaceres</h1>
      </div>
      <Formulario handleAgregarTarea={handleAgregarTarea} />
      <ListaTareas listaTareas={listaTareas} handleCheckedBoxTarea={handleCheckedBoxTarea} />
      <Eliminar handleEliminarSeleccionadas={handleEliminarSeleccionadas} handleElimanarTodas={handleElimanarTodas} />
    </div>
  );
};

export default App;
