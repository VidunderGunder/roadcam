import React from 'react';
import useHover from './hooks/useHover';
import CameraIcon from './camera-icon';
import NotSelectable from './not-selectable';
import { css } from 'styled-components';

export interface IMapMarkerProps {
  label?: string;
  image?: string;
  iconSize?: [number, number];
  iconAnchor?: [number, number];
  popupAnchor?: [number, number];
}

export const MapMarker: React.FC<IMapMarkerProps> = ({
  label,
  iconAnchor,
  popupAnchor,
  image = CameraIcon,
  iconSize = [25, 25],
  ...props
}) => {
  if (iconAnchor === undefined) iconAnchor = [iconSize[0] / 2, iconSize[1] / 2];
  if (popupAnchor === undefined) popupAnchor = [0, -iconSize[1] / 2];

  const [hoverRef, hover] = useHover();

  return (
    <div
      css={`
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
      ref={hoverRef}
      {...props}
    >
      <div
        css={`
          width: ${iconSize[0]}px;
          height: ${iconSize[1]}px;
          transform: scale(${hover ? 1.1 : 1.0});
        `}
      >
        <CameraIcon
          className="not-selectable"
          style={{
            width: '100%',
            height: '100%',
            filter: hover
              ? `drop-shadow(0 0.25rem 0.0700rem rgba(0, 0, 0, 0.075))`
              : `drop-shadow(0 0.15rem 0.0375rem rgba(0, 0, 0, 0.15))`,
          }}
        />
      </div>
      <Label>{label}</Label>
      {props.children}
    </div>
  );
};

const Label: React.FC = (props) => {
  if (props.children === undefined) return null;
  return (
    <NotSelectable
      css={`
        text-align: center;
        font-weight: 500;
        font-size: 0.75rem;
        filter: drop-shadow(0 0.075rem 0.06rem white);
      `}
      {...props}
    >
      {props.children}
    </NotSelectable>
  );
};
