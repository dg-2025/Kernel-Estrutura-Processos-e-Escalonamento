"use client";
import { Flame, Database, ArrowRightLeft } from 'lucide-react';
import { SlideContainer, PainelConteudo, GridLadoALado, BlocoInformativo } from '@/components/ui/Containers';
import { TituloSlide, TextoApoio, MiniTitulo, Subtitulo } from '@/components/ui/Typography';

export default function Slide8() {
  return (
    <SlideContainer layout="centralizado">
      <PainelConteudo>
        <div className="presenter-badge">Pedro</div>
        <TituloSlide style={{ textAlign: 'center' }}>Perfis de Execução</TituloSlide>
        <Subtitulo style={{ textAlign: 'center' }}>Como o Kernel identifica e prioriza o Processamento</Subtitulo>
        
        <GridLadoALado>
          <BlocoInformativo style={{ borderLeft: '8px solid #FF6B35' }}>
            <MiniTitulo style={{ color: '#FF6B35' }}><Flame size={28} /> CPU-Bound</MiniTitulo>
            <TextoApoio>
              O processo está limitado pela velocidade do processador.
              <br/><br/>
              • <strong>Foco:</strong> Cálculos, IA, Encriptação.<br/>
              • <strong>Comportamento:</strong> Usa 100% do núcleo por longos períodos.<br/>
              • <strong>Analogia:</strong> Um matemático resolvendo problemas complexos sem parar.
            </TextoApoio>
          </BlocoInformativo>
          
          <BlocoInformativo style={{ borderLeft: '8px solid #FFD166' }}>
            <MiniTitulo style={{ color: '#FFD166' }}><Database size={28} /> I/O-Bound</MiniTitulo>
            <TextoApoio>
              O processo gasta mais tempo esperando por dados (Rede/Disco).
              <br/><br/>
              • <strong>Foco:</strong> Web Servers, Bancos de Dados.<br/>
              • <strong>Comportamento:</strong> Frequentemente entra em estado de <strong>Waiting</strong>.<br/>
              • <strong>Analogia:</strong> Um atendente de call center que passa a maior parte do tempo esperando o telefone tocar.
            </TextoApoio>
          </BlocoInformativo>
        </GridLadoALado>

        <BlocoInformativo style={{ textAlign: 'center', background: 'rgba(255, 107, 53, 0.1)' }}>
          <TextoApoio>
            <ArrowRightLeft size={20} style={{ verticalAlign: 'middle', marginRight: '10px' }}/>
            O Kernel inteligente faz o <strong>Interleaving</strong>: roda CPU-Bound enquanto o I/O-Bound espera o disco, maximizando a utilização do processador.
          </TextoApoio>
        </BlocoInformativo>
      </PainelConteudo>
    </SlideContainer>
  );
}