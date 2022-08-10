import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import './LocateMe.css';
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = "pk.eyJ1IjoieGVvbmd0eiIsImEiOiJja2pvdHpzbmQwOHIxMnRuNWJna3V5dGMwIn0.EqY0hfGvC6d0DTWsD-YSMw";

export default function Game2(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [latLng, setLatLng] = useState({lat: 0, lng: 0, zoom: 0});

    const [p1Loc, setP1Loc] = useState({lat: 0, lng: 0}); // red, green, blue, purple, orange
    const [p2Loc, setP2Loc] = useState({lat: 0, lng: 10});
    const [p3Loc, setP3Loc] = useState({lat: 10, lng: 0});
    const [p4Loc, setP4Loc] = useState({lat: 10, lng: 10});
    const [p5Loc, setP5Loc] = useState({lat: 5, lng: 5});

    const [ansLat, setAnsLat] = useState(0);
    const [ansLng, setAnsLng] = useState(0);

    const getClosest = () => {
      const locs = [p1Loc, p2Loc, p3Loc, p4Loc, p5Loc];
      const results = [0, 0, 0, 0, 0];

      let latAns = ansLat / (180/Math.PI);
      let lngAns = ansLng / (180/Math.PI);

      let min = 100000000000000;
      let min2 = 100000000000000;

      for(let i = 0; i < locs.length; i++) {
        let lat = locs[i].lat / (180/Math.PI);
        let lng = locs[i].lng / (180/Math.PI);
        let dist = 3963.0 * Math.acos(Math.sin(latAns) * Math.sin(lat) + Math.cos(latAns) * Math.cos(lat) * Math.cos(lngAns - lng))
        results[i] = dist;
        if(dist < min) {
          min2 = min
          min = dist
        } else if(dist < min2) {
          min2 = dist
        }
      }
      const winner = results.indexOf(min) + 1;
      const secondPlace = results.indexOf(min2) + 1

      alert("Player " + winner + " WINS! " + min.toFixed(3) + " miles away. \nPlayer " + secondPlace + " was in second place. " + (min2 - min).toFixed(3) + " miles away from Player " + winner);
    }

    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [latLng.lng, latLng.lat],
          zoom: latLng.zoom
        });
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
        var player1Marker = new mapboxgl.Marker({draggable: true, color: "#ed211a"})
        .setLngLat([0, 0])
        .addTo(map.current);
        var player2Marker = new mapboxgl.Marker({draggable: true, color: "#24ed45"})
        .setLngLat([0, 10])
        .addTo(map.current);
        var player3Marker = new mapboxgl.Marker({draggable: true, color: "#469fe3"})
        .setLngLat([10, 0])
        .addTo(map.current);
        var player4Marker = new mapboxgl.Marker({draggable: true, color: "#a881f7"})
        .setLngLat([10, 10])
        .addTo(map.current);
        var player5Marker = new mapboxgl.Marker({draggable: true, color: "#ED6F26"})
        .setLngLat([5, 5])
        .addTo(map.current);

        player1Marker.on('dragend', () => {setP1Loc({lat: player1Marker.getLngLat().lat, lng: player1Marker.getLngLat().lng})});
        player2Marker.on('dragend', () => {setP2Loc({lat: player2Marker.getLngLat().lat, lng: player2Marker.getLngLat().lng})});
        player3Marker.on('dragend', () => {setP3Loc({lat: player3Marker.getLngLat().lat, lng: player3Marker.getLngLat().lng})});
        player4Marker.on('dragend', () => {setP4Loc({lat: player4Marker.getLngLat().lat, lng: player4Marker.getLngLat().lng})});
        player5Marker.on('dragend', () => {setP5Loc({lat: player5Marker.getLngLat().lat, lng: player5Marker.getLngLat().lng})});

        map.current.on('move', () => {
          setLatLng({
            lat: map.current.getCenter().lng.toFixed(4),
            lng: map.current.getCenter().lat.toFixed(4),
            zoom: map.current.getZoom().toFixed(2)
          })
        })
      
      });

      return (
        <div className="map-wrap">
          <Helmet>
            <title>LocateMe</title>
            <meta name="description" content="LocateMe is where users guess and denote on the map where they think a random point on streetview is, and the closest person wins."></meta>
            <meta name="keywords" content="LocateMe Family Game"></meta>
          </Helmet>

          <h2 className='titleText'>LocateMe</h2>

          <div className="sidebar">
          Latitude: {latLng.lat} | Longitude: {latLng.lng} | Zoom: {latLng.zoom}
          </div>

          <div className="ansLoc">
            <div>
              <label className="ansLabel" htmlFor="ansLat">Latitude</label>
              <input
              type="number"
              className="locInput"
              name="ansLat"
              value={ansLat}
              maxLength="10"
              onChange={(e) => {setAnsLat(e.target.value)}}
              />
            </div>
            <div>
              <label className="ansLabel" htmlFor="ansLng">Longitude</label>
              <input
              type="number"
              className="locInput"
              name="ansLng"
              value={ansLng}
              maxLength="10"
              onChange={(e) => {setAnsLng(e.target.value)}}
              />
            </div>
            <button onClick={() => {getClosest()}} className="distBtn">Get Winner</button>
            <p className="cordInstruct">Add - for Southern <br/>and Western Hemisphere</p>
          </div>

          <div className="playerColors">
            <p style={{color: "#ed211a"}}>Player 1</p>
            <p style={{color: "#24ed45"}}>Player 2</p>
            <p style={{color: "#469fe3"}}>Player 3</p>
            <p style={{color: "#a881f7"}}>Player 4</p>
            <p style={{color: "#ED6F26"}}>Player 5</p>
          </div>

          <div ref={mapContainer} className="map" />
        </div>
      );
}