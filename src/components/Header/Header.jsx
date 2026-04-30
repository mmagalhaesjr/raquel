import { Link } from "react-router-dom";
import { StyledHeader } from "./styled";
import MenuMobile from "../MenuMobile/MenuMobile";
import { useState, useEffect } from "react";

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [mobile, setMobile] = useState('fechado');

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function menuMobile() {
        if (mobile == 'fechado') {
            setMobile('aberto')
        } else if (mobile == 'aberto') {
            setMobile('fechado')
        }
    }

    useEffect(() => {
        if (mobile === 'aberto') {
            document.body.style.overflow = 'hidden'; // Bloqueia a rolagem
        } else {
            document.body.style.overflow = ''; // Restaura o padrão
        }

        return () => {
            document.body.style.overflow = ''; // Garante o reset ao desmontar
        };
    }, [mobile]);

    return (

        <>

            <MenuMobile
                mobile={mobile}
                setMobile={setMobile}
            />

            <StyledHeader className={scrollY > 100 ? 'rolagem' : ''} mobile={mobile}>

                <button onClick={menuMobile}>
                    <span className='linha'></span>
                    <span className='linha'></span>
                    <span className='linha'></span>
                </button>

                <ul className="navList">

                    <li>
                        <a href="#home">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#sobre">
                            SOBRE
                        </a>
                    </li>
                    <li>
                        <a href="#palestra">
                            PALESTRAS
                        </a>
                    </li>
                    <li>
                        <a href="#depoimento">
                            DEPOIMENTOS
                        </a>
                    </li>
                    <li>
                        <a href="#contato">
                            CONTATO
                        </a>
                    </li>
                    <li>
                        <a href="/curso">
                            ÁREA DO ALUNO
                        </a>
                    </li>

                </ul>




            </StyledHeader>
        </>

    )
}