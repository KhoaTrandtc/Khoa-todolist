import React, { useRef, useState, useEffect } from "react";
import "./Music.css"; // Import your CSS file
import angel from "../../assets/music/angel.mp3";
import comthru from "../../assets/music/comethru.mp3";
import cupid from "../../assets/music/cupid.mp3";
import goldenhour from "../../assets/music/goldenhour.mp3";
import makingmyway from "../../assets/music/makingmyway.mp3";
import nevada from "../../assets/music/nevada.mp3";
import whatitis from "../../assets/music/whatitis.mp3";

// image
import angelImage from "../../assets/image/angel.jpg";
import comthruImage from "../../assets/image/comethru.jpg";
import goldenhourImage from "../../assets/image/goldenhour.jpg";
import whatitisImage from "../../assets/image/whatitis.jpg";




import YoutubePlayer from "../YoutubePlayer/YoutubePlayer";

const Music = () => {
  const songs = [
    {
      name: "Angel",
      audio: angel,
      image: angelImage,
      author: "NLE Choppa,.. ",
    },
    {
      name: "Comethru",
      audio: comthru,
      image: comthruImage,
      author: "Jeremy Zucker",
    },
    {
      name: " Goldenh...",
      audio: goldenhour,
      image: goldenhourImage,
      author: "JVKE",
    },
    {
      name: "What it is ?",
      audio: whatitis,
      image: whatitisImage,
      author: "Doechii",
    },
    // ... (other songs)
  ];
  const [currentSong, setCurrentSong] = useState([0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const [songListVisible, setSongListVisible] = useState(false);

  const toggleSongList = () => {
    setSongListVisible(!songListVisible);
  };

  useEffect(() => {
    // Load and play the audio when currentSong changes
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    // Listen for the "ended" event on the audio element
    audioRef.current.addEventListener("ended", handleNextSong);

    return () => {
      // Remove the "ended" event listener when the component unmounts
      audioRef.current.removeEventListener("ended", handleNextSong);
    };
  }, [currentSong, isPlaying, rotationAngle]); // Add currentSong to the dependency array

  useEffect(() => {
    // Rotate the image when isPlaying changes
    if (isPlaying) {
      const interval = setInterval(() => {
        setRotationAngle((prevAngle) => prevAngle + 1); // Increment the angle
      }, 30);

      return () => clearInterval(interval); // Cleanup on component unmount or when isPlaying changes
    }
  }, [isPlaying]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);

      // Calculate the percentage of song progress
      const progressPercentage =
        (currentTime / audioRef.current.duration) * 100;
      setProgressWidth(progressPercentage);
    };

    const handleAudioLoad = () => {
      setIsAudioLoaded(true);
    };

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("loadeddata", handleAudioLoad);

    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.removeEventListener("loadeddata", handleAudioLoad);
    };
  }, []);

  const handlePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();

      setIsPlaying(false);
    }
  };

  const handleLoopToggle = () => {
    setIsLooping(!isLooping);
    audioRef.current.loop = !isLooping;
  };

  const handleRandomPlay = () => {
    // Generate a random audio source (replace this logic with your own)
    const randomcurrentSong = "/path-to-random-audio-file.mp3";
    setCurrentSong(randomcurrentSong);

    // Play the newly selected audio
    audioRef.current.load();
    audioRef.current.play();
  };
  const handlePreviousSong = () => {
    const newIndex = (currentSong - 1 + songs.length) % songs.length;
    setCurrentSong(newIndex); // Only set the new index here
    audioRef.current.src = songs[newIndex].audio; // Update the audio source
    audioRef.current.load();
    audioRef.current.addEventListener("canplaythrough", () => {
      if (isPlaying) {
        // Check if the audio was playing before changing the song
        audioRef.current.play();
      }
      setIsPlaying(true);
    });
  };

  const handleNextSong = () => {
    const newIndex = (currentSong + 1) % songs.length;
    setCurrentSong(newIndex); // Only set the new index here
    audioRef.current.src = songs[newIndex].audio; // Update the audio source
    audioRef.current.load();
    audioRef.current.addEventListener("canplaythrough", () => {
      if (isPlaying) {
        // Check if the audio was playing before changing the song
        audioRef.current.play();
      }
      setIsPlaying(true);
    });
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSeekChange = (event) => {
    const newTime = parseFloat(event.target.value);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  return (
    <div className="music-player card container row  text-primary bg-light mt-5 rounded-3 shadow-lg  ">
      <p class="card-h fw-semibold card-border fs-5 text-dark width-music ">
        🎵 Music to chill~{" "}
      </p>
      <div className="row card-body text-primary p-3 mt-3 mb-3">
        <div class="col-6 col-md-4 ">
          <div className="cd cd-control">
            <div
              className="cd-thumb"
              style={{
                backgroundImage: `url(${songs[currentSong].image})`,
                transform: `rotate(${rotationAngle}deg)`,
              }}
            ></div>
          </div>
        </div>
        <div className="col-md-8 d-grid gap-2 song-control">
          <div className="song-name">
            <h5 className="text-dark fw-bolder">{songs[currentSong].name}</h5>
            <p>{songs[currentSong].author}</p>
          </div>
          <div className="col input-group btn-group margin-left height song-controls">
            <div
              onClick={handlePreviousSong}
              className=" fs-3 btn-outline-primary btn-prev"
            >
              <i class="bi bi-skip-start-fill"></i>
            </div>
            <div
              onClick={handlePlay}
              className="fs-3 btn-outline-primary btn-prev btn-play"
            >
              {isPlaying ? (
                <i className="bi bi-pause-circle-fill"></i>
              ) : (
                <i className="bi bi-play-circle-fill"></i>
              )}
            </div>
            <div
              onClick={handleNextSong}
              className=" fs-3 btn-outline-primary btn-prev "
            >
              <i class="bi bi-skip-end-fill"></i>
            </div>
          </div>
          {isAudioLoaded && (
            <div className="music-range">
              <div className="progress-bar-container">
                <progress
                  className="progress-bar"
                  value={currentTime}
                  max={audioRef.current.duration}
                ></progress>
              </div>
              <input
                type="range"
                min="0"
                max={audioRef.current.duration}
                value={currentTime}
                onChange={handleSeekChange}
                className="seek-bar"
              />
            </div>
          )}
          <div className="volume-control">
            {volume === 0
              ? "🔇"
              : volume > 0 && volume < 0.1
              ? "🔉"
              : volume === 1
              ? "🔊"
              : "🔉"}

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-bar"
            />
          </div>
        </div>
              
        <audio
          ref={audioRef}
          src={songs[currentSong].audio}
          currentTime={currentTime}
          onEnded={handleNextSong}
        />
      </div>
      <YoutubePlayer volume={volume} />
    </div>
  );
};

export default Music;
