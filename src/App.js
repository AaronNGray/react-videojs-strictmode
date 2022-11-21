import { useEffect } from "react";
import VideoJS from "./VideoJS";
import "./styles.css";

const VIDEOJS_OPTIONS = {
  autoplay: "play",
  controls: true,
  preload: "auto",
  width: 480,
  sources: [
    {
      src:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      type: "video/mp4"
    }
  ],
  html5: {
    nativeAudioTracks: false,
    nativeVideoTracks: false
  }
};

export default function App() {
  console.log("App.render");
  useEffect(() => {
    console.log("App.mount");
    return () => console.log("App.unmount");
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <VideoJS options={VIDEOJS_OPTIONS} />
    </div>
  );
}
