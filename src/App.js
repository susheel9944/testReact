import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import EventDetails from "./components/eventDetails";
import AllEvent from "./components/allEvent";
import EditEvent from "./components/editEvent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eventdetails" element={<EventDetails />} />
          <Route path="/allevent" element={<AllEvent />} />
          <Route path="/edit-event/:id" element={<EditEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
