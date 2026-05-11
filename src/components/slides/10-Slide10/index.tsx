"use client";
import { Database, ListOrdered, Hash } from 'lucide-react';
import { SlideContainer, PainelConteudo, GridLadoALado, BlocoInformativo } from '@/components/ui/Containers';
import { TituloSlide, TextoApoio, MiniTitulo } from '@/components/ui/Typography';

export default function Slide10() {
  return (
    <SlideContainer layout="centralizado">
      <PainelConteudo>
        <div className="presenter-badge">Guilherme</div>
        <TituloSlide style={{ textAlign: 'center' }}>Estruturas Internas do Kernel</TituloSlide>
        
        <TextoApoio style={{ textAlign: 'center', margin: '0 auto' }}>
          Para gerenciar o hardware e o software, o sistema utiliza estruturas de dados complexas e otimizadas – as “engrenagens” invisíveis do sistema.
        </TextoApoio>

        <GridLadoALado>
          <BlocoInformativo>
            <MiniTitulo><Database size={20} /> PCB</MiniTitulo>
            <TextoApoio>O "Process Control Block" guarda ID, estado e registradores de cada processo.</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo>
            <MiniTitulo><ListOrdered size={20} /> Filas</MiniTitulo>
            <TextoApoio>Filas de escalonamento para processos prontos ou aguardando dispositivo.</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo>
            <MiniTitulo><Hash size={20} /> Tabelas</MiniTitulo>
            <TextoApoio>Tabelas de memória para mapeamento de páginas virtuais em frames físicos.</TextoApoio>
          </BlocoInformativo>
        </GridLadoALado>
      </PainelConteudo>
    </SlideContainer>
  );
}