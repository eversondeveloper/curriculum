import { Link } from "react-router-dom";
import ImageAutor from "../../public/autor1.png";
import IconBtn from "./IconsBtn";
import { HeaderContainer, TopBar, HeroContent } from "./HeaderStyled";

/**
 * Header Profissional
 * Focado em autoridade e clareza de propósito.
 */
export default function Header() {
  return (
    <HeaderContainer>
      <TopBar>
        <div className="nav-links">
          {/* <Link to="/">Currículo</Link>
          <Link to="/contato">Contato</Link> */}
        </div>
        
        {/* Passando o tema via props para o seu componente de ícones */}
        <IconBtn tamCase={30} corBtn={1} />
      </TopBar>

      <HeroContent>
        <div className="text-content">
          <h1>
            Everson <span>Silva</span>
          </h1>
          <p>
            "A Engenharia de Software é onde a lógica encontra a criatividade."
          </p>
        </div>

        <div className="image-container">
          <img src={ImageAutor} alt="Everson Silva - Engenheiro de Software" />
        </div>
      </HeroContent>
    </HeaderContainer>
  );
}