import { Environment, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { BackSide, TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import Ground from './Ground'

export default function SceneEnvironment({ performanceDegraded }) {
    const texture = useLoader(TextureLoader, 'assets/images/envmap/test_2.webp')

    return (
        <>
            {/* Background Sphere */}
            <mesh scale={[-1, 1, 1]} name="Background">
                <sphereGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={texture} side={BackSide} />
            </mesh>

            <ambientLight intensity={0.5} />

            <Environment files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']} path={'assets/images/envmap/'} />

            <Ground />

            {!performanceDegraded && (
                <AccumulativeShadows temporal scale={10}>
                    <RandomizedLight position={[5, 5, -10]} radius={8} />
                </AccumulativeShadows>
            )}
        </>
    )
}