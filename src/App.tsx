import { useContext } from "react";
import { GlobalContext } from "./Context/GlobalProvider";

function App() {
  const { RP, setRP, BP, setBP, OP, setOP } = useContext(GlobalContext);
  return (
    <>
      <h1>Hello from .app</h1>
      <h2>
        {RP}
        {BP}
        {OP}
      </h2>
    </>
  );
}

export default App;
