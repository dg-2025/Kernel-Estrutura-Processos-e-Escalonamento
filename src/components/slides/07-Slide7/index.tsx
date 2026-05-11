"use client";
import { Activity, ListChecks, Repeat } from 'lucide-react';
import Image from 'next/image';
import { SlideContainer, PainelConteudo, PainelMidia, BlocoInformativo } from '@/components/ui/Containers';
import { TituloSlide, TextoApoio, MiniTitulo } from '@/components/ui/Typography';

export default function Slide7() {
  return (
    <SlideContainer layout="padrao">
      <PainelMidia>
        <Image 
          src="/images/estados-processo.png" 
          alt="Estados do Processo" 
          width={800} 
          height={600} 
          style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          quality={75}
        />
      </PainelMidia>
      <PainelConteudo>
        <div className="presenter-badge">Arthur</div>
        <TituloSlide>Estados e Escalonamento</TituloSlide>
        
        <TextoApoio>
          Um processo transita entre estados: <strong>Novo</strong> (criado), <strong>Pronto</strong> (aguardando CPU), 
          <strong>Executando</strong>, <strong>Esperando</strong> (I/O) e <strong>Finalizado</strong>.
        </TextoApoio>

        <BlocoInformativo>
          <MiniTitulo><ListChecks size={20} /> Algoritmos de Escalonamento</MiniTitulo>
          <TextoApoio>
            • FIFO (First In, First Out) – o primeiro a chegar é o primeiro a executar.<br/>
            • Round Robin (tempo compartilhado) – cada processo recebe um fatia de tempo.<br/>
            • Prioridade (dinâmica ou estática) – processos mais importantes executam primeiro.
          </TextoApoio>
        </BlocoInformativo>

        <BlocoInformativo>
          <MiniTitulo><Repeat size={20} /> Troca de Contexto</MiniTitulo>
          <TextoApoio>
            O kernel salva o estado de um processo (contexto) e carrega o do próximo, permitindo a multitarefa de forma transparente.
          </TextoApoio>
        </BlocoInformativo>
      </PainelConteudo>
    </SlideContainer>
  );
}
