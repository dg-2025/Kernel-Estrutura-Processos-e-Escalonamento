import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties; // <-- ESSA LINHA RESOLVE 80% DOS ERROS DOS SLIDES
}

interface SlideContainerProps extends ContainerProps {
  layout?: 'padrao' | 'reverso' | 'centralizado';
}

export const SlideContainer = ({ children, layout = 'padrao', className = '', style }: SlideContainerProps) => (
  <div className={`slide-container layout-${layout} ${className}`} style={style}>
    {children}
  </div>
);

export const PainelConteudo = ({ children, className = '', style }: ContainerProps) => (
  <div className={`painel-conteudo ${className}`} style={style}>
    {children}
  </div>
);

export const PainelMidia = ({ children, className = '', style }: ContainerProps) => (
  <div className={`painel-midia ${className}`} style={style}>
    {children}
  </div>
);

export const GridLadoALado = ({ children, className = '', style }: ContainerProps) => (
  <div className={`grid-lado-a-lado ${className}`} style={style}>
    {children}
  </div>
);

export const BlocoInformativo = ({ children, className = '', style }: ContainerProps) => (
  <div className={`bloco-informativo ${className}`} style={style}>
    {children}
  </div>
);