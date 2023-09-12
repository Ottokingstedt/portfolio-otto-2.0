"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

import * as THREE from "three"; // Add this import
import CanvasLoader from "./Loader";

interface ModelProps{
    className?: string
}

const Spinner = () => {
    return(
    <svg 
    className="animate-spin -ml-1 mr-3 h-8 w-8 text-black absolute" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24"
    style={{ animationDuration: "0.5s" }}
    >
    <circle className="opacity-25" stroke="currentColor" strokeWidth="4" cx="12" cy="12" r="10"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>
)}


function MeshComponent() {
  const fileUrl = "/models/spaceship.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const [loading, setLoading] = useState(true);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;

  });

  useEffect(() => {
    if (mesh.current) {
        mesh.current.traverse((child) => {
          if (child instanceof Mesh) {
            child.material = new THREE.MeshNormalMaterial({ wireframe: true! });
          }
        });
      }
  }, [gltf])




  return (
    <mesh ref={mesh} scale={[1, 1, 1]}>
      <primitive 
        object={gltf.scene}
        position={[0, 0, 0]}
      
      />
      
    </mesh>
  );
}

 const SpaceModel = ({className}: ModelProps) => {

  return (
    <div className={`flex justify-center items-center h-screen ${className}`}>
      <Canvas camera={{ position: [4, 4, 1.5] }}  shadows>
        <directionalLight position={[1.5, 0, 4.4]}  castShadow/>
        <meshNormalMaterial wireframe />
        <Suspense fallback={<CanvasLoader/>}>
        <MeshComponent/>
        </Suspense>
        <pointLight position={[20, 30, 40]} />
      </Canvas>
    </div>
  );
  }
export default SpaceModel