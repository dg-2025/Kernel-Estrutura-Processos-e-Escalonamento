"use client";
import { Canvas } from '@react-three/fiber';
import KernelNeuralMesh from '../ThreeScene/KernelNeuralMesh';

export default function BackgroundWrapper({ slideAtivo }: { slideAtivo: number }) {
  return (
    <div className="bg-canvas-container">
      <Canvas camera={{ position: [0, 0, 14], fov: 55 }}>
        <color attach="background" args={['#0A0D14']} />
        <fog attach="fog" args={['#0A0D14', 15, 30]} />
        <KernelNeuralMesh slideAtivo={slideAtivo} />
      </Canvas>
      <div className="bg-overlay"></div>
    </div>
  );
}