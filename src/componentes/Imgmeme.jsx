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

    function cambiarUrlImg(e) {
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

    function cambiaPosicionSuperior(e) {
        const $textoEncima = document.querySelector('.texto-encima');
        $textoEncima.style.textAlign = e.target.value;
    }


    function cambiaPosicionInferior(e) {
        const $textoDebajo = document.querySelector('.texto-debajo');
        $textoDebajo.style.textAlign = e.target.value;
    }

    function cambiarColorTextoSuperior(e) {
        const $textoEncima = document.querySelector('.texto-encima');
        $textoEncima.style.color = e.target.value;
    }

    function cambiarColorTextoInferior(e) {
        const $textoDebajo = document.querySelector('.texto-debajo');
        $textoDebajo.style.color = e.target.value;
    }

    return (
        <div className="contenedor">
            <div className="contenedorControles">
                <h1>Edita tu propio meme</h1>
                <h2>Escribi tu texto</h2>

                <div className="contenedorInputs">
                    <div className="inputs">
                        <input onChange={textmeme} type="text" className="inputText" placeholder="texto 1" />
                        <input onChange={cambiarColorTextoSuperior} type="color" />
                    </div>
                    <p onChange={cambiaPosicionSuperior}>
                        <input type="radio" name="posicion" value="start" />principio
                        <input type="radio" name="posicion" value="center" defaultChecked />medio
                        <input type="radio" name="posicion" value="end" />fin
                    </p>
                </div>

                <div className="contenedorInputs">
                    <div className="inputs">
                        <input onChange={textmeme2} type="text" className="inputText" placeholder="texto 2" />
                        <input onChange={cambiarColorTextoInferior} type="color" />
                    </div>
                    <p onChange={cambiaPosicionInferior}>
                        <input type="radio" name="posicion2" value="start" />principio
                        <input type="radio" name="posicion2" value="center" defaultChecked />medio
                        <input type="radio" name="posicion2" value="end" />fin
                    </p>
                </div>

                <h2>Elegi tu imagen</h2>

                <select onChange={cambiarUrlImg} className="inputText">
                    <option>Selecciona una imagen</option>
                    <option value="drake">drake</option>
                    <option value="disaster">disaster</option>
                    <option value="boyfriend">boyfriend</option>
                    <option value="kid">kid</option>
                    <option value="takeMoney">take my money</option>
                </select>
            </div>

            <div>
                <figure className="container-img" id="exportar">
                    <p className="texto-encima">{textoMeme}</p>
                    <img className="meme" src={`../carpetaMemes/${urlImg}.jpg`} alt="meme" />
                    <p className="texto-debajo">{textoMeme2}</p>

                </figure>
                <button onClick={descargar}>descargar</button>
            </div>

        </div>
    )
}