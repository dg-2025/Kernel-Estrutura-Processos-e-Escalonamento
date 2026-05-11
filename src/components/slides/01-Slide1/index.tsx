"use client";
import { Cpu } from 'lucide-react';
import { SlideContainer, PainelConteudo, GridLadoALado, BlocoInformativo } from '@/components/ui/Containers';
import { TituloSlide, Subtitulo, TextoApoio, MiniTitulo } from '@/components/ui/Typography';

export default function Slide1() {
  const participantes = ["Isaac", "Thiago", "Arthur", "Pedro", "Daniel", "Guilherme"];

  return (
    <SlideContainer layout="centralizado">
      <PainelConteudo style={{ alignItems: 'center', textAlign: 'center' }}>
        <div className="presenter-badge">Isaac</div>
        
        <Cpu size={80} color="#FF6B35" />
        
        <TituloSlide style={{ borderBottom: 'none' }}>O Coração do Sistema</TituloSlide>
        <Subtitulo>Kernel: Estrutura, Processos e Escalonamento</Subtitulo>

        <TextoApoio>
          O Kernel é o núcleo essencial de todo sistema operacional moderno. 
          Exploraremos sua arquitetura, gerenciamento de processos e como ele equilibrada cargas de trabalho de forma inteligente.
        </TextoApoio>

        <GridLadoALado>
          <BlocoInformativo style={{ alignItems: 'center', textAlign: 'center' }}>
            <MiniTitulo>O que é?</MiniTitulo>
            <TextoApoio>Núcleo que conecta hardware e software, funcionando como uma ponte invisível mas essencial.</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo style={{ alignItems: 'center', textAlign: 'center' }}>
            <MiniTitulo>Funções</MiniTitulo>
            <TextoApoio>Gerencia processos, memória, arquivos e entrada/saída com segurança e eficiência.</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo style={{ alignItems: 'center', textAlign: 'center' }}>
            <MiniTitulo>Equipe</MiniTitulo>
            <div className="lista-participantes">
              {participantes.map(nome => <span key={nome}>{nome}</span>)}
            </div>
          </BlocoInformativo>
        </GridLadoALado>
      </PainelConteudo>
    </SlideContainer>
  );
}