import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes,  Route } from "react-router-dom"


export default function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/messenger/login" element={<Login />} />
        <Route path="/messenger/register" element={ <Register /> } />
      </Routes>
     </BrowserRouter>
    </>
  )
}