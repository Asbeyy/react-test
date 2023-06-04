import './Card.css'

export default function Card(props)
{
    return(
        <>
            <div className="container-card">
                <div> Nickname: {props.nome}</div>
                <div> Cognome: {props.cognome}</div>
                <div> Eta: {props.eta}</div>
                <div> Sesso: {props.sesso}</div>
            </div>
        </>
    )
}