import { useEffect, useRef, useState } from "react";
import { formatTimeAgo } from "../utils/formatTimeAgo";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    name: string;
    id: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

const VideoGridItem = ({
  id,
  title,
  channel,
  views,
  postedAt,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div className="flex flex-col gap-4 max-w-[300px]">
      <a
        href={`.watch?v=${id}`}
        onMouseEnter={() => setIsVideoPlaying(true)}
        onMouseLeave={() => setIsVideoPlaying(false)}
        className="relative aspect-video"
      >
        <div>
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            className={`object-cover rounded-xl ${
              isVideoPlaying ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          playsInline
          className={`absolute left-0 top-0 transition-opacity object-cover rounded-xl duration-200 ${
            isVideoPlaying ? "opacity-100" : "opacity-0"
          }`}
        />
      </a>
      <div className="flex gap-2">
        {/* <div className="flex items-center flex-shrink-0"> */}
        <img
          src={channel.profileUrl}
          alt="profile_pic"
          className="rounded-full w-11 h-11"
        />
        {/* </div> */}
        <div className="flex flex-col gap-2 pr-1">
          <p className="text-m font-serif font-semibold">{title}</p>
          <p className="text-m font-serif">{channel.name}</p>
          <p className="text-m ">
            <span className="font-semibold">
              {VIEW_FORMATTER.format(views)}
            </span>{" "}
            Views • {formatTimeAgo(postedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
