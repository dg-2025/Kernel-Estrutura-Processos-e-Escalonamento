"use client";
import { ShieldCheck, Cpu, HardDrive } from 'lucide-react';
import { SlideContainer, PainelConteudo, GridLadoALado, BlocoInformativo } from '@/components/ui/Containers';
import { TituloSlide, Subtitulo, TextoApoio, MiniTitulo, Destaque } from '@/components/ui/Typography';

export default function Slide5() {
  return (
    <SlideContainer layout="centralizado">
      <PainelConteudo>
        <div className="presenter-badge">Thiago</div>
        <TituloSlide style={{ textAlign: 'center' }}>O Modelo Híbrido</TituloSlide>
        <Subtitulo style={{ textAlign: 'center' }}>Flexibilidade para Usuários e Estabilidade para o Núcleo</Subtitulo>

        <TextoApoio style={{ textAlign: 'center', margin: '0 auto' }}>
          Não é puramente monolítico nem microkernel. Ele move drivers e serviços para o espaço de usuário 
          sempre que possível, mas mantém funções críticas de I/O no núcleo para não perder velocidade. 
          Uma analogia: <strong>um prédio com escritórios internos e áreas comuns</strong> – cada setor tem autonomia, mas a infraestrutura crítica é compartilhada.
        </TextoApoio>

        <GridLadoALado>
          <BlocoInformativo>
            <MiniTitulo><Cpu size={24} /> Windows NT</MiniTitulo>
            <TextoApoio>Usa camadas de abstração de hardware (HAL) para rodar em diversos chipsets.</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo>
            <MiniTitulo><HardDrive size={24} /> macOS (XNU)</MiniTitulo>
            <TextoApoio>Baseado no Mach (microkernel) com componentes BSD (monolíticos).</TextoApoio>
          </BlocoInformativo>
          <BlocoInformativo>
            <MiniTitulo><ShieldCheck size={24} /> Android</MiniTitulo>
            <TextoApoio>Utiliza o kernel Linux mas isola serviços via Hardware Abstraction Layers.</TextoApoio>
          </BlocoInformativo>
        </GridLadoALado>

        <Destaque>
          A arquitetura moderna foca em <strong>Segurança vs Velocidade</strong>: Se um driver falha, o OS reinicia apenas o driver.
        </Destaque>
      </PainelConteudo>
    </SlideContainer>
  );
}