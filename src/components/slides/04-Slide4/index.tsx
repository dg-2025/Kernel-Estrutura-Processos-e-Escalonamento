"use client";
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { SlideContainer, PainelConteudo, PainelMidia, GridLadoALado, BlocoInformativo } from '@/components/ui/Containers';
import { TituloSlide, Subtitulo, TextoApoio, MiniTitulo, Legenda } from '@/components/ui/Typography';

export default function Slide4() {
  return (
    <SlideContainer layout="reverso">
      <PainelMidia>
        <img src="/images/microkernel.png" alt="Microkernel" />
      </PainelMidia>
      <PainelConteudo>
        <div className="presenter-badge">Thiago</div>
        <TituloSlide>Microkernel</TituloSlide>
        <Subtitulo>O mínimo essencial no núcleo</Subtitulo>
        
        <TextoApoio>
          Mantém <strong>apenas o essencial</strong> no núcleo (escalonamento, IPC, memória básica). 
          Os demais serviços  rodam como processos em espaço de usuário, garantindo isolamento.
        </TextoApoio>

        <GridLadoALado>
          <BlocoInformativo style={{ borderColor: 'rgba(255, 209, 102, 0.3)' }}>
            <MiniTitulo style={{ color: '#FFD166' }}><CheckCircle size={20} /> Vantagens</MiniTitulo>
            <TextoApoio>Alta segurança, maior estabilidade e fácil manutenção.</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo style={{ borderColor: 'rgba(255, 107, 53, 0.3)' }}>
            <MiniTitulo style={{ color: '#FF6B35' }}><AlertTriangle size={20} /> Desvantagens</MiniTitulo>
            <TextoApoio>Desempenho inferior devido ao overhead de comunicação.</TextoApoio>
          </BlocoInformativo>
        </GridLadoALado>
        
        <Legenda>Onde é aplicado: MINIX, QNX (sistemas críticos de alta confiabilidade)</Legenda>
      </PainelConteudo>
    </SlideContainer>
  );
}