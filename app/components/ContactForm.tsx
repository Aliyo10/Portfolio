"use client";

import { useRef, useState, type FocusEvent, type FormEvent } from "react";

type ContactFormProps = {
  endpoint: string;
};

type FieldName = "name" | "email" | "message";
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(name: FieldName, value: string): string | undefined {
  const trimmed = value.trim();
  if (name === "name" && trimmed.length < 2) {
    return "Indiquez votre prénom et votre nom (2 caractères minimum).";
  }
  if (name === "email" && !EMAIL_PATTERN.test(trimmed)) {
    return "Indiquez une adresse email valide, par exemple nom@domaine.fr.";
  }
  if (name === "message" && trimmed.length < 10) {
    return "Votre message doit contenir au moins 10 caractères.";
  }
  return undefined;
}

const FIELDS: FieldName[] = ["name", "email", "message"];

const inputClass =
  "w-full rounded-[var(--radius-button)] border border-input-border bg-white px-4 py-3 text-base text-ink placeholder:text-muted/80 transition-colors focus:border-navy focus:outline-2 focus:outline-offset-0 focus:outline-navy aria-[invalid=true]:border-error";

export default function ContactForm({ endpoint }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name as FieldName;
    if (!FIELDS.includes(name)) return;
    setErrors((current) => ({ ...current, [name]: validate(name, event.target.value) }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nextErrors: Errors = {};
    FIELDS.forEach((field) => {
      const error = validate(field, String(data.get(field) ?? ""));
      if (error) nextErrors[field] = error;
    });
    setErrors(nextErrors);

    const firstInvalid = FIELDS.find((field) => nextErrors[field]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  const describedBy = (field: FieldName) => (errors[field] ? `${field}-erreur` : undefined);

  return (
    <form
      ref={formRef}
      action={endpoint}
      method="POST"
      noValidate
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8"
    >
      <p className="mb-6 text-sm text-muted">
        Les champs marqués d’un <span aria-hidden="true">*</span>
        <span className="sr-only">astérisque</span> sont obligatoires.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-semibold text-ink">
            Prénom et nom <span aria-hidden="true" className="text-cta">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            onBlur={handleBlur}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            className={`${inputClass} min-h-12`}
          />
          {errors.name ? (
            <p id="name-erreur" className="mt-2 text-sm text-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block font-semibold text-ink">
            Email <span aria-hidden="true" className="text-cta">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            onBlur={handleBlur}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            className={`${inputClass} min-h-12`}
          />
          {errors.email ? (
            <p id="email-erreur" className="mt-2 text-sm text-error">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block font-semibold text-ink">
          Message <span aria-hidden="true" className="text-cta">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          onBlur={handleBlur}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message")}
          className={inputClass}
        />
        {errors.message ? (
          <p id="message-erreur" className="mt-2 text-sm text-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
      {/* Champ piège anti-spam (Formspree) : invisible pour les humains. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="_gotcha">Ne pas remplir</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          aria-disabled={status === "submitting"}
          className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-[var(--radius-button)] bg-cta px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-cta-hover disabled:cursor-wait disabled:opacity-60"
        >
          {status === "submitting" ? "Envoi en cours…" : "Envoyer le message"}
        </button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" ? (
            <span className="font-semibold text-success">
              Merci, votre message a bien été envoyé. Je vous réponds au plus vite.
            </span>
          ) : null}
          {status === "error" ? (
            <span className="font-semibold text-error">
              L’envoi a échoué. Réessayez, ou écrivez-moi directement par email.
            </span>
          ) : null}
        </p>
      </div>
    </form>
  );
}
