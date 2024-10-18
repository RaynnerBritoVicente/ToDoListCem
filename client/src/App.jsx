import './App.css'
import Login from './Login'
import Registrar from './Registrar'
import { Route, Routes, Link } from 'react-router-dom'

function App() {

  return (
      <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{"backgroundImage": "url('../src/imgs/everestbg.jpg')"}}>
       <div className="m-3 bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4x1 text-white font-bold text-center mb-6">Bem-Vindo(a)!</h1>
        <Link className="text-blue-500" to="/Login"><button className="m-3 p-3 w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-800 hover:bg-blue-600 hover:text-white py-2 transition-colors duration-300">Acessar Login</button></Link>
        <Link className="text-blue-500" to="/Registrar"><button className="m-3 p-3 w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-800 hover:bg-blue-600 hover:text-white py-2 transition-colors duration-300">Registrar-se</button></Link>
       </div>
       
        <Routes>
          <Route path='Login' element={ <Login />} />
          <Route path='Registrar' element={ <Registrar />} />
        </Routes>
      </div>
  )
}

export default App
