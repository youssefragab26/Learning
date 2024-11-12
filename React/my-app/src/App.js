import './App.css';
import HelloReactButton from "./MyButton";
import ColorLoop  from "./ColorLoop";
import NavBar from "./NavBar";
import Result from "./Embedded Expressions"

function App() {
  return (
      <div>
          <ColorLoop/>
          <Result />
          <h1>HELLO I'M YOUSSEF</h1>
          <HelloReactButton name='Joe'/>
          <NavBar first='100%' last='50%'/>
          <article>
              <h1>My First Component</h1>
              <ol>
                  <li>Components: UI Building Blocks</li>
                  <li>Defining a Component</li>
                  <li>Using a Component</li>
              </ol>
          </article>
      </div>

  );
}

export default App;
