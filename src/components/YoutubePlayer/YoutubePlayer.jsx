import React, { useState } from "react";
import YouTube from "react-youtube";
import "./YoutubePlayer.css"; // Import the CSS file

const YoutubePlayer = () => {
  const [videoId, setVideoId] = useState("ZCu2gwLj9ok");

  const handleInputChange = (event) => {
    setVideoId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const extractedVideoId = extractVideoIdFromUrl(videoId);
    setVideoId(extractedVideoId);
  };

  const extractVideoIdFromUrl = (url) => {
    const videoIdRegex = /[?&]v=([^&]+)/;
    const videoIdMatch = url.match(videoIdRegex);
    return videoIdMatch ? videoIdMatch[1] : "";
  };

  const opts = {
    height: "100%", // Adjust the height to your preference
    width: "100%", // Adjust the width to your preference
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="youtube-player">
      <div className="card bg-white  text-center youtube-player-size card-youtube">
        <h5 className="card-header fw-semibold text-dark">
        🎶 Import your own favourite music video 😊
        </h5>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="youtube-size">
                <YouTube videoId={videoId} opts={opts} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <input
                  className="form-control"
                  type="url"
                  placeholder="Paste a YouTube URL here to play"
                  value={videoId}
                  onChange={handleInputChange}
                />
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubePlayer;
