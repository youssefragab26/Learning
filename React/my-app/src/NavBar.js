function NavBar(props){
    const color = { color: "#f1e9fd"}
    return (
        <ul style={color}>
            <li>{props.first}</li>
            <li>{props.last}</li>
        </ul>
    )
}
export default NavBar;