import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { Mesh } from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface FloatingObjectProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
  type: 'sphere' | 'box' | 'torus';
}

const FloatingObject = ({ position, rotation = [0, 0, 0], color, type }: FloatingObjectProps) => {
  const meshRef = useRef<Mesh>(null!);
  const prefersReducedMotion = usePrefersReducedMotion();

  useFrame((state) => {
    if (prefersReducedMotion) return;
    
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = rotation[0] + Math.sin(time * 0.5) * 0.1;
    meshRef.current.rotation.y = rotation[1] + Math.cos(time * 0.3) * 0.1;
    meshRef.current.position.y = position[1] + Math.sin(time * 0.4 + position[0]) * 0.1;
  });

  const geometry = {
    sphere: <sphereGeometry args={[0.5, 16, 16]} />,
    box: <boxGeometry args={[0.8, 0.8, 0.8]} />,
    torus: <torusGeometry args={[0.6, 0.2, 8, 16]} />
  }[type];

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
};

const DataVisualizationScene = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#14B8A6" />
      
      {/* Data Engineering - Orbiting nodes */}
      <FloatingObject position={[-2, 1, 0]} color="#14B8A6" type="sphere" />
      <FloatingObject position={[2, -1, 0]} color="#14B8A6" type="box" />
      <FloatingObject position={[0, 0, 2]} color="#7C3AED" type="torus" />
      <FloatingObject position={[-1, -1, -1]} color="#14B8A6" type="sphere" />
      <FloatingObject position={[1, 1, -1]} color="#7C3AED" type="box" />
      
      {!prefersReducedMotion && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      )}
    </>
  );
};

const HeroCanvas = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
            <span className="text-2xl">🔬</span>
          </div>
          <p className="text-sm">Data Science Visualization</p>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <DataVisualizationScene />
      </Suspense>
    </Canvas>
  );
};

export default HeroCanvas;