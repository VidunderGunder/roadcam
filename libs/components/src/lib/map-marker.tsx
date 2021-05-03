import React from 'react';
import useHover from './hooks/useHover';
// import icon from './resources/camera-icon.png';

export interface IMapMarkerProps {
  id: string;
  coordinates: [number, number];
  label?: string;
  image?: string;
  iconSize?: [number, number];
  iconAncor?: [number, number];
  popupAnchor?: [number, number];
}

export default MapMarker;
export const MapMarker: React.FC<IMapMarkerProps> = ({
  id,
  coordinates,
  label,
  iconAncor,
  popupAnchor,
  // image = icon,
  iconSize = [40, 40],
  ...props
}) => {
  if (iconAncor === undefined) iconAncor = [iconSize[0] / 2, iconSize[1] / 2];
  if (popupAnchor === undefined) popupAnchor = [0, -iconSize[1] / 2];

  const [hoverRef, hover] = useHover();

  return (
    <div
      className="not-selectable"
      style={{
        cursor: hover && 'pointer',
      }}
      ref={hoverRef}
      {...props}
    >
      <div
        style={{
          width: iconSize[0],
          height: iconSize[1],
          transform: hover && 'scale(1.1)',
        }}
      >
        {/* <img
          className="not-selectable"
          src={image}
          alt="map-icon-marker"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            filter: hover
              ? `drop-shadow(0 0.25rem 0.0700rem rgba(0, 0, 0, 0.075))`
              : `drop-shadow(0 0.15rem 0.0375rem rgba(0, 0, 0, 0.15))`,
          }}
        /> */}
      </div>
      <Label>{label}</Label>
      {props.children}
    </div>
  );
};

const Label: React.FC = (props) => {
  if (props.children === undefined) return null;
  return (
    <div
      style={{
        textAlign: 'center',
        fontWeight: 500,
        fontSize: '1rem',
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};
