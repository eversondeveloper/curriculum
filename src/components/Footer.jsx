import { Link } from "react-router-dom";
import IconBtn from "./IconsBtn";
import { FooterContainer } from "./FooterStyled";

/**
 * Footer Estruturado
 * Fornece navegação secundária e reforça a identidade profissional.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="footer-content">
        <div className="brand-section">
          <h3>Everson Silva</h3>
          <p>
            Engenheiro de Software em formação pela Estácio, focado em criar 
            soluções escaláveis e interfaces intuitivas.
          </p>
        </div>

        <div className="nav-section">
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/">Currículo</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        <div className="nav-section">
          <h4>Social</h4>
          {/* Aqui usamos o IconBtn com light={false} para contrastar com o fundo claro */}
          <IconBtn light={false} />
        </div>
      </div>

      <div className="bottom-bar">
        <p>&copy; Desenvolvido por Everson Silva. Todos os direitos reservados.</p>
        <p>{currentYear}</p>
      </div>
    </FooterContainer>
  );
}