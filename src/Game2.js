import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import './map.css';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Game2(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(0);
    const [lat] = useState(0);
    const [zoom] = useState(1);

    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new maplibregl.Map({
          container: mapContainer.current,
          style: `https://demotiles.maplibre.org/style.json`,
          center: [lng, lat],
          zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
        var player1Marker = new maplibregl.Marker({draggable: true, color: "#FF0000"})
        .setLngLat([0, 0])
        .addTo(map.current);
        var player2Marker = new maplibregl.Marker({draggable: true, color: "#00FF00"})
        .setLngLat([0, 10])
        .addTo(map.current);
        var player3Marker = new maplibregl.Marker({draggable: true, color: "#0000FF"})
        .setLngLat([10, 0])
        .addTo(map.current);
        var player4Marker = new maplibregl.Marker({draggable: true, color: "#000000"})
        .setLngLat([10, 10])
        .addTo(map.current);

        player1Marker.on('dragend', () => {console.log(player1Marker.getLngLat())});
      });

      return (
        <div className="map-wrap">
          <div ref={mapContainer} className="map" />
        </div>
      );
}