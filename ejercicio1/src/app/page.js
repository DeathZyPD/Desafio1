"use client"
import React, { useState } from 'react';
import styles from './page.module.css'; // Importa los estilos CSS utilizando CSS Modules

const peliculas = [
  { nombre: 'Avatar', precio: 12.99 },
  { nombre: 'El Señor de los Anillos: El Retorno del Rey', precio: 9.99},
  { nombre: 'Inception', precio: 14.95 },
  { nombre: 'Harry Potter y la Piedra Filosofal', precio: 8.99 },
  { nombre: 'El espanta tiburones. Pelicula.', precio: 11.98 },
  { nombre: 'Up', precio: 10.25 },
  { nombre: 'The Hangover', precio:7.99 },
  { nombre: 'The Dark Knight', precio: 11.49 },
  { nombre: 'La llorona.', precio: 17.96 }, 
  { nombre: 'Anabelle', precio: 10.91 },
  { nombre: 'The Social Network', precio: 9.95 },
  { nombre: 'Iron Man', precio: 13.75 },
  
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [compras, setCompras] = useState([]);

  const agregarCompra = () => {
    const peliculaSeleccionada = peliculas.find(pelicula => pelicula.nombre === selectedMovie);
    if (peliculaSeleccionada) {
      const nuevaCompra = { nombre: peliculaSeleccionada.nombre, precio: peliculaSeleccionada.precio, cantidad: 1 };
      setCompras([...compras, nuevaCompra]);
    }
  };

  const eliminarCompra = (index) => {
    const nuevasCompras = [...compras];
    nuevasCompras.splice(index, 1);
    setCompras(nuevasCompras);
  };

  const disminuirCantidad = (index) => {
    const nuevasCompras = [...compras];
    if (nuevasCompras[index].cantidad > 1) {
      nuevasCompras[index].cantidad--;
      setCompras(nuevasCompras);
    }
  };

  const aumentarCantidad = (index) => {
    const nuevasCompras = [...compras];
    nuevasCompras[index].cantidad++;
    setCompras(nuevasCompras);
  };

  const calcularTotal = () => {
    return compras.reduce((total, compra) => total + (compra.precio * compra.cantidad), 0).toFixed(2);
  };

  return (

    <div className={styles.container}>
      <div className={styles.caja}>
      <h1 className={styles.h1}>Lista de peliculas</h1>

<div id="picker">
  <select className={styles.cajas} onChange={(e) => setSelectedMovie(e.target.value)}>
    <option value="">Selecciona la pelicula que deseas adquirir</option>
    {peliculas.map((pelicula, index) => (
      <option key={index} value={pelicula.nombre}>{pelicula.nombre}</option>
    ))}
  </select>
  <button className={styles.agregarbtn} onClick={agregarCompra}>Agregar</button>
</div>

<div id="lista">
<h1 className={styles.h1}>Lista de tus Compras</h1>
  <ul >
    {compras.map((compra, index) => (
      <li  key={index} className={styles.lista}>
        <div className={styles.infoPelicula}>
<span className={styles.nombre}>{compra.nombre}</span>
<span className={styles.precio}>${compra.precio.toFixed(2)}</span>
</div>
        <div id="cantidad" className={styles.btn}>
          <button className={styles.btnCantidad} onClick={() => disminuirCantidad(index)}>-</button>
          <input className={styles.inputCantidad} type="text" value={compra.cantidad} readOnly />
          <button className={styles.btnCantidad} onClick={() => aumentarCantidad(index)}>+</button>
          
        </div>
        <button className={styles.eliminarbtn} onClick={() => eliminarCompra(index)}>Eliminar</button>
      </li>
      
    ))}
  </ul>
  <p className={styles.total}>Total a pagar: ${calcularTotal()}</p>
</div>
      </div>
     
    </div>
  );
}

export default App;
