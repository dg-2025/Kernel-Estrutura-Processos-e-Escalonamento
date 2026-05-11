"use client";
import { CheckCircle, AlertTriangle, Zap, Activity } from 'lucide-react';
import Image from 'next/image';
import { SlideContainer, PainelConteudo, PainelMidia, GridLadoALado, BlocoInformativo } from '@/components/ui/Containers';
import { TituloSlide, Subtitulo, TextoApoio, MiniTitulo, Legenda } from '@/components/ui/Typography';

export default function Slide3() {
  return (
    <SlideContainer layout="padrao">
      <PainelMidia>
        <Image 
          src="/images/kernel-monolitico.png" 
          alt="Kernel Monolítico" 
          width={800} 
          height={600} 
          style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          quality={75}
        />
      </PainelMidia>
      <PainelConteudo>
        <div className="presenter-badge">Daniel</div>
        <TituloSlide>Kernel Monolítico</TituloSlide>
        <Subtitulo>Máxima eficiência em um único endereço de memória</Subtitulo>
        
        <TextoApoio>
          Serviços como <strong>I/O, Memória e Drivers</strong> compartilham o mesmo espaço do núcleo. 
          A comunicação ocorre via chamadas diretas de função, sem troca de contexto entre camadas.
        </TextoApoio>

        <GridLadoALado>
          <BlocoInformativo>
            <MiniTitulo style={{ color: '#00FF88' }}><Zap size={24} /> Performance</MiniTitulo>
            <TextoApoio>Latência quase zero. Ideal para sistemas de tempo real e alto tráfego.</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo>
            <MiniTitulo style={{ color: '#FF4B4B' }}><Activity size={24} /> Fragilidade</MiniTitulo>
            <TextoApoio>Erro em driver de terceiros pode causar <strong>Panic/BSOD</strong> total.</TextoApoio>
          </BlocoInformativo>
        </GridLadoALado>
        
        <Legenda>Dominante no ecossistema Linux e servidores de missão crítica.</Legenda>
      </PainelConteudo>
    </SlideContainer>
  );
}
