import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Model } from "./Model";
import { OrbitControls } from '@react-three/drei'
import "./styles.scss";



function App() {
  
  return (
    <>
      <Canvas>        
        <ambientLight args={[0xff0000]} intensity={0.01} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
        <directionalLight position={[0, 0, -5]} intensity={0.5} />
        <directionalLight position={[0, 10, 0]} intensity={0.3} />
        <Suspense fallback={null}><Model /></Suspense>
        <OrbitControls autoRotate enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.8} /> 
      </Canvas>
    </>
  );
}

export default App;