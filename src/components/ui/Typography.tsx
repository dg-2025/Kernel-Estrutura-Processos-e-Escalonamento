import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TituloApresentacao = ({ children, className = '', style }: TypographyProps) => (
  <h1 className={`titulo-apresentacao ${className}`} style={style}>{children}</h1>
);

export const TituloSlide = ({ children, className = '', style }: TypographyProps) => (
  <h2 className={`titulo-slide ${className}`} style={style}>{children}</h2>
);

export const Subtitulo = ({ children, className = '', style }: TypographyProps) => (
  <h3 className={`subtitulo ${className}`} style={style}>{children}</h3>
);

export const MiniTitulo = ({ children, className = '', style }: TypographyProps) => (
  <h4 className={`mini-titulo ${className}`} style={style}>{children}</h4>
);

export const TextoApoio = ({ children, className = '', style }: TypographyProps) => (
  <p className={`texto-apoio ${className}`} style={style}>{children}</p>
);

export const Destaque = ({ children, className = '', style }: TypographyProps) => (
  <blockquote className={`destaque ${className}`} style={style}>{children}</blockquote>
);

export const Legenda = ({ children, className = '', style }: TypographyProps) => (
  <span className={`legenda ${className}`} style={style}>{children}</span>
);