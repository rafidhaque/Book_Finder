import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import BookDetails from "./BookDetails";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/book/:handle" component={BookDetails} />
    </BrowserRouter>
  );
}

export default App;
