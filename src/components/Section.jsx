export default function Section(props) {
    return (
        <div className="section">
            <h3>{`// ${props.title}`}</h3>
            <p> {props.content} </p>
        </div>
    )
}