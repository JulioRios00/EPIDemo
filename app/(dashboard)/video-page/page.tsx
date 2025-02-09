"use client";
import VideoPlayer from "@/components/VideoPlayer";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function VideosPage() {
  const [videoName, setVideoName] = useState<string>("");
  const [availableVideos, setAvailableVideos] = useState<string[]>([]);

  //Fazer com react query
  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => {
        setAvailableVideos(data.videos);
        if (data.videos.length > 0) {
          setVideoName(data.videos[0]);
        }
      });
  }, []);

  const handleVideoChange = (value: string) => {
    setVideoName(value);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">PPE Violation Videos</h1>
      <Select defaultValue={videoName} onValueChange={handleVideoChange}>
        <SelectTrigger className="w-[180px] mb-4 p-2">
          <SelectValue placeholder="Select a video" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Videos</SelectLabel>
			{availableVideos.map((video) => (
				<SelectItem key={video} value={video}>
					{video}
				</SelectItem>
			))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="grid grid-cols-1 gap-6 max-w-7xl">
        <VideoPlayer
          src={`/videos/${videoName}`}
          title={videoName}
        />
      </div>
    </div>
  );
}
