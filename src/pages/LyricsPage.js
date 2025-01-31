import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const LyricsPage = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const response = await fetch('/songs.json');
        const data = await response.json();
        const songData = data.songs.find(song => song.id === parseInt(id));

        if (songData) {
          setSong(songData);
        } else {
          setError('Lyrics not found');
        }
      } catch (error) {
        setError('Failed to load lyrics');
      }
    };

    fetchLyrics();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!song) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lyrics-container">
      <h1>{song.title}</h1>
      <p><strong>పల్లవి:</strong> <pre>{song.intro}</pre></p>
      {song.verses.map((verse) => (
        <div key={verse.number}>
          <h3>{verse.number}</h3>
          <ul>
            {verse.lines.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default LyricsPage;
