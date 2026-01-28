'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function BackgroundShapes() {
    const meshRef = useRef<THREE.Mesh>(null);

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={1.5}>
                <MeshDistortMaterial
                    color="#3b82f6"
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                />
            </Sphere>
        </Float>
    );
}

function FloatingCubes() {
    const cubes = useMemo(() => {
        return Array.from({ length: 15 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
            ] as [number, number, number],
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
            scale: 0.1 + Math.random() * 0.3,
        }));
    }, []);

    return (
        <>
            {cubes.map((props, i) => (
                <Float key={i} speed={1} rotationIntensity={0.5} floatIntensity={1}>
                    <mesh position={props.position} rotation={props.rotation} scale={props.scale}>
                        <boxGeometry />
                        <meshStandardMaterial color="#6366f1" wireframe />
                    </mesh>
                </Float>
            ))}
        </>
    );
}

export default function Scene() {
    return (
        <div className="absolute inset-0 -z-10 bg-[#020617]">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                <BackgroundShapes />
                <FloatingCubes />

                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}
