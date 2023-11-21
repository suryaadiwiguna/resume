
export default function Section(props) {

    const renderList = function (list) {
        const listDOM = list.map((n) => <li>{n}</li>);
        return (<ul>{listDOM}</ul>)
    }

    return (
        <>
            <div className="section">
                <h3>{`${props.title ? "// " + props.title : ""}`}</h3>
                <p id="subtitle">{`${props.subtitle ? "<" + props.subtitle + ">" : ""}`} </p>
                <p id="detail">{props.detail ? props.detail : ""} </p>
                <p> {props.content ? props.content : ""} </p>
                {props.list ? renderList(props.list) : ""}
            </div>
        </>
    )
}