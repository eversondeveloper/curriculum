import BarraStatus from "../BarraStatus";
import {
  MainContainer, SectionTitle, AboutSection,
  GridCards, ExperienceCard, SkillsLayout,
  ProjectsGrid, ProjectCard,
  CertificacoesGrid, CertificadoCard
} from "./MainStyled";

// Importações das imagens
import ImgClickPow from "../../../public/click1.png";
import ImgSevkids from "../../../public/sev1.png";
import ImgEversCash from "../../../public/pdv1.png";

export default function Main() {
  return (
    <MainContainer>
      {/* SEÇÃO: QUEM SOU */}
      <AboutSection>
        <SectionTitle>Quem sou?</SectionTitle>
        <div className="bio">
          <p>
            Com mais de 35 anos de imersão tecnológica, minha trajetória é uma fusão entre a precisão técnica e a criatividade visual. 
            Minha base sólida em <strong>Design Gráfico</strong> me concedeu um olhar apurado para usabilidade, o que hoje me permite projetar interfaces de software que equilibram estética e funcionalidade de forma intuitiva.
          </p>
          <p>
            Acumulo vasta experiência em <strong>modelagem 3D, edição e maquetes eletrônicas</strong>, tendo atuado inclusive como instrutor para arquitetos e engenheiros nestas áreas. 
            Essa vivência, somada ao domínio de <strong>impressão 3D</strong>, desenvolveu em mim uma visão espacial e estrutural rigorosa, essencial para a arquitetura de sistemas complexos.
          </p>
          <p>
            Como educador, fui professor de informática para iniciantes, onde desenvolvi diversos <strong>projetos digitais próprios</strong> para facilitar o ensino da teoria e prática da informática. 
            Essa veia pedagógica me transformou em um desenvolvedor focado na clareza do código e na experiência final do usuário.
          </p>
          <p>
            Atualmente, curso <strong>Engenharia de Software na Estácio</strong>, focando em tecnologias como React, JavaScript e Node.js. 
            Meu objetivo é construir soluções modernas que não apenas funcionem com excelência técnica, mas que tragam o refinamento de décadas de experiência em design e visualização técnica.
          </p>
        </div>
      </AboutSection>

      {/* SEÇÃO: PROJETOS EM DESTAQUE */}
      <SectionTitle>Projetos em Destaque</SectionTitle>
      <ProjectsGrid>
        {/* PROJETO: EVERSCASH */}
        <ProjectCard>
          <div className="project-image">
            <img src={ImgEversCash} alt="EversCash PDV" />
          </div>
          <div className="project-info">
            <h3>EversCash</h3>
            <p>
              Sistema de Ponto de Venda (PDV) de alto desempenho projetado para otimizar a gestão comercial e o fluxo de caixa. 
              Projeto foco no evento Startup Experience 2026.
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

        {/* PROJETO: SEVKIDS */}
        <ProjectCard>
          <div className="project-image">
            <img src={ImgSevkids} alt="SEV - Sistema de Votação" />
          </div>
          <div className="project-info">
            <h3>SEV - Sistema de Votação Eletrônica</h3>
            <p>
              Simulador eleitoral interativo para educação cívica de jovens. 
              Possui módulos de cadastro, validação de CPF e apuração automatizada com banco de dados PostgreSQL.
            </p>
            <div className="tech-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>Tembo Cloud</span>
              <span>UML</span>
            </div>
          </div>
        </ProjectCard>

        {/* PROJETO: CLICKPOW! */}
        <ProjectCard>
          <div className="project-image">
            <img src={ImgClickPow} alt="Jogo ClickPow!" />
          </div>
          <div className="project-info">
            <h3>ClickPow!</h3>
            <p>
              Jogo educacional gamificado para reabilitação do clique duplo no mouse. 
              Utilizado como ferramenta pedagógica para mais de 200 alunos de informática básica.
            </p>
            <div className="tech-tags">
              <span>JavaScript</span>
              <span>React Vite</span>
              <span>Gamificação</span>
              <span>Design de Interface</span>
            </div>
          </div>
        </ProjectCard>
      </ProjectsGrid>

      {/* SEÇÃO: MICROCERTIFICAÇÕES ACADÊMICAS (ESTÁCIO) */}
      <SectionTitle>Microcertificações Acadêmicas</SectionTitle>
      <CertificacoesGrid>
        <CertificadoCard>
          <div className="card-header">
            <span className="icon-badge">🎓</span>
            <span className="carga-horaria">280 HORAS</span>
          </div>
          <h4>Programação para Internet</h4>
          <div className="skills-cert">
            <span>HTML5 / CSS3</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>Python</span>
          </div>
        </CertificadoCard>

        <CertificadoCard>
          <div className="card-header">
            <span className="icon-badge">🎓</span>
            <span className="carga-horaria">240 HORAS</span>
          </div>
          <h4>Sistemas de Informação</h4>
          <div className="skills-cert">
            <span>Java (POO)</span>
            <span>UML</span>
            <span>Desenvolvimento Seguro</span>
          </div>
        </CertificadoCard>

        <CertificadoCard>
          <div className="card-header">
            <span className="icon-badge">🎓</span>
            <span className="carga-horaria">240 HORAS</span>
          </div>
          <h4>Melhoria Contínua</h4>
          <div className="skills-cert">
            <span>Métodos Ágeis (Scrum)</span>
            <span>Modelagem de Processos</span>
            <span>UML</span>
          </div>
        </CertificadoCard>

        <CertificadoCard>
          <div className="card-header">
            <span className="icon-badge">🎓</span>
            <span className="carga-horaria">240 HORAS</span>
          </div>
          <h4>Privacidade e Direitos</h4>
          <div className="skills-cert">
            <span>Segurança da Informação</span>
            <span>LGPD</span>
            <span>Sistemas e Sociedade</span>
          </div>
        </CertificadoCard>

        <CertificadoCard>
          <div className="card-header">
            <span className="icon-badge">🎓</span>
            <span className="carga-horaria">80 HORAS</span>
          </div>
          <h4>Soluções para a Comunidade</h4>
          <div className="skills-cert">
            <span>Métodos Ágeis</span>
            <span>Scrum</span>
            <span>Análise de Problemas</span>
          </div>
        </CertificadoCard>
      </CertificacoesGrid>

      {/* SEÇÃO: TRAJETÓRIA PROFISSIONAL */}
      <SectionTitle>Trajetória Profissional</SectionTitle>
      <GridCards>
        <ExperienceCard>
          <h3>Design Sênior</h3>
          <span className="date">2008 - 2023</span>
          <p>Especialista em comunicação visual, branding e interfaces. Liderança em projetos complexos de design para mídias físicas e digitais.</p>
        </ExperienceCard>

        <ExperienceCard>
          <h3>Design Gráfico / Instrutor 3D</h3>
          <span className="date">2011 - 2021</span>
          <p>Gestão de identidade visual e docência em maquetes eletrônicas para profissionais de Engenharia e Arquitetura.</p>
        </ExperienceCard>

        <ExperienceCard>
          <h3>Software Developer</h3>
          <span className="date">2022 - ATUAL</span>
          <p>Desenvolvimento de aplicações web e integração de projetos educacionais gamificados como ferramenta de ensino.</p>
        </ExperienceCard>
      </GridCards>

      {/* SEÇÃO: HABILIDADES E IMPACTO SOCIAL */}
      <SkillsLayout>
        <div className="technical-skills">
          <SectionTitle>Habilidades Técnicas</SectionTitle>
          <BarraStatus label="React / React Native" level={85} />
          <BarraStatus label="JavaScript (ES6+)" level={80} />
          <BarraStatus label="HTML5 / CSS3" level={90} />
          <BarraStatus label="Node.js" level={35} />
          <BarraStatus label="PostgreSQL / SQL" level={50} />
          <BarraStatus label="Engenharia de Software" level={65} />
          <BarraStatus label="Design / Modelagem 3D" level={85} />
        </div>

        <div className="volunteer-info">
          <SectionTitle>Impacto Social</SectionTitle>
          <p>
            Acredito que a Engenharia de Software atinge seu propósito máximo quando é utilizada como ferramenta de transformação social e serviço ao bem comum. Minha visão tecnológica é guiada pela ética e pela empatia.
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