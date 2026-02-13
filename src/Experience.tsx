import { Clone, useGLTF, } from "@react-three/drei"
import { useRef } from "react"
import { FrontSide, Group, } from "three"
import fragmentShader from './shaders/glow/fragment.glsl'
import vertexShader from './shaders/glow/vertex.glsl'
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing"
import { KernelSize, Resolution } from 'postprocessing'
import { useFrame } from "@react-three/fiber"

export default function Experience() {
    const humanPoseModel = useGLTF('./models/base_female_body_meshy/scene.gltf')
    const glowManRef = useRef<Group>(null)


    useFrame((_, delta) => {
        if (glowManRef.current) {
            glowManRef.current.rotation.y += delta * 0.5
        }
    })


    return <>

        <color attach="background" args={['#080810']} />
        <Clone ref={glowManRef} object={humanPoseModel.scene}
            inject={

                <shaderMaterial
                    side={FrontSide}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}

                />
            } />

        <EffectComposer>
            <Bloom
                intensity={1.0}
                kernelSize={KernelSize.VERY_SMALL}
                luminanceThreshold={1.1}
                luminanceSmoothing={1.0}
                mipmapBlur={true}
                resolutionX={Resolution.AUTO_SIZE}
                resolutionY={Resolution.AUTO_SIZE}
                levels={5}
            />
            <Noise opacity={0.3} />
        </EffectComposer>
    </>
}