import React, { useRef, useEffect, useState } from 'react';
import './map.css';
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = "pk.eyJ1IjoieGVvbmd0eiIsImEiOiJja2pvdHpzbmQwOHIxMnRuNWJna3V5dGMwIn0.EqY0hfGvC6d0DTWsD-YSMw";

export default function Game2(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [latLng, setLatLng] = useState({lat: 0, lng: 0, zoom: 0});

    const [p1Loc, setP1Loc] = useState({lat: 0, lng: 0});
    const [p2Loc, setP2Loc] = useState({lat: 0, lng: 0});
    const [p3Loc, setP3Loc] = useState({lat: 0, lng: 0});
    const [p4Loc, setP4Loc] = useState({lat: 0, lng: 0});
    const [p5Loc, setP5Loc] = useState({lat: 0, lng: 0});


    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [latLng.lng, latLng.lat],
          zoom: latLng.zoom
        });
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
        var player1Marker = new mapboxgl.Marker({draggable: true, color: "#FF0000"})
        .setLngLat([0, 0])
        .addTo(map.current);
        var player2Marker = new mapboxgl.Marker({draggable: true, color: "#00FF00"})
        .setLngLat([0, 10])
        .addTo(map.current);
        var player3Marker = new mapboxgl.Marker({draggable: true, color: "#0000FF"})
        .setLngLat([10, 0])
        .addTo(map.current);
        var player4Marker = new mapboxgl.Marker({draggable: true, color: "#000000"})
        .setLngLat([10, 10])
        .addTo(map.current);
        var player5Marker = new mapboxgl.Marker({draggable: true, color: "#ED6F26"})
        .setLngLat([-10, -10])
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
          <div className="sidebar">
            Longitude: {latLng.lng} | Latitude: {latLng.lat} | Zoom: {latLng.zoom}
          </div>
          <div ref={mapContainer} className="map" />
        </div>
      );
}