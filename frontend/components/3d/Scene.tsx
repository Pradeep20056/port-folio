'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function BackgroundShapes() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.mouse.y * 0.2;
        meshRef.current.rotation.y = state.mouse.x * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 100, 200]} scale={1.5}>
                <MeshDistortMaterial
                    color="#3b82f6"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}

function FloatingCubes() {
    const groupRef = useRef<THREE.Group>(null);
    const cubes = useMemo(() => {
        return Array.from({ length: 25 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15,
            ] as [number, number, number],
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
            scale: 0.05 + Math.random() * 0.2,
        }));
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;
        groupRef.current.rotation.y += 0.001;
        groupRef.current.position.x = state.mouse.x * 0.5;
        groupRef.current.position.y = state.mouse.y * 0.5;
    });

    return (
        <group ref={groupRef}>
            {cubes.map((props, i) => (
                <Float key={i} speed={1} rotationIntensity={0.5} floatIntensity={1}>
                    <mesh position={props.position} rotation={props.rotation} scale={props.scale}>
                        <boxGeometry />
                        <meshStandardMaterial color="#6366f1" wireframe opacity={0.3} transparent />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

export default function Scene() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#020617]">
            <Canvas shadows gl={{ antialias: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <fog attach="fog" args={['#020617', 5, 20]} />

                <BackgroundShapes />
                <FloatingCubes />

                <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            </Canvas>
        </div>
    );
}
