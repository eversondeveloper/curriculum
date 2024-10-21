import ImageAutor from "../../public/autor.png";
import IconBtn from "./IconsBtn";
import { HeaderStyled } from "./HeaderStyled";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="divmenu">
        {/* <div className="menu">
          <a href={"/"} className="linkmenu">
            Home
          </a>
        </div> */}
        <div className="divredessociais">
          <IconBtn tamCase={100} corBtn={1} />
        </div>
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