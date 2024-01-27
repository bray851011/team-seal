import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Inquiry from "./routes/inquiry/inquiry.component";
import Navigation from "./components/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="inquiry" element={<Inquiry />} />
      </Route>
    </Routes>
  )
}

export default App;
