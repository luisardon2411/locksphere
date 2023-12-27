import { Route, Routes } from "react-router-dom"
import Init from "./pages/Init/Init"
import Register from "./pages/Register/Register"


const App = () => {
  return (
    <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/register" element={ <Register /> } />
    </Routes>
  )
}

export default App