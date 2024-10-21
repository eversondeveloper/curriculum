import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ContatoStyled } from "./ContatoStyled";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    preferenciaContato: [],
  });

  useEffect(() => {
    window.document.title = "Contato";
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      preferenciaContato: checked
        ? [...prevData.preferenciaContato, value]
        : prevData.preferenciaContato.filter((item) => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envio de e-mail via EmailJS
    emailjs
      .send(
        "service_hj7e2ir", // Seu Service ID
        "YOUR_TEMPLATE_ID", // Substitua pelo seu Template ID
        {
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone || "Não informado",
          assunto: formData.assunto,
          mensagem: formData.mensagem,
          preferenciaContato:
            formData.preferenciaContato.join(", ") || "Não informado",
        },
        "YOUR_PUBLIC_KEY" // Substitua pelo seu Public Key
      )
      .then(
        (result) => {
          alert("Formulário enviado com sucesso!");
          setFormData({
            nome: "",
            email: "",
            telefone: "",
            assunto: "",
            mensagem: "",
            preferenciaContato: [],
          }); // Limpa o formulário após o envio
        },
        (error) => {
          alert("Erro ao enviar o formulário. Tente novamente.");
        }
      );
  };

  return (
    <ContatoStyled>
      <div className="container">
        <h1>Entre em Contato</h1>
        <p>
          Para serviços profissionais ou dúvidas, preencha o formulário abaixo.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome Completo *</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="telefone">Telefone (opcional)</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
          />

          <label htmlFor="assunto">Assunto *</label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            value={formData.assunto}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="mensagem">Mensagem *</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="5"
            value={formData.mensagem}
            onChange={handleInputChange}
            required
          />

          <div className="checkbox-group">
            <label>Meios de contato preferidos (opcional)</label>
            <div className="checkboxes">
              <label>
                <input
                  type="checkbox"
                  value="E-mail"
                  checked={formData.preferenciaContato.includes("E-mail")}
                  onChange={handleCheckboxChange}
                />
                E-mail
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Telefone"
                  checked={formData.preferenciaContato.includes("Telefone")}
                  onChange={handleCheckboxChange}
                />
                Telefone
              </label>
              <label>
                <input
                  type="checkbox"
                  value="WhatsApp"
                  checked={formData.preferenciaContato.includes("WhatsApp")}
                  onChange={handleCheckboxChange}
                />
                WhatsApp
              </label>
            </div>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </ContatoStyled>
  );
}
