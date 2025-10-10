import BarraStatus from "../BarraStatus";
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
              responsabilidades incluíam a criação e gestão de conteúdos
              visuais, com o objetivo principal de atrair e engajar novos
              usuários. Atuei na organização visual completa da instituição e
              supervisionei o desenvolvimento de campanhas de comunicação. Essa
              experiência consolidou minhas habilidades em direção de arte e
              estratégia de conteúdo para resultados específicos.
            </div>
          </div>

          <div className="card1">
            <h1 className="cardsect1">Design Frelance</h1>
            <div className="cardsect2">2021 - Atual</div>
            <div className="cardsect3">
              Como um profissional multifacetado, a partir de 2021 passei a me
              dedicar intensamente aos estudos de programação, culminando no
              início do curso de Engenharia de Software em 2023. Nesse ínterim,
              realizei trabalhos freelancers de manutenção de sites para
              pequenas empresas. Paralelamente, comecei a ministrar aulas de
              informática e design gráfico, onde utilizei meus conhecimentos em
              programação para criar jogos educativos que auxiliavam o
              desenvolvimento cognitivo dos meus alunos.
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
              empresas. No mesmo período comecei a ministrar aulas de
              informática e design gráfico, onde utilizava os conhecimentos
              adquiridos em programação, para criar jogos educativos que
              auxiliavam cognitivamente os meus alunos.
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
                tamBarra={5}
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
                texto={"C"}
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
                tamBarra={70}
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
                texto={"CSS"}
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
                texto={"Montagem e Manut. Computadores"}
                corTexto={corTexto}
                corBarra={corBarra3}
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
            <h1 className="h1">Trabalho Voluntário</h1>

            <p>
              <strong>Pingo: Meu Primeiro Resgate (2007-2021)</strong>
              <br />O meu maior trabalho voluntário reside na dedicação
              incondicional aos animais. Essa paixão me levou a resgatar o
              Pingo, um amigo peludo que encontrei nas ruas e adotei, cuidando
              dele com amor e responsabilidade durante catorze anos, até o seu
              falecimento. Na verdade, essa foi uma relação de suporte mútuo:
              ele cuidou de mim tanto quanto eu dele. O Pingo foi a âncora que
              me ajudou a superar diversas barreiras emocionais e desafios
              pessoais, pois a alegria e o carinho incondicional dele eram a
              certeza que eu tinha ao chegar em casa. Ele foi um companheiro
              leal que guardarei para sempre em meu coração.
            </p>
            <p>
              <strong>CAARP - Consultoria Voluntária e Apoio (15 anos)</strong>
              <br />
              Atuei por aproximadamente quinze anos como colaborador ativo do
              CAARP - Centro de Apoio aos Animais de Rua e Particulares /
              Protetora Tânia. Minha contribuição abrangeu diversas frentes,
              incluindo o suporte financeiro contínuo e o voluntariado
              presencial em eventos e cuidados com os animais. Mais
              crucialmente, atuei como Consultor de Programação Visual e
              Design, desenvolvendo materiais gráficos essenciais para
              campanhas de arrecadação de fundos e para a organização visual da
              ONG, auxiliando na divulgação e na captação de recursos para o
              tratamento e abrigo dos animais resgatados.
            </p>
            <p>
              <strong>
                Madruga: Resgate e Acompanhamento a Distância (2020 - Atual)
              </strong>
              <br />
              Em 2020, durante um projeto no Espírito Santo, realizei o resgate
              do Madruga, que havia sido atropelado e sofrido uma contusão
              grave. Utilizando a força das redes sociais e a colaboração da
              comunidade local, consegui o auxílio necessário para custear os
              tratamentos iniciais e tirá-lo da situação de risco. Desde então,
              ele está em um hotelzinho para pets, onde recebe todo o conforto e
              acompanhamento veterinário necessários. Mensalmente, sou o
              principal responsável pelos custos integrais da ração e
              auxilio na organização das doações para a manutenção do hotel.
              Minha meta é trazê-lo para viver comigo assim que for possível,
              garantindo que ele tenha um lar permanente e amoroso como o Pingo
              teve.
            </p>
          </div>
        </div>
      </div>
    </MainStyled>
  );
}
