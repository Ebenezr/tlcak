import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { clearInterval } from "timers";

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface VideosData {
  items: Video[];
}

const CHANNEL_ID = "UC_CHANNEL_ID";
const API_KEY = "YOUR_API_KEY";

const YouTubeVideos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const fetchVideos = async () => {
    try {
      const res: AxiosResponse<VideosData> = await axios.get<VideosData>(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`
      );
      setVideos(res.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchVideos();
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <p>{video.snippet.title}</p>
        </div>
      ))}
    </div>
  );
};

export default YouTubeVideos;
