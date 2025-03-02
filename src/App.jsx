import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, useProgress } from '@react-three/drei';
import { Center, OrbitControls } from '@react-three/drei';
import Ramen from './components/Ramen';
import Env from './components/Env';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'black', fontSize: '14px' }}>
        {Math.round(progress)} % loaded
      </div>
      <div style={{ width: '300px', height: '20px', background: '#38241b', borderRadius: '5px', border: 'solid 2px white', overflow: 'hidden' }}>
        <div style={{ width: `${progress}%`, height: '100%', background: '#e2b146' }} />
      </div>
    </Html>
  );
};

export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 6], fov: 25 }}>
      <Suspense fallback={<Loader />}>
        <Center>
          <group position={[0, -2, 0]}>
            <Ramen scale={0.3} rotation-x={0.3} position-y={1} />
          </group>
        </Center>
        <Env />
        <OrbitControls
          autoRotate
          autoRotateSpeed={6}
          enablePan={false}
          enableZoom={true}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Suspense>
    </Canvas>
  );
}
