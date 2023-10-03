import React from 'react'
import './navbar.css'
import Mokonas from '../../../img/4_Tsubasa_Mokonas_ying_yang_editado_800x.png'
export default function Navbar() {
    return (
        <>

            <div className="navbar">
                <div>
                    <img src={Mokonas} alt="Mokonas" className='mokonas'/>
                </div>
                <div>
                    <ul className='itens'>
                        <li>Início</li>
                        <li>Login</li>
                        <li>Cadastro</li>
                    </ul>
                </div>

            </div>

        </>
    )
} 