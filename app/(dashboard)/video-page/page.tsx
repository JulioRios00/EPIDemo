"use client";
import VideoPlayer from "@/components/VideoPlayer";

import { useState } from "react";

import { SelectVideo } from "@/components/SelectVideos";

export default function VideosPage() {
  const [videoName, setVideoName] = useState<string>("");

  const handleVideoChange = (value: string) => {
    setVideoName(value);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">PPE Violation Videos</h1>
      <SelectVideo videoName={videoName} onVideoChange={handleVideoChange} />
      <div className="grid grid-cols-1 gap-6 max-w-7xl">
        <VideoPlayer src={`/videos/${videoName}`} title={videoName} />
      </div>
    </div>
  );
}
