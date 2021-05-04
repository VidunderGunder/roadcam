import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

export interface ICamInfo {
  type: string;
  properties: {
    tags: unknown[];
    symbol: string;
    label: { text: string };
    locked: boolean;
    video: string;
    photo: string;
    customPopup: string;
    layerId: string;
    icon: {
      iconUrl: string;
      iconRetinaUrl: string;
      iconSize: [number, number];
      iconAnchor: [number, number];
      popupAnchor: [number, number];
    };
  };
  id: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
}

export interface CamInfoProps {
  cam: ICamInfo;
  show: boolean;
  onHide(): void;
}

export const camExample: ICamInfo = {
  type: 'Feature',
  properties: {
    tags: ['some', 'tags', 'yo'],
    symbol: 'marker_13',
    label: { text: 'Aker sykehus' },
    locked: true,
    video: 'https://kamera.vegvesen.no/public/0329002_1/manifest.m3u8',
    photo: 'http://webkamera.vegvesen.no/kamera?id=297634',
    customPopup:
      "<img width='300px' src='http://webkamera.vegvesen.no/kamera?id=297634'>",
    layerId: 'mr5bw:8c2f90e92f_167a2c29129',
    icon: {
      iconUrl: '/images/markers/marker_13.png',
      iconRetinaUrl: '/images/markers@2x/marker_13.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20],
    },
  },
  id: '297634',
  geometry: { type: 'Point', coordinates: [10.798009, 59.941025] },
};

export const CamInfo: React.VFC<CamInfoProps> = ({
  cam,
  show,
  onHide,
  ...props
}) => {
  const [showData, setShowData] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoConnected, setVideoConnected] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div {...props}>
      <Modal
        show={show}
        centered
        onHide={onHide}
        contentClassName="bg-dark text-light shadow-lg"
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          className="px-3 py-2 border-dark"
        >
          <Modal.Title style={{ fontWeight: 400 }}>
            {cam.properties.label.text.toUpperCase()}
          </Modal.Title>
        </Modal.Header>
        {cam.properties.video && !videoError ? (
          <>
            <div hidden={!videoConnected}>
              <ReactPlayer
                playing
                onReady={() => setVideoConnected(true)}
                volume={0}
                muted={true}
                url={cam.properties.video}
                onError={() => setVideoError(true)}
                width="100%"
                height="100%"
              />
            </div>
            <div
              className={`text-${
                videoConnected ? 'success' : 'muted'
              } text-center w-100`}
            >
              <small>
                <i>
                  {videoConnected
                    ? 'Video stream connected'
                    : 'Connecting to video stream...'}
                </i>
              </small>
            </div>
          </>
        ) : !imageError ? (
          <div className="w-100">
            <img
              src={cam.properties.photo}
              alt="road-camera"
              className="w-100"
              onError={() => setImageError(true)}
            />
            <div className="text-warning text-center w-100">
              <small>
                <i>
                  Video stream unavailable - displaying available still image.
                </i>
              </small>
            </div>
          </div>
        ) : (
          <div className="text-danger text-center w-100">
            <small>
              <i>Video stream and fallback image unavailable.</i>
            </small>
          </div>
        )}
        <small className="p-3">
          <Table
            striped
            bordered
            variant="dark"
            className="shadow-sm mb-0"
            responsive
          >
            <tbody>
              <tr>
                <td>ID</td>
                <td>{cam.id}</td>
              </tr>
              <tr>
                <td>Coordinates</td>
                <td>{cam.geometry.coordinates.join(', ')}</td>
              </tr>
              {cam.properties.tags.length > 0 && (
                <tr>
                  <td>Tags</td>
                  <td>{cam.properties.tags.join(', ')}</td>
                </tr>
              )}
            </tbody>
          </Table>

          <Button
            className="w-100 shadow-sm mt-3"
            style={{
              borderColor: '#373B3E',
              borderRadius: 0,
            }}
            variant="dark"
            onClick={() => setShowData(!showData)}
          >
            {showData ? 'Hide' : 'Show'} API-data
          </Button>
          <Card
            hidden={!showData}
            className="shadow-sm"
            style={{
              backgroundColor: '#2C3034',
              borderColor: '#373B3E',
              borderRadius: 0,
            }}
          >
            <Card.Body>
              <pre
                className="text-light"
                style={{
                  whiteSpace: 'pre-wrap',
                }}
              >
                {JSON.stringify(cam, null, 2)}
              </pre>
            </Card.Body>
          </Card>
        </small>
      </Modal>
    </div>
  );
};
