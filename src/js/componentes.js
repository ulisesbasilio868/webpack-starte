import '../css/componentes.css';
import webpacklog from '../assets/img/webpack-logo.jpg';

export const saludar = (nombre) =>{
    console.log('Creando etiqueta H1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;

    document.body.append(h1);

    const img = document.createElement('img');
    img.src =webpacklog;
     document.body.append(img);
}