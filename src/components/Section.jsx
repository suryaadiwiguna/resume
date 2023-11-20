export default function Section(props) {
    // var list = <li>One</li>;
    // if (props.list) {
    //     list = props.list.map((value) => {
    //         return `<li>${value}</li>`
    //     }).join("")

    // list = new JSDOM(parser.window.document.querySelector("li").textContent)

    const subtitle = function (props) {
        if (props.title) {
            return <p> {props.title} </p>
        }
    }

    return (

        <div className="section">
            <h3>{`${props.title ? "// " + props.title : ""}`}</h3>
            <p id="subtitle">{`${props.subtitle ? "<" + props.subtitle + ">" : ""}`} </p>
            <p id="detail">{`${props.detail ? props.detail : ""}`} </p>
            <p> {` ${props.content ? props.content : ""} `} </p>
        </div>

    )
}