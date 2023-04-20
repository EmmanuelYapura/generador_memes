import { useState } from "react";
import html2canvas from 'html2canvas';
import './Imgmeme.css';

export function Imgmeme() {

    let [textoMeme, setTextoMeme] = useState();
    let [textoMeme2, setTextoMeme2] = useState();
    let [urlImg, setUrlImg] = useState('');

    const textmeme = (e) => {
        setTextoMeme(e.target.value);
    }

    const textmeme2 = (e) => {
        setTextoMeme2(e.target.value);
    }

    function cambiarUrlImg(e){
        setUrlImg(e.target.value);
    }

    function descargar() {
        html2canvas(document.querySelector('#exportar')).then(function (canvas) {
            let img = canvas.toDataURL("carpetaMemes/jpg");
            let link = document.createElement('a');
            link.download = "memepropio.jpg";
            link.href = img;
            link.click();
        });
    }

    return (
        <div>
            <h1>Edita tu propio meme</h1>
            <h2>Escribi tu texto</h2>

            {/* Esto podria ir en un div */}
            <input onChange={textmeme} type="text" className="" placeholder="texto 1" />
            <p>
                <input type="radio" name="inicio" value="start" />principio
                <input type="radio" name="medio" value="center" />medio
                <input type="radio" name="fin" value="end" />fin
            </p>
            <br />
            <input onChange={textmeme2} type="text" className="" placeholder="texto 2" />
            <p>
                <input type="radio" name="inicio" value="start" />principio
                <input type="radio" name="medio" value="center" />medio
                <input type="radio" name="fin" value="end" />fin
            </p>

            <h2>Elegi tu imagen</h2>

            <select onChange={cambiarUrlImg} name="" id="">
                <option>Selecciona una imagen</option>
                <option value="drake">drake</option>
                <option value="disaster">disaster</option>
                <option value="boyfriend">boyfriend</option>
            </select>

            <figure className="container-img" id="exportar">
                <p className="texto-encima">{textoMeme}</p>
                <img className="meme" src={`../carpetaMemes/${urlImg}.jpg`} alt="meme" />
                <p className="texto-debajo">{textoMeme2}</p>
            </figure>

            <button onClick={descargar}>descargar</button>
        </div>
    )
}