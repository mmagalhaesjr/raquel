import { Link } from "react-router-dom";
import { StyledMenuMobile } from "./styled";
import PropTypes from "prop-types";




export default function MenuMobile({ mobile }) {

  
  
    return (
        <StyledMenuMobile mobile={mobile}>
            <nav className="nav-lista">
                  <Link to={"/"}>HOME</Link>
                <Link to={"/sobre"}>SOBRE</Link>
                <Link to={"/palestras"}>PALESTRAS</Link>
                <Link to={"/treinamento"}>TREINAMENTOS</Link>
                <Link to={"/contato"}>CONTATO</Link>
                  <Link to={"/curso"}>ÁREA DO ALUNO</Link>
            </nav>
        </StyledMenuMobile>
    );
}

MenuMobile.propTypes = {
    mobile: PropTypes.string.isRequired, // 'mobile' deve ser uma string obrigatória
};
