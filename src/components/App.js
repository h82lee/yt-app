import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../Hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("dogs");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            {" "}
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            {/* //when there is only one thing being passed, you can condense the
            function //(video)=>{setSelectedVideo(video)} = setSelectedVideo */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
