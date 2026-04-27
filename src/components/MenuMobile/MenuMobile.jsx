import { Link, useLocation } from "react-router-dom";
import { StyledMenuMobile } from "./styled";
import PropTypes from "prop-types";

export default function MenuMobile({ mobile, setMobile }) {
    const location = useLocation();

    function handleClick(path) {
        if (location.pathname === path) {
            // mesma página → fecha menu + scroll suave
            setMobile('fechado');

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            // página diferente → só fecha menu
            setMobile('fechado');
        }
    }

    return (
        <StyledMenuMobile mobile={mobile}>
            <nav className="nav-lista">
                <Link to="/" onClick={() => handleClick("/")}>HOME</Link>
                <Link to="/sobre" onClick={() => handleClick("/sobre")}>SOBRE</Link>
                <Link to="/palestras" onClick={() => handleClick("/palestras")}>PALESTRAS</Link>
                <Link to="/treinamento" onClick={() => handleClick("/treinamento")}>TREINAMENTOS</Link>
                <Link to="/contato" onClick={() => handleClick("/contato")}>CONTATO</Link>
                <Link to="/curso" onClick={() => handleClick("/curso")}>ÁREA DO ALUNO</Link>
            </nav>
        </StyledMenuMobile>
    );
}

MenuMobile.propTypes = {
    mobile: PropTypes.string.isRequired,
    setMobile: PropTypes.func.isRequired,
};