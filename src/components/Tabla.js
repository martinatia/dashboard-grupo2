import React from 'react';
import Fila from './Fila'

function Tabla() {
  return (
      <table class="table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Duración</th>
          <th>Rating</th>
          <th>Género</th>
          <th>Premios</th>
        </tr>
      </thead>
      <tbody>
            <Fila titulo="Billie Elliot" duracion={123} rating={5} generos={["Drama", "Comedia"]} premios="2"/>
            <Fila titulo="Alicia en el país de las maravillas" duracion={142} rating={4.8} generos={["Drama", "Acción", "Comedia"]} premios="3"/>
            
      </tbody>
      <tfoot>
        <tr>
          <th>Título</th>
          <th>Duración</th>
          <th>Rating</th>
          <th>Género</th>
          <th>Premios</th>
        </tr>
      </tfoot>
    </table>
  );
}

export default Tabla;
