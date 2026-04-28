import { Link, useNavigate } from "react-router-dom";
import { StyledMenuMobile } from "./styled";
import PropTypes from "prop-types";

export default function MenuMobile({ mobile, setMobile }) {
   
  const navegar = useNavigate();

    const navegue = (path) => {
        navegar(path);
        setMobile('fechado')
    
    };

    return (
        <StyledMenuMobile mobile={mobile}>
            <nav className="nav-lista">
                <Link to="/" onClick={() => navegue("/")}>HOME</Link>
                <Link to="/sobre" onClick={() => navegue("/sobre")}>SOBRE</Link>
                <Link to="/palestras" onClick={() => navegue("/palestras")}>PALESTRAS</Link>
                <Link to="/treinamento" onClick={() => navegue("/treinamento")}>TREINAMENTOS</Link>
                <Link to="/contato" onClick={() => navegue("/contato")}>CONTATO</Link>
                <Link to="/curso" onClick={() => navegue("/curso")}>ÁREA DO ALUNO</Link>
            </nav>
        </StyledMenuMobile>
    );
}

MenuMobile.propTypes = {
    mobile: PropTypes.string.isRequired,
    setMobile: PropTypes.func.isRequired,
};