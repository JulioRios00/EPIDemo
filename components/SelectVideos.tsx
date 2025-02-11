"use client";
import React from "react";
import { useVideos } from "@/app/queries/index";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectVideoProps {
  videoName: string;
  onVideoChange: (value: string) => void;
}

export function SelectVideo({ videoName, onVideoChange }: SelectVideoProps) {
  const { data } = useVideos();
  const defaultVideo = data?.videos?.[0] || '';

  React.useEffect(() => {
    if (data?.videos && data.videos.length > 0 && !videoName) {
      onVideoChange(defaultVideo);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.videos]);

  return (
    <Select defaultValue={videoName} onValueChange={onVideoChange}>
      <SelectTrigger className="w-[180px] mb-4 p-2">
        <SelectValue placeholder={videoName || defaultVideo} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Videos</SelectLabel>
          {data?.videos?.map((video) => (
            <SelectItem key={video} value={video}>
              {video}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
