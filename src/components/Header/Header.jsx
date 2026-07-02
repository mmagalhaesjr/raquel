import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { StyledHeader } from "./styled";
import MenuMobile from "../MenuMobile/MenuMobile";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [mobile, setMobile] = useState("fechado");

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function menuMobile() {
    if (mobile === "fechado") {
      setMobile("aberto");
    } else {
      setMobile("fechado");
    }
  }

  useEffect(() => {
    if (mobile === "aberto") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  return (
    <>
      <MenuMobile
        mobile={mobile}
        setMobile={setMobile}
      />

      <StyledHeader
        className={scrollY > 100 ? "rolagem" : ""}
        mobile={mobile}
      >
        <button onClick={menuMobile}>
          <span className="linha"></span>
          <span className="linha"></span>
          <span className="linha"></span>
        </button>

        <ul className="navList">
          <li>
            <HashLink smooth to="/#home">
              HOME
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#sobre">
              SOBRE
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#palestra">
              PALESTRAS
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#depoimento">
              DEPOIMENTOS
            </HashLink>
          </li>

          <li>
            <Link to="/cursocompleto">
              CURSOS
            </Link>
          </li>

          <li>
            <Link to="/galeria">
              GALERIA
            </Link>
          </li>

          <li>
            <HashLink smooth to="/#contato">
              CONTATO
            </HashLink>
          </li>

          <li>
            <Link to="/curso">
              ÁREA DO ALUNO
            </Link>
          </li>
        </ul>
      </StyledHeader>
    </>
  );
}