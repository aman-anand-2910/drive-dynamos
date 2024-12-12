import React, { useState, useEffect, Suspense, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, PerformanceMonitor } from '@react-three/drei'
import { DefaultLoadingManager, VideoTexture, PlaneGeometry, MeshBasicMaterial, Mesh } from 'three'
import Environment from './Environment'
import Loader from './Loader'
import Vehicle from './Vehicle'
import Screenshot from './Screenshot'
import * as Styles from "../components/Dynamos/styles";


const VideoBackground = ({ videoSrc }) => {
    const { scene } = useThree()
    const videoRef = useRef()

    useEffect(() => {
        const video = document.createElement('video')
        video.src = videoSrc
        video.crossOrigin = 'Anonymous'
        video.loop = true
        video.muted = true
        video.play()

        const videoTexture = new VideoTexture(video)
        const planeGeometry = new PlaneGeometry(80, 50) // Adjust size as needed
        const planeMaterial = new MeshBasicMaterial({ map: videoTexture })
        const plane = new Mesh(planeGeometry, planeMaterial)

        plane.position.set(0, 0, -10) // Position the background behind the scene
        scene.add(plane)

        return () => {
            scene.remove(plane)
            video.pause()
            video.src = ''
        }
    }, [scene, videoSrc])

    return null
}


const ThreeCanvas = ({ currentVehicle, setVehicle, cameraAutoRotate }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [performanceDegraded, setPerformanceDegraded] = useState(false)

    // Set loaded state based on default loading manager.
    useEffect(() => {
        const loadingManager = DefaultLoadingManager
        loadingManager.onStart = () => {
            setIsLoaded(false)
        }
        loadingManager.onLoad = () => {
            setIsLoaded(true)
        }

        return () => {
            loadingManager.onStart = null
            loadingManager.onLoad = null
        }
    }, [])

    return (
        <div id='vehicle'>

            {!isLoaded && <Loader />}
            <Canvas shadows>

                <PerformanceMonitor onDecline={() => setPerformanceDegraded(true)} />
                <VideoBackground videoSrc="public/assets/images/bgvideo.mp4" />
                <OrbitControls
                    makeDefault
                    target={[0, 0.95, 0]}
                    minDistance={4}
                    maxDistance={12}
                    maxPolarAngle={Math.PI / 2}
                    autoRotate={cameraAutoRotate}
                    autoRotateSpeed={-0.3}
                    dampingFactor={0.025}
                />

                <PerspectiveCamera makeDefault fov={24} position={[-4, 1.5, 6.5]}>
                    <pointLight position={[4, 2, 4]} intensity={0.75} />
                </PerspectiveCamera>

                <Suspense fallback={null}>
                    <Vehicle currentVehicle={currentVehicle} setVehicle={setVehicle} />
                </Suspense>

                <Environment performanceDegraded={performanceDegraded} />

                <Screenshot />
            </Canvas>
        </div>
    )
}

export default ThreeCanvas
