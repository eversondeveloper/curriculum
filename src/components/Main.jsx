// import IconBtn from "./IconsBtn";
import BarraStatus from "./BarraStatus";
import { MainStyled } from "./MainStyled";

export default function Main() {
  const corBackGeral = "#e2e2e2";
  const corBarra1 = "#232323";
  const corBarra2 = "#232323";
  const corBarra3 = "#232323";
  const corBarra4 = "#232323";
  const corBarra5 = "#232323";
  const corBarra6 = "#232323";
  const corTexto = "#e2e2e2";

  return (
    <MainStyled>
      
      <section className="quemsou">
        <div className="divquemsou">
          <div className="quemsouperg">Quem sou?</div>
          <div className="quemsoutexto">
            <p>
              Nasci no interior do Rio de Janeiro, em uma cidade chamada
              Resende. Me mudei para a cidade do Rio aos sete anos de idade. Aos
              dez, tive meu primeiro contato com um computador, e foi amor à
              primeira vista. Desde então, já se passaram trinta e cinco anos,
              em frente a essa máquina magnífica.
            </p>
            <br />
            <p>
              Após muitos anos dedicados ao design gráfico, meu objetivo atual é
              fazer uma transição de carreira para a engenharia de software e o
              desenvolvimento de aplicações. Estou focado em adquirir as
              habilidades necessárias para construir um futuro promissor nessa
              área, buscando constantemente novos conhecimentos e experiências.
              Pretendo aplicar minha criatividade e conhecimentos técnicos para
              criar soluções inovadoras e impactar positivamente o setor de
              tecnologia.
            </p>
          </div>
        </div>
      </section>
      <section className="cards">
        <div className="divcards">
          <div className="card1">
            <h1 className="cardsect1">Design Sênior</h1>
            <div className="cardsect2">2011 - 2021</div>
            <div className="cardsect3">
              Durante esse período, fiquei encarregado de toda a mídia, seja
              digital ou impressa, de uma instituição de médio porte. Minhas
              responsabilidades incluíam a criação e gerenciamento de conteúdos
              visuais que visavem atrair usuários e a organização visual da
              instituição.
            </div>
          </div>

          <div className="card1">
            <h1 className="cardsect1">Design Frelance</h1>
            <div className="cardsect2">2021 - Atual</div>
            <div className="cardsect3">
              Com ampla experiência em diversas áreas do design gráfico.
              Semprerealizando trabalhos freelancers, como criação de logotipos,
              edição de vídeos, adesivos de parede, banners, panfletos, cartões
              de visita, jornais, revistas artes para camisas, para sites e
              redes sociais, entre outros.
            </div>
          </div>

          <div className="card1">
            <h1 className="cardsect1">Serviços de Dev</h1>
            <div className="cardsect2">2022 - Atual</div>
            <div className="cardsect3">
              Como um profissional multifacetado, em 2021 passei a me dedicar
              intensamente aos estudos de programação e, em 2023, comecei a
              cursar Engenharia de Software. Nesse intervalo, realizei alguns
              trabalhos freelancers de manutenção de sites para pequenas
              empresas.
            </div>
          </div>
        </div>
      </section>
      <div className="divprincipal">
        <div className="divprincipalint">
          <div className="divhabilidades">
            <h1 className="h1">Habilidades</h1>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"Inglês (Leitura)"}
                corTexto={corTexto}
                corBarra={corBarra6}
                tamBarra={60}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"Liderança"}
                corTexto={corTexto}
                corBarra={corBarra5}
                tamBarra={90}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"Resolução de Problemas"}
                corTexto={corTexto}
                corBarra={corBarra5}
                tamBarra={100}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"Trabalho em Equipe"}
                corTexto={corTexto}
                corBarra={corBarra5}
                tamBarra={100}
                baseCalc={100}
              />
            </div>

            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"Eng. de Soft. (Cursando)"}
                corTexto={corTexto}
                corBarra={corBarra1}
                tamBarra={4}
                baseCalc={8}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"JavaScript"}
                corTexto={corTexto}
                corBarra={corBarra1}
                tamBarra={80}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"TypeScript"}
                corTexto={corTexto}
                corBarra={corBarra1}
                tamBarra={50}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"NodeJS"}
                corTexto={corTexto}
                corBarra={corBarra1}
                tamBarra={35}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"C (Cursando)"}
                corTexto={corTexto}
                corBarra={corBarra1}
                tamBarra={30}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"Java (Cursando)"}
                corTexto={corTexto}
                corBarra={corBarra1}
                tamBarra={30}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"Python"}
                corTexto={corTexto}
                corBarra={corBarra1}
                tamBarra={50}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"React"}
                corTexto={corTexto}
                corBarra={corBarra1}
                tamBarra={85}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"React Native"}
                corTexto={corTexto}
                corBarra={corBarra1}
                tamBarra={76}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"HTML"}
                corTexto={corTexto}
                corBarra={corBarra1}
                tamBarra={95}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"CSS"}
                corTexto={corTexto}
                corBarra={corBarra1}
                tamBarra={90}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"Montagem e Manut. Computadores"}
                corTexto={corTexto}
                corBarra={corBarra3}
                tamBarra={99}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"Fotografia"}
                corTexto={corTexto}
                corBarra={corBarra3}
                tamBarra={80}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"Design Gráfico"}
                corTexto={corTexto}
                corBarra={corBarra2}
                tamBarra={85}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"Pacote Adobe"}
                corTexto={corTexto}
                corBarra={corBarra2}
                tamBarra={65}
                baseCalc={100}
              />
            </div>
            <div className="divstatus">
              <BarraStatus
                tamTexto={15}
                tamQuadro={100}
                largQuadro={10}
                corBack={corBackGeral}
                texto={"Pacote Office"}
                corTexto={corTexto}
                corBarra={corBarra4}
                tamBarra={80}
                baseCalc={100}
              />
            </div>
          </div>
          <div className="divaside">
            <h1 className="h1">Tr. Voluntários</h1>

            <p>
              <strong>Pai de Pet</strong>
              <br />O que considero o meu maior trabalho voluntário é o amor
              pelos animais. Esse amor me levou a resgatar um amigo peludo das
              ruas e cuidar dele até o fim. Na verdade, eu não sei se eu cuidava
              dele ou se ele cuidava de mim, pois muitas barreiras emocionais
              que superei na vida foram porque eu sabia que, quando chegasse em
              casa, ele estaria me esperando com aquela alegria incondicional. O
              Pingo viveu comigo e foi um amigo que guardarei para sempre em meu
              coração.
            </p>
            <p>
              <strong>CAARP</strong>
              <br />
              Atuei, por aproximadamente quinze anos, como colaborador
              financieiro, voluntário presencial e consultor de programação
              visual do CAARP - Centro de Apoio aos Animais de Rua e
              Particulares / Protetora Tânia.
            </p>
            <p>
              <strong>Madruga</strong>
              <br />
              Em 2020, durante um projeto no Espírito Santo, conheci outro amigo
              peludo, a quem dei o nome de Madruga. Ele foi atropelado e sofreu
              uma contusão, mas com a ajuda das redes sociais, consegui
              retirá-lo das ruas e cuidar de seus ferimentos. Desde então, ele
              está em um hotelzinho para pets, recebendo todo o conforto e
              auxílio necessários. Todos os meses, voluntários pagam o
              hotelzinho e eu cubro os custos da ração do Madruga. Como me casei
              e moro em um apartamento, ainda não pude trazer o Madruga para
              viver comigo, mas assim que for possível, ele será meu próximo
              companheiro.
            </p>
          </div>
        </div>
      </div>
    </MainStyled>
  );
}
