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


                <Link to="/"><h1>Home</h1></Link>
                <Link to="/sobre"><h1>SOBRE</h1></Link>
                <Link to="/palestras"><h1>PALESTRAS</h1></Link>
                <Link to="/treinamento"><h1>TREINAMENTOS</h1></Link>
                <Link to="/contato"><h1>CONTATO</h1></Link>
                <Link to="/aluno"><h1>ÁREA DO ALUNO</h1></Link>


            </StyledHeader>
        </>

    )
}