import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Card, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
  })
  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />
}
const wordList = [
  'React',
  'TypeScript',
  'Web3',
  'Git',
  'Django',
  'Linux',
  'Netlify',
  'Node',
  'Jamstack',
  'Microservices',
  'Docker',
  'AWS',
  'Ethereum',
  'Solana',
  'Rust',
  'Bash',
  'NFT',
  'Solidity',
  'Anchor'
]
function generateWord() {
  return wordList[randInt(wordList.length)]
}
function randInt(lessThan) {
  return Math.floor(Math.random() * lessThan)
}

function Cloud({ count = 4, radius = 10 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), generateWord()])
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => <Word onClick={() => console.log('omg')} key={index} position={pos} children={word} />)
}


const Home = ({
}) => {

  return (
    <Layout location={"/"} title={"Home"}>
      <Row>
        <Col xs={12} className="text-center mb-5">
          <h1><b>Hello,</b></h1>
        </Col>
        <Col xs={12} className="text-center" style={{ height: window.innerWidth > 600 ? 700 : 250 }}>
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
            <fog attach="fog" args={['#202025', 0, 80]} />
            <Cloud count={12} radius={24} />
            <TrackballControls noZoom={true} />
          </Canvas>
        </Col>
        <Col xs={12} style={{ height: 300 }} className="text-center">
        </Col>
      </Row>
    </Layout>
  )
}

export default Home