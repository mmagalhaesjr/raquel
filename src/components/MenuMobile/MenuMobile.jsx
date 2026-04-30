import { StyledMenuMobile } from "./styled";
import PropTypes from "prop-types";

export default function MenuMobile({ mobile, setMobile }) {

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobile('fechado');
        }
    };

    return (
        <StyledMenuMobile mobile={mobile}>
            <nav className="nav-lista">

                <button onClick={() => scrollTo("home")}>HOME</button>
                <button onClick={() => scrollTo("sobre")}>SOBRE</button>
                <button onClick={() => scrollTo("palestra")}>PALESTRAS</button>
                <button onClick={() => scrollTo("depoimento")}>DEPOIMENTOS</button>
                <button onClick={() => scrollTo("contato")}>CONTATO</button>

                <a href="/curso">ÁREA DO ALUNO</a>

            </nav>
        </StyledMenuMobile>
    );
}

MenuMobile.propTypes = {
    mobile: PropTypes.string.isRequired,
    setMobile: PropTypes.func.isRequired,
};