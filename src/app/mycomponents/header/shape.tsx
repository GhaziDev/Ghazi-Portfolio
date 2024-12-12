import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, RoundedBox } from "@react-three/drei";  // Import RoundedBox

const Donut = ({ position, color }) => {
  const donutRef = useRef();
  let isHovered = false;

  // Handle hover rotation
  const onPointerOver = () => {
    isHovered = true;
  };

  const onPointerOut = () => {
    isHovered = false;
  };

  // Automatically rotate the donut in all axes
  useFrame(() => {
    if (donutRef.current) {
      donutRef.current.rotation.x += 0.005;
      donutRef.current.rotation.y += 0.005;
      donutRef.current.rotation.z += 0.005;
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
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
    </mesh>
  );
};

const Cube = () => {
  const cubeRef = useRef();

  // Handle drag rotation
  let isDragging = false;
  let prevMouseX = 0;
  let prevMouseY = 0;

  const onPointerDown = (e) => {
    isDragging = true;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  };

  const onPointerMove = (e) => {
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
      cubeRef.current.rotation.y += 0.005; // Adjust speed here
      cubeRef.current.rotation.x += 0.002; // Adjust speed here
    }
  });

  return (
    <>
      {/* Cube with rounded edges */}
      <RoundedBox
        ref={cubeRef}
        args={[6, 6, 6, 14]} // [width, height, depth, radius segments]
        position={[6,8,-2]}
        radius={1}  // Adjust this for more or less rounding on the corners
        smoothness={4}  // Higher smoothness gives a smoother look
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <meshStandardMaterial
          color="cyan"
          metalness={1} // Fully metallic
          roughness={0} // Perfectly smooth
          emissive="cyan"
          emissiveIntensity={1}
        />
      </RoundedBox>
    </>
  );
};

const RotatingCube = () => {
  return (
    <Canvas
      camera={{ position: [15, 15, 15], fov: 50 }} // Adjusted camera position
      style={{ height: "100vh", backgroundColor: "transparent" }}
      gl={{
        preserveDrawingBuffer: true,
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <spotLight
        position={[5, 10, 5]}
        angle={0.3}
        intensity={3}
        penumbra={1}
        castShadow={false}
      />

      {/* Environment map for realistic reflections */}
      <Environment preset="sunset" />

      {/* Cube */}
      <Cube />

      {/* Donuts around the cube's corners, fixed positions */}
      <Donut position={[6, 7, -2]} color="hotpink" />
      <Donut position={[6, 9, -2]} color="yellow" />
      <Donut position={[5, 8,-2 ]} color="limegreen" />
      <Donut position={[7, 8, -2]} color="orange" />
      

      {/* Orbit controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default RotatingCube;
