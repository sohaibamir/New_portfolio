import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [playingMusic, setPlayingMusic] = useState(false);

  useEffect(() => {
    if (playingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [playingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth > 965) {
      screenScale = [1, 1, 0.95];
    } else if (window.innerWidth > 840) {
      screenScale = [0.9, 1, 0.9];
    } else if (window.innerWidth > 675) {
      screenScale = [0.8, 1, 0.8];
    } else if (window.innerWidth > 550) {
      screenScale = [0.7, 1, 0.7];
    } else {
      screenScale = [0.55, 1, 0.55];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth > 965) {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    } else if (window.innerWidth > 840) {
      screenScale = [2.4, 2.4, 2.4];
      screenPosition = [0, -3.3, -3.3];
    } else if (window.innerWidth > 675) {
      screenScale = [1.9, 1.9, 1.9];
      screenPosition = [0, -2.6, -2.6];
    } else if (window.innerWidth > 550) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -2, -2];
    } else {
      screenScale = [1.2, 1.2, 1.2];
      screenPosition = [0, -1.8, -1.8];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={!playingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setPlayingMusic(!playingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
