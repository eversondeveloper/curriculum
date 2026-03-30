import styled from "styled-components";
import { iconPaths } from "./SocialIconsData";

const NavSocial = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  transition: ${props => props.theme.transition};

  svg {
    width: 20px;
    height: 20px;
    fill: ${props => props.light ? props.theme.colors.secondary : props.theme.colors.primary};
  }

  &:hover {
    background-color: ${props => props.theme.colors.info};
    transform: translateY(-3px);
    svg { fill: #fff; }
  }
`;

export default function IconBtn({ light = true }) {
  const socialLinks = [
    { name: "email", url: "mailto:eversonsilvadeveloper@gmail.com" },
    { name: "github", url: "https://github.com/eversondeveloper" },
    { name: "linkedin", url: "https://www.linkedin.com/in/everson-silva-53308327/" },
    { name: "youtube", url: "https://www.youtube.com/channel/UC2G6ZZilUH2UUCkox8KUuGw" }
  ];

  return (
    <NavSocial>
      {socialLinks.map((link) => {
        // Lógica de Engenharia: Identifica se é um link externo ou um protocolo de sistema
        const isExternal = link.url.startsWith("http");

        return (
          <IconLink 
            key={link.name}
            href={link.url}
            // Só abre nova aba se for um site (http). Se for mailto, deixa o navegador gerir.
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            light={light}
            title={link.name}
          >
            <svg viewBox="0 0 24 24">
              <path d={iconPaths[link.name]} />
            </svg>
          </IconLink>
        );
      })}
    </NavSocial>
  );
}