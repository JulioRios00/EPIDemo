"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/file"), {
  ssr: false,
});

interface VideoPlayerProps {
  src: string;
  title?: string;
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  return (
    <div className="video-player-wrapper w-full">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
        <ReactPlayer
          url={[{ src, type: "video/mp4" }]}
          width="100%"
          height="100%"
          controls={true}
          playing={false}
        />
      </div>
    </div>
  );
}
