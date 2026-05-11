"use client";
import { GitMerge, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { SlideContainer, PainelConteudo, PainelMidia, BlocoInformativo } from '@/components/ui/Containers';
import { TituloSlide, Subtitulo, TextoApoio, MiniTitulo } from '@/components/ui/Typography';

export default function Slide9() {
  return (
    <SlideContainer layout="reverso">
      <PainelMidia>
        <Image 
          src="/images/ipc.png" 
          alt="Mecanismos de IPC" 
          width={800} 
          height={600} 
          style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          quality={75}
        />
      </PainelMidia>
      <PainelConteudo>
        <div className="presenter-badge">Pedro</div>
        <TituloSlide>Comunicação (IPC)</TituloSlide>
        <Subtitulo>Como processos trocam informações</Subtitulo>

        <TextoApoio>
          O kernel fornece mecanismos para processos conversarem: <strong>Pipes</strong> (unidirecional), 
          <strong>Filas de mensagens</strong>, <strong>Memória compartilhada</strong> e <strong>Sinais</strong>.
        </TextoApoio>

        <BlocoInformativo>
          <MiniTitulo><GitMerge size={20} /> Sincronização de Processos</MiniTitulo>
          <TextoApoio>
            O kernel controla a sincronização usando <strong>semáforos</strong> e <strong>mutexes</strong> 
            para evitar condições de corrida em recursos compartilhados – como um “semáforo de trânsito” para dados.
          </TextoApoio>
        </BlocoInformativo>
      </PainelConteudo>
    </SlideContainer>
  );
}
