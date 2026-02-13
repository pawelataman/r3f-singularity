import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Experience from './Experience'
import { Canvas } from '@react-three/fiber'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Canvas camera={{ position: [0, -0.5, 1.75] }}>
      <Experience />
    </Canvas>
  </StrictMode>,
)
