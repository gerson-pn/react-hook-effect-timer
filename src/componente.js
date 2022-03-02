/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"

function Componente(props) {
    const [data, setData] = useState(new Date())
    useEffect(() => {
        setInterval(() =>
            setData(new Date()),
            1000
        )
    })
    return (
        <div>
            <h1>{props.texto}</h1>
            <h2>
                Data: {data.toLocaleDateString()}
                <span> </span>
                Hora: {data.toLocaleTimeString()}
            </h2>
        </div>
    )
}
export default Componente

