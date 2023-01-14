import "./App.css";
import DrawerAppBar from "./components/DrawerApp";
import Header from "./components/Header";
import NewReleases from "./components/NewReleases";
import WhatsHot from "./components/WhatsHot";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<NewReleases />} />
          <Route path="*" element={<NewReleases to="/" />} />
          <Route path="/whatshot" element={<WhatsHot />} />
          <Route path="/new" element={<NewReleases />} />
          <Route path="/new-releases" element={<NewReleases />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
