export default function Header(props) {
    return (
        <div className="header">
            <h1> {props.name} </h1>
            <h2> {`< ${props.jobTitle} >`} </h2>
        </div>
    )
}