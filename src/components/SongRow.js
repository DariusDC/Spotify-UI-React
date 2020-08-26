import React from "react";
import "./SongRow.css";

const SongRow = ({ track }) => {
  return (
    <div className="song-row">
      <img className="album" alt="album" src={track.album.images[0].url} />
      <div className="info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
