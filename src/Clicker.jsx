import { useState } from "react"


export default function Clicker(props)
{
    const [ conto, setConto ] = useState(0)


   


    const aumentaConto = () => 
    {
        setConto(conto + 1)
    }

    return (
    <>
    <div>Utente: { props.persona }</div>
    <div>Conto Click: { conto }</div>
    <button onClick={aumentaConto}>Cliccami</button>
    </>
    )
}