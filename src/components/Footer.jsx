import { anoAtual } from "./DataAtual";
import { FooterStyled } from "./FooterStyled";
import IconBtn from "./IconsBtn";


export default function Footer() {
  return (
    <FooterStyled>
      <div className="footerint">
      <div className="divautor">
        Everson Silva {anoAtual()}
      </div>
      <div className="divbtnfooter1">
        <div className="divbtnfooter2">
          <IconBtn />
        </div>
      </div>
      </div>
    </FooterStyled>
  );
}
