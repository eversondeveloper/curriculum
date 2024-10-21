import { useState, useEffect } from "react";
import ImageAutor from "/autor.png";
import IconBtn from "./IconsBtn";
import { HeaderStyled } from "./HeaderStyled";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderStyled isMenuOpen={isMenuOpen}>
      <div className="divmenu">
        <div className="menu">
          {/* <a href={"/"} className="linkmenu">
            Home
          </a> */}
          {/* <a href={"/contato"} className="linkmenu">
            Contato
          </a> */}
        </div>
        <div className="divredessociais">
          <IconBtn tamCase={100} corBtn={1} />
        </div>
      </div>

      <div className="mobile-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <a href={"/"} className="mobile-link" onClick={toggleMenu}>
          Home
        </a>
      </div>

      <div className="logoimage">
        <div className="divlogo">
          <a href={"/"}>
            Everson
            <br />
            Silva
          </a>
          <p>
            A Engenharia de Software é onde a lógica encontra a criatividade.
          </p>
        </div>
        <div className="divimage">
          <img src={ImageAutor} alt="Foto do Autor" className="fotoimagem" />
        </div>
      </div>
    </HeaderStyled>
  );
}
