import { useContext } from "react";
import { GlobalContext } from "./Context/GlobalProvider";

function App() {
  const { RP, setRP, BP, setBP, OP, setOP } = useContext(GlobalContext);
  return (
    <div className="flex flex-row justify-center mt-32 ">
      <h1>Hello from .app</h1>
      <h2>
        {RP}
        {BP}
        {OP}
      </h2>
    </div>
  );
}

export default App;
