// In App.js
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DestinationCardDetails from "./Components/Destinations/DestinationCardDetails";
import FullPage from "./FullPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullPage />} />
        <Route path="/destinations/:id" element={<DestinationCardDetails />} /> {/* Changed :city to :id */}
      </Routes>
    </Router>
  );
}

export default App;
