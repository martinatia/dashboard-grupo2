import PropTypes from "prop-types";

function Fila(props) {
  return (
    <tr>
      <th>{props.titulo}</th>
      <th>{props.duracion}</th>
      <th>{props.rating}</th>
      <th>
        <ul>
        {props.generos.map((genero, index) => (
          <li key={genero + index}>{genero}</li>
        ))}
        </ul>
      </th>
      <th>{props.premios}</th>
    </tr>
  );
}

Fila.prototype = {
  titulo: PropTypes.string.isRequired,
  duracion: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  generos: PropTypes.array.isRequired,
  premios: PropTypes.number.isRequired,
};

export default Fila;
