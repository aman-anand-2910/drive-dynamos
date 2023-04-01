import { memo } from 'react'
import { useThree } from '@react-three/fiber'
import { Environment, AccumulativeShadows, RandomizedLight, MeshReflectorMaterial, useTexture } from '@react-three/drei'
import { RepeatWrapping, BackSide } from 'three'

const Ground = memo(() => {
    const { gl } = useThree()

    // Load texture.
    const groundTexture = useTexture('assets/images/ground/ground_tile.png', (texture) => {
        texture.wrapS = texture.wrapT = RepeatWrapping
        texture.repeat.set(228, 228)
        texture.anisotropy = gl.capabilities.getMaxAnisotropy()
    })

    return (
        <mesh name='Ground' rotation-x={-Math.PI / 2} position={[0, -0.0001, 0]}>
            <circleGeometry args={[96, 96]} />
            <MeshReflectorMaterial map={groundTexture} resolution={2048} mirror={0} toneMapped={false} />
        </mesh>
    )
})

export default function SceneEnvironment({ performanceDegraded }) {
    return (
        <>
            <mesh name='Sky'>
                <boxGeometry args={[256, 256, 256]} />
                <meshBasicMaterial color={0xffffff} side={BackSide} toneMapped={false} />
            </mesh>

            <ambientLight intensity={0.15} />

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
