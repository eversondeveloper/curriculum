import BarraStatus from "../BarraStatus";
import {
  MainContainer, SectionTitle, AboutSection,
  GridCards, ExperienceCard, SkillsLayout,
  ProjectsGrid, ProjectCard // Importando os novos estilos
} from "./MainStyled";

// Importe suas imagens aqui quando as tiver
import ImgClickPow from "../../../public/click1.png";
import ImgSevkids from "../../../public/sev1.png";
import ImgEversCash from "../../../public/pdv1.png";

export default function Main() {
  return (
    <MainContainer>
      <AboutSection>
        <SectionTitle>Quem sou?</SectionTitle>
        <div className="bio">
          <p>
            Com mais de 35 anos de contato com a tecnologia e uma base sólida em Design Gráfico,
            estou em transição para a <strong>Engenharia de Software</strong>. Minha trajetória é
            marcada pela fusão entre a estética visual e a lógica de sistemas.
          </p>
          <p>
            Atualmente, curso Engenharia de Software na Estácio, focando no desenvolvimento de
            soluções modernas com tecnologias como React, JavaScript e Node.js. Meu objetivo é
            construir software que não apenas funcione perfeitamente, mas que proporcione
            experiências excepcionais aos usuários.
          </p>
        </div>
      </AboutSection>

      <SectionTitle>Projetos em Destaque</SectionTitle>
      <ProjectsGrid>
        {/* PROJETO 1: EVERSCASH */}
        <ProjectCard>
          <div className="project-image">
            <img src={ImgEversCash} alt="EversCash PDV" />
          </div>
          <div className="project-info">
            <h3>EversCash</h3>
            <p>
              Sistema de Ponto de Venda (PDV) de alto desempenho projetado para otimizar a gestão comercial e o fluxo de caixa. Projeto foco no evento Startup Experience 2026.
            </p>
            <div className="tech-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>SQL</span>
              <span>Gestão de Negócios</span>
              <span>Análise de Dados</span>
            </div>
          </div>
        </ProjectCard>

        {/* PROJETO 2: SEVKIDS */}
        <ProjectCard>
          <div className="project-image">
            <img src={ImgSevkids} alt="SEV - Sistema de Votação" />
            <span>Espaço para Imagem SEV</span>
          </div>
          <div className="project-info">
            <h3>SEV - Sistema de Votação Eletrônica</h3>
            <p>
              Simulador eleitoral interativo para educação cívica de jovens.
              Possui módulos de cadastro de eleitores, validação de CPF em tempo real e apuração automatizada.
            </p>
            <div className="tech-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>Tembo Cloud</span>
            </div>
          </div>
        </ProjectCard>

        {/* PROJETO 3: CLICKPOW! */}
        <ProjectCard>
          <div className="project-image">
            <img src={ImgClickPow} alt="Jogo ClickPow!" />
          </div>
          <div className="project-info">
            <h3>ClickPow!</h3>
            <p>
              Jogo educacional gamificado para reabilitação do clique duplo no mouse. Utilizado como ferramenta pedagógica para mais de 200 alunos de informática básica.
            </p>
            <div className="tech-tags">
              <span>JavaScript</span>
              <span>React Vite</span>
              <span>Gamificação</span>
              <span>Pedagogia Digital</span>
            </div>
          </div>
        </ProjectCard>
      </ProjectsGrid>

      <SectionTitle>Trajetória Profissional</SectionTitle>
      <GridCards>
        <ExperienceCard>
          <h3>Design Sênior</h3>
          <span className="date">2008 - 2023</span>
          <p>Especialista em comunicação visual, branding e interfaces. Liderança em projetos complexos de design para mídias físicas e digitais.</p>
        </ExperienceCard>

        <ExperienceCard>
          <h3>Design Gráfico</h3>
          <span className="date">2011 - 2021</span>
          <p>Gestão completa de identidade visual e campanhas de engajamento para instituições de médio porte, focando em usabilidade e conversão.</p>
        </ExperienceCard>

        <ExperienceCard>
          <h3>Software Developer</h3>
          <span className="date">2022 - ATUAL</span>
          <p>Desenvolvimento de aplicações web, manutenção de sistemas e integração de jogos educativos como ferramenta cognitiva.</p>
        </ExperienceCard>
      </GridCards>

      <SkillsLayout>
        <div className="technical-skills">
          <SectionTitle>Habilidades Técnicas</SectionTitle>
          <BarraStatus label="React / React Native" level={85} />
          <BarraStatus label="JavaScript (ES6+)" level={80} />
          <BarraStatus label="HTML5 / CSS3" level={90} />
          <BarraStatus label="Node.js" level={35} />
          <BarraStatus label="PostgreSQL / SQL" level={50} />
          <BarraStatus label="Engenharia de Software" level={65} />
          <BarraStatus label="Design Gráfico (Adobe Suite)" level={85} />
        </div>

        <div className="volunteer-info">
          <SectionTitle>Impacto Social</SectionTitle>
          <p>
            Acredito que a Engenharia de Software atinge seu propósito máximo quando é utilizada como ferramenta de transformação social e serviço ao bem comum. Minha visão tecnológica é guiada pela ética e pela empatia, compreendendo que por trás de cada linha de código existem vidas e comunidades que podem ser impactadas positivamente. Ao longo da minha trajetória, busquei aplicar minhas competências técnicas e criativas para apoiar causas que protegem os mais vulneráveis, utilizando a tecnologia para amplificar vozes, otimizar recursos e transformar realidades concretas por meio da inovação consciente.
          </p>

          <h4>Apoio à Causa Animal (CAARP)</h4>
          <p>Consultoria voluntária em design e arrecadação de recursos durante 15 anos.</p>

          <h4>Resgate Animal Incondicional</h4>
          <p>Dedicação ao resgate e suporte de animais em situação de risco (Pingo e Madruga).</p>
        </div>
      </SkillsLayout>
    </MainContainer>
  );
}