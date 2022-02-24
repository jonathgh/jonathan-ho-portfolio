import { Canvas } from '@react-three/fiber'

const Scene = () => {
    return (
        <Canvas>
            <mesh>
                <planeBufferGeometry>

                </planeBufferGeometry>
            </mesh>
        </Canvas>
    ); 
};

const App = () => {
    return <Scene />;
};

export default App;
