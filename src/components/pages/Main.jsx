import BarraStatus from "../BarraStatus";
import { 
  MainContainer, SectionTitle, AboutSection, 
  GridCards, ExperienceCard, SkillsLayout 
} from "./MainStyled";

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

      <SectionTitle>Trajetória Profissional</SectionTitle>
      <GridCards>
        <ExperienceCard>
          <h3>Design Sênior</h3>
          <span className="date">2008 - 2023</span>
          <p>Especialista em comunicação visual, branding e interfaces. Liderança em projetos complexos de design para mídias físicas e digitais.</p>
        </ExperienceCard>

        <ExperienceCard>
          <h3>Design Freelance</h3>
          <span className="date">2011 - 2021</span>
          <p>Gestão completa de identidade visual e campanhas de engajamento para instituições de médio porte, focando em usabilidade e conversão.</p>
        </ExperienceCard>

        <ExperienceCard>
          <h3>Software Developer (Freelance)</h3>
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
          <BarraStatus label="TypeScript" level={30} />
          <BarraStatus label="Engenharia de Software" level={65} />
          <BarraStatus label="Design Gráfico (Adobe Suite)" level={85} />
        </div>

        <div className="volunteer-info">
          <SectionTitle>Impacto Social</SectionTitle>
          <p>Como engenheiro, acredito que a tecnologia deve servir ao bem comum.</p>
          
          <h4>Apoio à Causa Animal (CAARP)</h4>
          <p>Consultoria voluntária em design e arrecadação de recursos durante 15 anos.</p>
          
          <h4>Resgate Animal Incondicional</h4>
          <p>Dedicação ao resgate e suporte de animais em situação de risco (Pingo e Madruga).</p>
        </div>
      </SkillsLayout>
    </MainContainer>
  );
}