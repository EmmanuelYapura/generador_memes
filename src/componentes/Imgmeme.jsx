import { useState } from "react"


export function Imgmeme () {

    let [textoMeme, setTextoMeme] = useState();

    const textmeme = (e) => {
        setTextoMeme(e.target.value);
        console.log(textoMeme);
    }

    return (
        <div>
            <h1>
                Edita tu propio
            </h1>

            <h2>
                Escribi tu texto
            </h2>

            <input onChange={textmeme} type="text" className="" placeholder="Pone tu frase" />

            <h2>
                Elegi tu imagen
            </h2>

            <select name="" id="">
                <option>Selecciona una imagen</option>
                <option value="1">f</option>
                <option value="2">b</option>
                <option value="3">s</option>
                <option value="4">c</option>
            </select>
        </div>
    )
}