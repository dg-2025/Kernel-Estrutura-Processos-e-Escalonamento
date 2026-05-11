"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Environment, Html } from '@react-three/drei';
import { useState, useEffect } from 'react';
import * as THREE from 'three';

// Tipagem adicionada aqui
function Modelo({ caminhoArquivo, escala }: { caminhoArquivo: string, escala: number }) {
  const { scene } = useGLTF(caminhoArquivo);
  return (
    <Center>
      <primitive object={scene} scale={escala} />
    </Center>
  );
}

function TouchIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <Html center pointerEvents="none">
      <div className="mobile-only touch-hint">
        <div className="touch-icon">👆</div>
        <span>Toque e arraste para explorar</span>
      </div>
    </Html>
  );
}

// E Tipagem adicionada aqui
export default function VisualizadorGLB({ arquivo, escala = 1 }: { arquivo: string, escala?: number }) {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <Environment preset="city" />
      
      <Modelo caminhoArquivo={arquivo} escala={escala} />
      <TouchIndicator />

      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        enableZoom={true}
        enablePan={false} 
        minDistance={1}
        maxDistance={10}
        enableDamping={true}
        dampingFactor={0.05} 
        touches={{
          ONE: THREE.TOUCH.ROTATE,
          TWO: THREE.TOUCH.DOLLY_PAN
        }}
      />
    </Canvas>
  );
}