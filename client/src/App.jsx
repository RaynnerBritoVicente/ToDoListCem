import './App.css'
import Login from './Login'
import Registrar from './Registrar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
      <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{"backgroundImage": "url('../src/imgs/everestbg.jpg')"}}>
        <Routes>
          <Route path='Login' element={ <Login />} />
          <Route path='Registrar' element={ <Registrar />} />
        </Routes>
      </div>
  )
}

export default App
