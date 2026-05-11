"use client";
import { TrendingUp, TrendingDown, Award } from 'lucide-react';
import { SlideContainer, PainelConteudo, PainelMidia, GridLadoALado, BlocoInformativo } from '@/components/ui/Containers';
import { TituloSlide, Subtitulo, TextoApoio, MiniTitulo } from '@/components/ui/Typography';

export default function Slide11() {
  return (
    <SlideContainer layout="padrao">
      <PainelMidia>
        <img src="/images/windows-scheduler.png" alt="Escalonador do Windows" />
      </PainelMidia>
      <PainelConteudo>
        <div className="presenter-badge">Guilherme</div>
        <TituloSlide>Tratamento no Windows</TituloSlide>
        <Subtitulo>Escalonamento Preemptivo Dinâmico</Subtitulo>

        <TextoApoio>
          O Windows utiliza um escalonador preemptivo totalmente baseado em níveis de prioridade dinâmicos.
        </TextoApoio>

        <GridLadoALado>
          <BlocoInformativo>
            <MiniTitulo style={{ color: '#FF6B35' }}><TrendingDown size={18} /> CPU-bound</MiniTitulo>
            <TextoApoio>Têm a prioridade reduzida para evitar monopólio do processador.</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo>
            <MiniTitulo style={{ color: '#FFD166' }}><TrendingUp size={18} /> I/O-bound</MiniTitulo>
            <TextoApoio>Recebem aumento temporário de prioridade ao retornar de uma operação I/O.</TextoApoio>
          </BlocoInformativo>
        </GridLadoALado>

        <BlocoInformativo style={{ borderColor: '#FFD166' }}>
          <MiniTitulo><Award size={18} /> Priority Boosting</MiniTitulo>
          <TextoApoio>
            Aplica boost de prioridade em tarefas interativas, garantindo responsividade ao usuário – como acelerar um carro em uma subida.
          </TextoApoio>
        </BlocoInformativo>
      </PainelConteudo>
    </SlideContainer>
  );
}