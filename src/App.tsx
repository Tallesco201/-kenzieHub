import "./Style/App.css";

import { Toaster } from "react-hot-toast";
import { RoutesMain } from "./Routes";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <RoutesMain />
    </div>
  );
}

export default App;
