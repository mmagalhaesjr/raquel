import { StyledMenuMobile } from "./styled";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function MenuMobile({ mobile, setMobile }) {
  function fecharMenu() {
    setMobile("fechado");
  }

  return (
    <StyledMenuMobile mobile={mobile}>
      <nav className="nav-lista">

        <HashLink smooth to="/#home" onClick={fecharMenu}>
          HOME
        </HashLink>

        <HashLink smooth to="/#sobre" onClick={fecharMenu}>
          SOBRE
        </HashLink>

        <HashLink smooth to="/#palestra" onClick={fecharMenu}>
          PALESTRAS
        </HashLink>

        <HashLink smooth to="/#depoimento" onClick={fecharMenu}>
          DEPOIMENTOS
        </HashLink>

        <HashLink smooth to="/#contato" onClick={fecharMenu}>
          CONTATO
        </HashLink>

        <Link to="/galeria" onClick={fecharMenu}>
          GALERIA
        </Link>

        <Link to="/curso" onClick={fecharMenu}>
          ÁREA DO ALUNO
        </Link>

      </nav>
    </StyledMenuMobile>
  );
}

MenuMobile.propTypes = {
  mobile: PropTypes.string.isRequired,
  setMobile: PropTypes.func.isRequired,
};