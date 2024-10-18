"use client";

import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineLock , AiOutlineUnlock , AiOutlineMail } from 'react-icons/ai'
import { useRef , useState , useEffect } from "react";
import { faCheck , faTimes , faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from './api/axios';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/Registrar'



const Registrar = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [usuario, setUsuario] = useState('');
    const [nomeValido, setNomeValido] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [senha, setSenha] = useState('');
    const [senhaValida, setSenhaValida] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [confirmaValida, setConfirmaValida] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState(false);
    const [sucesso, setSucesso] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        const result = USER_REGEX.test(usuario);
        console.log(result);
        console.log(usuario);
        setNomeValido(result);
    },[usuario])

    useEffect(() => {
        const result = PWD_REGEX.test(senha);
        console.log(result);
        console.log(senha);
        setNomeValido(result);
        const comparar = senha === confirmaSenha;
        setConfirmaValida(comparar);
    },[senha, confirmaSenha])

    useEffect(() => {
        setErrMsg('');
    },[usuario, senha, confirmaSenha])

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Caso botão seja abilitado no console
        const v1 = USER_REGEX.test(usuario);
        const v2 = PWD_REGEX.test(senha);
        if (!v1 || !v2) {
            setErrMsg("Acesso Invalido!");
            return;
        }
        try{
            const response = await axios.post(REGISTER_URL, JSON.stringify({ usuario, senha }), 
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response));
            setSucesso(true);
            //Limpa os inputs do campo
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Sem resposta do Servidor');
            } else if (err.response?.status === 409){
                setErrMsg('Nome de Usuario Indisponível');
            } else {
                setErrMsg('Falha ao Registrar-se');
            }
            errRef.current.focus();
        }
    }

    return (   
        <>
        {sucesso ? (
            <section>
                <h1>Sucesso!</h1>
                <p>
                    <Link className="text-blue-500" to="/Login">Acessar Login.</Link>
                </p>
            </section>
        ) : (

            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                <h1 className="text-4x1 text-white font-bold text-center mb-6">Registrar-se</h1>
                <form onSubmit={handleSubmit} action="">
                    <div className='relative my-4'>
                        <input 
                            type="text" 
                            id="username" 
                            ref={userRef} 
                            autoComplete="off" 
                            onChange={(e) => setUsuario(e.target.value)}
                            required 
                            aria-invalid={nomeValido ? "false" : "true"} 
                            aria-describedby="uidnote" 
                            onFocus={() => setUserFocus(true)} 
                            onBlur={setUserFocus(false)} 
                            className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" 
                            placeholder=""/>
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Nome:
                            <span className={nomeValido ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </span>
                            <span className={nomeValido || !usuario ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </span>
                        </label>
                        <BiUser className="absolute top-4 right-4"/>
                        <p>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            De 4 a 24 caractéres. <br />
                            Deve começar com uma letra. <br />
                            Letras, números, hifens e underline permitidos.
                        </p>

                    </div>
                    <div className='relative my-4'>
                        <input type="email" className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        <AiOutlineMail className="absolute top-4 right-4"/>
                    </div>
                    <div className='relative my-4'>
                        <input 
                            type="password" 
                            id="password"
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            aria-invalid={senhaValida ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Senha:
                            <span className={senhaValida ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </span>
                            <span className={senhaValida || !senha ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </span>
                        </label>
                        <AiOutlineLock className="absolute top-4 right-4"/>
                        <p id="pwdnote" className={pwdFocus && !senhaValida ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            De 8 a 24 caractéres. <br />
                            Deve incluir letras maiúsculas e minpusculas, números e caractéres especiais. <br />
                            Caractétes permitidos: <span aria-label="Ponto de Exclamação">!</span><span aria-label="Arroba">@</span><span aria-label="hashtag">#</span><span aria-label="dollar">$</span><span aria-label="porcentagem">%</span>
                        </p>
                    </div>
                    <div className='relative my-4'>
                        <input 
                            type="password" 
                            id="confirm_pwd"
                            onChange={(e) => setConfirmaSenha(e.target.value)}
                            required
                            aria-invalid={confirmaValida ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" 
                            placeholder=""/>
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Confirmar Senha
                            <span className={confirmaValida && confirmaSenha ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </span>
                            <span className={confirmaValida || !confirmaSenha ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </span>
                        </label>
                        <AiOutlineUnlock className="absolute top-4 right-4"/>
                        <p id="confirmnote" className={matchFocus && !confirmaValida ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            As senhas devem ser iguais.
                        </p>
                    </div>
                    <button disabled={!nomeValido || !senhaValida || confirmaValida ? true : false} className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-800 hover:bg-blue-600 hover:text-white py-2 transition-colors duration-300" type="submit">Registrar-se</button>
                    <div>
                        <span className="m-4">Já tem cadastro? <Link className="text-blue-500" to="/Login">Acessar Login.</Link></span>
                    </div>
                </form>
            </div>
        )}
        </>
    );
};

export default Registrar;