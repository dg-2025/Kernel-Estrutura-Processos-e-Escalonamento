"use client";
import { BookOpen, Cpu, Layers } from 'lucide-react';
import { SlideContainer, PainelConteudo, GridLadoALado, BlocoInformativo } from '@/components/ui/Containers';
import { TituloSlide, Subtitulo, TextoApoio, Destaque, MiniTitulo } from '@/components/ui/Typography';

export default function Slide2() {
  return (
    <SlideContainer layout="centralizado">
      <PainelConteudo>
        <div className="presenter-badge">Daniel</div>
        <TituloSlide style={{ textAlign: 'center', borderBottom: 'none' }}>O que é Kernel?</TituloSlide>
        <Subtitulo style={{ textAlign: 'center' }}>Definição e Papéis Fundamentais</Subtitulo>

        <TextoApoio>
          O <strong>kernel</strong> é o núcleo do sistema operacional, responsável por controlar diretamente 
          os recursos do hardware e fornecer serviços básicos para os programas. 
          Pense nele como o <strong>“maestro de uma orquestra”</strong> – sem ele, cada instrumento (hardware) tocaria em desarmonia.
        </TextoApoio>
        
        <Destaque>
          "Conjunto de rotinas que oferece serviços aos usuários e às aplicações" — Machado & Maia
        </Destaque>
        
        <TextoApoio>
          Ele atua como uma <strong>camada intermediária entre hardware e software</strong>, garantindo que 
          programas possam ser executados de forma segura e eficiente.
        </TextoApoio>

        <GridLadoALado>
          <BlocoInformativo>
            <MiniTitulo><Layers size={20} /> Abstração</MiniTitulo>
            <TextoApoio>Isola aplicações das complexidades do hardware, oferecendo uma visão simples e uniforme.</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo>
            <MiniTitulo><Cpu size={20} /> Gerenciador</MiniTitulo>
            <TextoApoio>Distribui CPU, memória e dispositivos como um administrador de tráfego aéreo.</TextoApoio>
          </BlocoInformativo>
        </GridLadoALado>
      </PainelConteudo>
    </SlideContainer>
  );
}