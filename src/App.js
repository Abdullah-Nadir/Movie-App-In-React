import {BrowserRouter as Router} from "react-router-dom";

import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
          <Home />
      </div>
    </Router>
  );
}

export default App;
