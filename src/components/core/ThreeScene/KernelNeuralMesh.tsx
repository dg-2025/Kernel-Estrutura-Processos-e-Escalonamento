"use client";
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function KernelNeuralMesh({ slideAtivo }: { slideAtivo: number }) {
  // Tipando os refs do Three.js
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 400;
  const ringRadius = 5.5;
  const ringRadiusInner = 3.2;
  
  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    const col = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const isOuterRing = i < particleCount / 2;
      const radius = isOuterRing ? ringRadius : ringRadiusInner;
      const angle = (i / (particleCount / 2)) * Math.PI * 2;
      const yOffset = (Math.random() - 0.5) * 1.2;
      
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = yOffset;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
      
      vel.push({
        angleSpeed: (isOuterRing ? 0.008 : 0.012) + (Math.random() - 0.5) * 0.003,
        ySpeed: (Math.random() - 0.5) * 0.008,
        radius: radius,
        isOuter: isOuterRing
      });
      
      col[i * 3] = isOuterRing ? 1.0 : 1.0;
      col[i * 3 + 1] = isOuterRing ? 0.42 : 0.82;
      col[i * 3 + 2] = isOuterRing ? 0.21 : 0.4;
    }
    return [pos, vel, col];
  }, []);
  
  const bgParticleCount = 800;
  const bgPositions = useMemo(() => {
    const pos = new Float32Array(bgParticleCount * 3);
    for (let i = 0; i < bgParticleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25 - 15;
    }
    return pos;
  }, []);
  
useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    if (groupRef.current) {
      // O EFEITO UAU: Interpolação suave (Lerp) para girar a malha baseada no número do slide!
      // Cada slide gira o núcleo em um ângulo diferente, dando sensação de progressão.
      const targetRotationY = (time * 0.05) + (slideAtivo * 0.8);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      
      // Flutuação natural
      groupRef.current.rotation.x = Math.sin(time * 0.15) * 0.1;
    }
    
    if (ringRef.current) {
      const scale = 1 + Math.sin(time * 3) * 0.03;
      ringRef.current.scale.set(scale, scale, scale);
    }
    
    if (coreRef.current) {
      const pulse = 0.8 + Math.sin(time * 5) * 0.2;
      coreRef.current.scale.set(pulse, pulse, pulse);
      
      const mixFactor = (Math.sin(time * 2) + 1) / 2;
      (coreRef.current.material as THREE.MeshStandardMaterial).color.setHex(
        mixFactor > 0.5 ? 0xFF6B35 : 0xFFD166
      );
    }
    
    if (particlesRef.current) {
      const positionsArray = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const v = velocities[i];
        let angle = Math.atan2(positionsArray[i * 3 + 2], positionsArray[i * 3]);
        
        angle += v.angleSpeed;
        
        const newX = Math.cos(angle) * v.radius;
        const newZ = Math.sin(angle) * v.radius;
        const newY = positionsArray[i * 3 + 1] + v.ySpeed;
        
        positionsArray[i * 3] = newX;
        positionsArray[i * 3 + 1] = newY > 1.5 ? -1.5 : (newY < -1.5 ? 1.5 : newY);
        positionsArray[i * 3 + 2] = newZ;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
return (
    <group ref={groupRef}>
      {/* Núcleo central pulsante com glow */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 64, 64]} />
        <meshStandardMaterial 
          color="#FF6B35" 
          emissive="#FF6B35" 
          emissiveIntensity={0.8}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>
      
      {/* Glow / Halo do núcleo */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial color="#FF6B35" transparent opacity={0.15} side={THREE.BackSide} />
      </mesh>
      
      {/* Anel de energia externo */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.05, 64, 200]} />
        <meshStandardMaterial color="#FF6B35" emissive="#FF6B35" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Segundo anel inclinado */}
      <mesh rotation={[Math.PI / 3, 0.5, 0]}>
        <torusGeometry args={[2.8, 0.04, 64, 200]} />
        <meshStandardMaterial color="#FFD166" emissive="#FFD166" emissiveIntensity={0.4} />
      </mesh>
      
      {/* Partículas orbitais (anel duplo) */}
      <points ref={particlesRef}>
        <bufferGeometry>
          {/* CORREÇÃO APLICADA AQUI: Usando args={[array, itemSize]} */}
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.12} vertexColors transparent opacity={0.9} />
      </points>
      
      {/* Partículas de fundo (estrelas distantes) */}
      <points>
        <bufferGeometry>
          {/* CORREÇÃO APLICADA AQUI TAMBÉM */}
          <bufferAttribute attach="attributes-position" args={[bgPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#FFD166" transparent opacity={0.4} />
      </points>
      
      {/* Luzes */}
      <pointLight position={[0, 0, 0]} intensity={1.2} distance={20} color="#FF6B35" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={0.5} color="#FFD166" />
    </group>
  );
}