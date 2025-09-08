import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';
import { Mesh } from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface Skill3DProps {
  skill: string;
  focused?: boolean;
}

const SkillMesh = ({ skill, focused = false }: Skill3DProps) => {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useFrame((state) => {
    if (prefersReducedMotion) return;
    
    const time = state.clock.getElapsedTime();
    const rotationSpeed = hovered || focused ? 0.02 : 0.01;
    
    meshRef.current.rotation.x = Math.sin(time * rotationSpeed) * 0.1;
    meshRef.current.rotation.y += rotationSpeed;
    
    if (focused) {
      meshRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
    }
  });

  return (
    <group>
      <Box
        ref={meshRef}
        args={[2, 0.8, 0.2]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered || focused ? "#14B8A6" : "#7C3AED"}
          transparent
          opacity={0.8}
        />
      </Box>
      <Text
        position={[0, 0, 0.11]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-medium.woff"
      >
        {skill}
      </Text>
    </group>
  );
};

const SkillBadge3D = ({ skill, focused = false }: Skill3DProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`skill-badge-static ${focused ? 'skill-badge-focused' : ''}`}>
        <span className="text-sm font-medium">{skill}</span>
      </div>
    );
  }

  return (
    <div className="w-32 h-16">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 1]} intensity={0.8} />
          <SkillMesh skill={skill} focused={focused} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SkillBadge3D;