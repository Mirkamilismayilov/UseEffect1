import { useState } from "react";
import "./index.css"
import Effect1 from "./components/Effect1";

function App() {

  const [show, setShow] = useState(false)




  return (
    <div className="App">



      <button className="bg-orange-400 m-4 p-2 rounded-lg border-cyan-200 border-2" onClick={() => setShow(!show)}   >{show ? "Hide" : "Show"}</button>


      {show && <Effect1 />}





    </div>
  );
}

export default App;
