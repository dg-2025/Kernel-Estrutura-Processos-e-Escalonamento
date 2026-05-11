"use client";
import { Building, Home, Factory } from 'lucide-react';
import { SlideContainer, PainelConteudo, GridLadoALado, BlocoInformativo } from '@/components/ui/Containers';
import { TituloSlide, TextoApoio, MiniTitulo } from '@/components/ui/Typography';

export default function Slide12() {
  return (
    <SlideContainer layout="centralizado">
      <PainelConteudo>
        <div className="presenter-badge">Isaac</div>
        <TituloSlide style={{ textAlign: 'center' }}>Entendendo com Analogias</TituloSlide>
        
        <GridLadoALado>
          <BlocoInformativo style={{ alignItems: 'center', textAlign: 'center' }}>
            <Building size={40} color="#FF6B35" />
            <MiniTitulo>Monolítico</MiniTitulo>
            <TextoApoio>Um prédio único com todos os departamentos juntos. Comunicação rápida, mas um incêndio destrói tudo.</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo style={{ alignItems: 'center', textAlign: 'center' }}>
            <Home size={40} color="#FFD166" />
            <MiniTitulo>Microkernel</MiniTitulo>
            <TextoApoio>Várias casas separadas conversando via correios. Seguro, mas cada mensagem demora.</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo style={{ alignItems: 'center', textAlign: 'center' }}>
            <Factory size={40} color="#FF6B35" />
            <MiniTitulo>Híbrido</MiniTitulo>
            <TextoApoio>Complexo industrial com alas interconectadas e áreas isoladas. Equilíbrio entre velocidade e segurança.</TextoApoio>
          </BlocoInformativo>
        </GridLadoALado>

        <BlocoInformativo style={{ background: 'rgba(255, 107, 53, 0.1)', textAlign: 'center', alignItems: 'center' }}>
          <MiniTitulo>Resumo Visual</MiniTitulo>
          <TextoApoio>
            Monolítico: Rápido, mas frágil | Microkernel: Seguro, mas lento | Híbrido: O melhor equilíbrio.
          </TextoApoio>
        </BlocoInformativo>
      </PainelConteudo>
    </SlideContainer>
  );
}