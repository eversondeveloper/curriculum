import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ContactContainer, ContactCard, StyledForm } from "./ContatoStyled";

/**
 * Página de Contato Profissional
 * Implementa validação básica e integração com EmailJS.
 */
export default function Contato() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  useEffect(() => {
    window.document.title = "Contato | Everson Silva";
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // DICA: Substitua pelas suas chaves reais do EmailJS
    emailjs.send(
      "service_hj7e2ir", 
      "YOUR_TEMPLATE_ID", 
      formData,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      alert("Mensagem enviada com sucesso! Em breve entrarei em contato.");
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    })
    .catch((err) => {
      alert("Ocorreu um erro ao enviar. Por favor, tente novamente ou use o LinkedIn.");
      console.error("EmailJS Error:", err);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <ContactContainer>
      <ContactCard>
        <h1>Vamos conversar?</h1>
        <p>Tem um projeto em mente ou deseja discutir uma oportunidade? Preencha o formulário abaixo.</p>
        
        <StyledForm onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="nome">Seu Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Ex: João Silva"
              value={formData.nome}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Seu E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@exemplo.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="assunto">Assunto</label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              placeholder="Ex: Proposta de Projeto"
              value={formData.assunto}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Descreva brevemente sua necessidade..."
              value={formData.mensagem}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </StyledForm>
      </ContactCard>
    </ContactContainer>
  );
}