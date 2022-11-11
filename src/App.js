import React, { useRef} from "react";
import { Canvas, useFrame } from "react-three-fiber";
import "./styles.scss";

const Box = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
<mesh ref={mesh}>
  <cylinderGeometry attach='geometry' args={[1, 1, 1]} />
  <meshPhongMaterial attach="material" color="#a6fb22" />
</mesh>
  );
}

function App() {
  
  return (
    <>
      <Canvas>
        <Box />
        <ambientLight args={[0xff0000]} intensity={0.01} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
       
      </Canvas>
    </>
  );
}

export default App;