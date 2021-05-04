import React, { useState } from 'react';
import CameraIcon from './camera-icon';
import { CamInfo, ICamInfo } from './cam-info';

export interface IMapMarkerProps {
  label?: string;
  image?: string;
  iconSize?: [number, number];
  iconAnchor?: [number, number];
  popupAnchor?: [number, number];
  cam?: ICamInfo;
}

export const MapMarker: React.FC<IMapMarkerProps> = ({
  label,
  image = CameraIcon,
  iconSize = [25, 25],
  cam,
  ...props
}) => {
  if (label === undefined && cam !== undefined) {
    label = cam.properties.label.text;
  }

  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          if (cam === undefined) {
            console.log('Property "cam" not defined - no info available.');
          }
          setShowInfo(true);
        }}
        css={`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          :hover {
            cursor: ${cam !== undefined ? 'pointer' : 'auto'};
            .styled-hover-icon-wrapper {
              transform: scale(1.1);
            }
            .styled-hover-icon {
              filter: drop-shadow(0 0.25rem 0.07rem rgba(0, 0, 0, 0.075));
            }
            .styled-hover-text {
              filter: drop-shadow(0 0.125rem 0.09rem rgba(0, 0, 0, 0.5));
              font-size: 0.8rem;
            }
          }
        `}
        {...props}
      >
        <div
          className="styled-hover-icon-wrapper"
          css={`
            width: ${iconSize[0]}px;
            height: ${iconSize[1]}px;
          `}
        >
          <CameraIcon
            className="not-selectable styled-hover-icon"
            css={`
              width: 100%;
              height: 100%;
              filter: drop-shadow(0 0.15rem 0.0375rem rgba(0, 0, 0, 0.15));
            `}
          />
        </div>
        <Label
          className="styled-hover-text"
          css={`
            font-size: 0.75rem;
            filter: drop-shadow(0 0.075rem 0.06rem rgba(0, 0, 0, 0.625));
          `}
        >
          {label}
        </Label>
        {props.children}
      </div>
      {cam !== undefined && (
        <CamInfo show={showInfo} onHide={() => setShowInfo(false)} cam={cam} />
      )}
    </>
  );
};

const Label: React.FC<
  JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  if (props.children === undefined) return null;
  return (
    <div {...props}>
      <div
        className="not-selectable text-light"
        css={`
          text-align: center;
          font-weight: 400;
        `}
      >
        {props.children}
      </div>
    </div>
  );
};
