import "./videoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="video-item item"
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

//for onClick, if you do not send an arrow function, only onVideoSelect gets sent without the video
