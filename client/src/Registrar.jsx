import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineLock , AiOutlineUnlock , AiOutlineMail } from 'react-icons/ai'

const Registrar = () => {
    return (   
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <h1 className="text-4x1 text-white font-bold text-center mb-6">Registrar-se</h1>
            <form action="">
                <div className='relative my-4'>
                    <input 
                        type="email" 
                        className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" 
                        placeholder=""/>
                    <label 
                        htmlFor="" 
                        className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                    <BiUser className="absolute top-4 right-4"/>
                </div>
                <div className='relative my-4'>
                    <input 
                        type="email" 
                        className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" 
                        placeholder=""/>
                    <label 
                        htmlFor="" 
                        className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    <AiOutlineMail className="absolute top-4 right-4"/>
                </div>
                <div className='relative my-4'>
                    <input 
                        type="password" 
                        className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" 
                        placeholder=""/>
                    <label 
                        htmlFor="" 
                        className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Senha</label>
                    <AiOutlineLock className="absolute top-4 right-4"/>
                </div>
                <div className='relative my-4'>
                    <input 
                        type="password" 
                        className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" 
                        placeholder=""/>
                    <label 
                        htmlFor="" 
                        className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmar Senha</label>
                    <AiOutlineUnlock className="absolute top-4 right-4"/>
                </div>
                <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-800 hover:bg-blue-600 hover:text-white py-2 transition-colors duration-300" type="submit">Registrar-se</button>
                <div>
                    <span className="m-4">Já tem cadastro? <Link className="text-blue-500" to="/Login">Acessar Login.</Link></span>
                </div>
            </form>
        </div>
    );
};

export default Registrar;