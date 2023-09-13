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
    <div className={`flex justify-center items-center h-screen overflow-hidden ${className}`}>
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