import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, RoundedBox } from "@react-three/drei";  // Import RoundedBox
import { Mesh } from "three";
import { ThreeEvent } from "@react-three/fiber";
/** 
const Donut = ({ position, color }: { position: Vector3 | [number, number, number] | undefined, color: string }) => {
  const donutRef = useRef<Mesh | null>(null);
  let isHovered = false;

  // Handle hover rotation
  const onPointerOver = () => {
    isHovered = true;
  };

  const onPointerOut = () => {
    isHovered = false;
  };

  // Automatically rotate the donut in place
  useFrame(() => {
    if (donutRef.current) {
      donutRef.current.rotation.x += 0.005;
      donutRef.current.rotation.y += 0.005;
      if (isHovered) {
        donutRef.current.rotation.x += 0.05; // Faster rotation when hovered
        donutRef.current.rotation.y += 0.05; // Faster rotation when hovered
      }
    }
  });

  return (
    <mesh
      ref={donutRef}
      position={position}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <torusGeometry args={[0.4, 0.1, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
    </mesh>
  );
};

**/

const Cube = () => {
  const cubeRef = useRef<Mesh | null>(null);

  // Handle drag rotation
  let isDragging = false;
  let prevMouseX = 0;
  let prevMouseY = 0;

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    isDragging = true;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  };

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (isDragging && cubeRef.current) {
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      cubeRef.current.rotation.y += deltaX * 0.01;
      cubeRef.current.rotation.x += deltaY * 0.01;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    }
  };

  const onPointerUp = () => {
    isDragging = false;
  };

  // Automatically rotate the cube
  useFrame(() => {
    if (!isDragging && cubeRef.current) {
      cubeRef.current.rotation.y += 0.005;
      cubeRef.current.rotation.x += 0.002;
    }
  });

  return (
    <RoundedBox
      ref={cubeRef}
      args={[3, 3, 3]}
      position={[0, 1, 0]}
      radius={0.5}
      smoothness={4}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <meshStandardMaterial
        color="cyan"
        metalness={1}
        roughness={0}
        emissive="cyan"
        emissiveIntensity={1}
      />
    </RoundedBox>
  );

};

const RotatingCube = () => {
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 50 }}
      style={{ height: "100vh", backgroundColor: "transparent" ,width:'500px'}}
      gl={{
        preserveDrawingBuffer: true,
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 10, 5]} angle={0.3} intensity={3} penumbra={1} castShadow={false} />

      {/* Environment */}
      <Environment preset="sunset" />

      {/* Cube */}
      <Cube />



      {/* Orbit Controls */}
      <OrbitControls maxDistance={15} minDistance={5} maxPolarAngle={Math.PI / 2.2} minPolarAngle={Math.PI / 4} enablePan={false} />
    </Canvas>
  );
};


export default RotatingCube;
