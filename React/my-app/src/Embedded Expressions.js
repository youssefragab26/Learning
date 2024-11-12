// Allow JavaScript values to be inserted into HTML of React element
// Example
const location = 'Alexandria'

function formatName(firstName, surName){
    return firstName + " " + surName;
}
function Result(){
    return (
        <div>
        <h1>{location}</h1>
        <p>{formatName("Youssef", "Mohamed")}</p>
        </div>
    )
}
// output : Alexandria
// output : Youssef Mohamed





export default Result