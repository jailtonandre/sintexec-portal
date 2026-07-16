"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [continued, setContinued] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Olá, gostaria de conversar sobre o SintExec.",
      "",
      `Nome: ${data.get("name")}`,
      `Empresa: ${data.get("company")}`,
      `E-mail: ${data.get("email")}`,
      "",
      `Sobre a operação: ${data.get("message")}`,
    ].filter(Boolean);

    setContinued(true);
    window.open(`https://wa.me/5584996631083?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-row"><label>Nome<input name="name" autoComplete="name" required /></label><label>Empresa<input name="company" autoComplete="organization" required /></label></div>
    <label>E-mail corporativo<input name="email" type="email" autoComplete="email" required /></label>
    <label>Mensagem<textarea name="message" rows={4} required placeholder="Conte brevemente sobre sua operação e o que gostaria de conhecer." /></label>
    <div className="form-submit"><p>Ao continuar, sua mensagem será aberta no WhatsApp para que você confirme o envio.</p><button type="submit">Continuar no WhatsApp <span aria-hidden="true">↗</span></button></div>
    <p className="form-status" aria-live="polite">{continued ? "A conversa foi preparada em uma nova aba. Confirme o envio pelo WhatsApp." : ""}</p>
  </form>;
}
