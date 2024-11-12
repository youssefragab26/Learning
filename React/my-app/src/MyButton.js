import './MyButton.css'
function HelloReactButton(props) {
    const HelloButton = {
        width: "150px",
        height: "30px",
        fontSize: "15px",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#f1e9fd",
        color: "#3c0084",
        cursor: "pointer",
    }
    return(
        <div>
        <button style={HelloButton}>Hello in React, {props.name}</button>
        </div>
    )
}

export default HelloReactButton
