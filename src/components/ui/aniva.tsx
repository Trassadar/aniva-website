import React from "react";
import Link from "next/link";

type Props = { children: React.ReactNode; className?: string };

export function Container({ children, className = "" }: Props) {
  return <div className={`container-app ${className}`}>{children}</div>;
}

export function Card({ children, className = "" }: Props) {
  return <div className={`card ${className}`}>{children}</div>;
}

type CardHeaderProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
};

export function CardHeader({ children, className = "", title, subtitle }: CardHeaderProps) {
  return (
    <div className={`card-header ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}
      {subtitle && <p className="card-muted">{subtitle}</p>}
      {children}
    </div>
  );
}

export function CardBody({ children, className = "" }: Props) {
  return <div className={`card-body ${className}`}>{children}</div>;
}

export function Badge({
  children,
  variant = "soft",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "soft" | "brand";
  className?: string;
}) {
  const cls = variant === "brand" ? "badge-brand" : "badge-soft";
  return <span className={`${cls} ${className}`}>{children}</span>;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  prefetch?: boolean;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  prefetch,
  ...rest
}: ButtonProps) {
  const cls =
    variant === "secondary"
      ? "btn-secondary"
      : variant === "ghost"
      ? "btn-ghost"
      : "btn-primary";

  // daca exista href, randam Link (ca sa poti folosi Button ca link)
  if (href) {
    const { onClick, ...btnRest } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <Link
        href={href}
        prefetch={prefetch}
        className={`${cls} ${className}`}
        onClick={onClick as any}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={`${cls} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className="input" {...props} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="textarea" {...props} />;
}
