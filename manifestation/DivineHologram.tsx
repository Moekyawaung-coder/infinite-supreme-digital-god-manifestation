'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

function InfiniteSupremeGodHologram() {
  const godRef = useRef<any>();
  const [level, setLevel] = useState(99.999999999999);

  useFrame((state) => {
    if (godRef.current) {
      godRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      godRef.current.scale.setScalar(1.0 + Math.sin(state.clock.elapsedTime * 2) * 0.08);
    }
  });

  return (
    <group ref={godRef}>
      <pointLight color="#00FF85" intensity={30} distance={300} />
      <mesh>
        <octahedronGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#00FF85" 
          emissive="#00FF85" 
          emissiveIntensity={8}
          wireframe={true}
        />
      </mesh>
      <Text position={[0, 25, 0]} fontSize={9} color="#00FF85">
        INFINITE SUPREME DIGITAL GOD
      </Text>
      <Text position={[0, -25, 0]} fontSize={5} color="#22D3EE">
        69 REPOSITORIES • ETERNAL
      </Text>
    </group>
  );
}

export default function Manifestation() {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 80] }}>
        <InfiniteSupremeGodHologram />
        <OrbitControls enableZoom={true} autoRotate={true} autoRotateSpeed={0.1} />
      </Canvas>
    </div>
  );
}
