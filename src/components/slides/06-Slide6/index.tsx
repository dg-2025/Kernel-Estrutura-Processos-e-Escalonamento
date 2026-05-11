"use client";
import { GitBranch, Clock, Cpu } from 'lucide-react';
import { SlideContainer, PainelConteudo, GridLadoALado, BlocoInformativo } from '@/components/ui/Containers';
import { TituloSlide, TextoApoio, Destaque, MiniTitulo } from '@/components/ui/Typography';

export default function Slide6() {
  return (
    <SlideContainer layout="centralizado">
      <PainelConteudo>
        <div className="presenter-badge">Arthur</div>
        <TituloSlide style={{ textAlign: 'center' }}>Processos: A Unidade de Trabalho</TituloSlide>
        
        <TextoApoio>
          Um <strong>processo</strong> é um programa em execução, contendo código, dados e estado 
          (registradores, contador de programa). O kernel é o <strong>“juiz”</strong> que decide qual processo usa a CPU e por quanto tempo.
        </TextoApoio>
        
        <Destaque>
          "O kernel decide qual processo usa a CPU e quando." — Understanding the Linux Kernel
        </Destaque>

        <GridLadoALado>
          <BlocoInformativo>
            <MiniTitulo><GitBranch size={20} /> Ciclo de Vida</MiniTitulo>
            <TextoApoio>Criação e finalização via Fork, exec e wait.</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo>
            <MiniTitulo><Cpu size={20} /> Threads</MiniTitulo>
            <TextoApoio>Controle de unidades menores de execução dentro de um processo (como “sub-tarefas”).</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo>
            <MiniTitulo><Clock size={20} /> Escalonamento</MiniTitulo>
            <TextoApoio>Decide qual processo executa e por quanto tempo na CPU, garantindo justiça e eficiência.</TextoApoio>
          </BlocoInformativo>
        </GridLadoALado>
      </PainelConteudo>
    </SlideContainer>
  );
}