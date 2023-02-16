import { useEffect, useRef } from "react";
import "./Map.css";
import React from "react";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const Map = new window.google.map.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: Map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
