
import './App.css';

import React, { useState } from "react";



export default function App() {
  const [songs, setSong] = useState([]);
  const songsList = [
    {
      Romantic: [
        {
          song: "Kesariya",
          year: "2022",
          movie: "Brahmastra"
        },
        {
          song: "Galiyan",
          year: "2013",
          movie: "Galiyan"
        }
      ]
    },
    {
      Monsoon: [
        {
          song: "Tum se hi",
          year: "2009",
          movie: "Jab we met"
        },
        {
          song: "Bhage re man kahi",
          year: "2008",
          movie: "Chameli"
        }
      ]
    },
    {
      Commute: [
        {
          song: "Ye haseen waadiyan",
          year: "2001",
          movie: "Roja"
        },
        {
          song: "Ae mere Humsafar",
          year: "2002",
          movie: "Baazigar"
        }
      ]
    },
    {
      Party: [
        {
          song: "Psychon saiyaan",
          year: "2018",
          movie: "Saaho"
        },
        {
          song: "Param sundari",
          year: "2022",
          movie: "Mimi"
        }
      ]
    }
  ];

  const displaySongs = (t) => {
    console.log("t", t);
    var a = t[Object.keys(t)];
    console.log("a", a[0]);
    setSong(a);
    // a.map((b)=>setSong(b))
  };

  // console.log(songs)

  // console.log(songsList[0].Romantic[0].song);
  return (
    <div className="App">
      <div className="gaane">
        <span
          style={{
            marginTop: "1rem",
            fontSize: "xx-large",
            paddingRight: "0.5rem"
          }}
        >
          🎼
        </span>
        <h1>AccheGaane</h1>
      </div>
      {/* <div> */}
      <p>Checkout my favorite songs. Select a genre to get started.</p>
      {/* <div> */}
      {songsList.map((t, index) => {
        // console.log(t)
        return (
          <button onClick={() => displaySongs(t)}>{Object.keys(t)}</button>
        );
      })}

      <hr style={{ marginTop: "2rem", width: "80vw" }} />
      <ul>
      {songs.map((t) => {
        return (
          <>
          <li className="card">
            <h4>{t.song}</h4>
            <p>from {t.movie}</p>
            <p>released on {t.year}</p>
          </li>
          <br/>
          </>
        );
      })}
      </ul>
    </div>
  );
}

