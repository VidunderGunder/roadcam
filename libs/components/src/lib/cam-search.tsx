import React, { Dispatch, Fragment, useMemo, useState } from 'react';
import { CamInfo, ICamInfo } from './cam-info';
import distance, { distanceSq } from './distance';
import { SearchBar } from './search-bar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export interface CamSearchProps {
  /** Current user position */
  position: [number, number];
  cameras?: ICamInfo[];
  onSearch?: () => void;
  onSearchEnd?: () => void;
}

type CommonProps = JSX.IntrinsicAttributes &
  React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement>;

export const CamSearch: React.FC<CamSearchProps & CommonProps> = ({
  position = [0, 0],
  cameras = [],
  onSearch = () => null,
  onSearchEnd = () => null,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const [cam, setCam]: [ICamInfo | null, Dispatch<ICamInfo | null>] = useState(
    null
  );
  const [term, setTerm] = useState('');
  const [focus, setFocus] = useState(false);

  const handleFocus = (state: boolean) => {
    if (state) {
      onSearch();
    } else {
      onSearchEnd();
    }
    setFocus(state);
  };

  const termLowerCase = term.toLowerCase();
  const sortedCameras = useMemo(
    () =>
      cameras.sort((a, b) => {
        // Using squared distance to skimp on square roots
        return (
          distanceSq([...position], [...a.geometry.coordinates]) -
          distanceSq([...position], [...b.geometry.coordinates])
        );
      }),
    [cameras, position]
  );
  const filteredCameras = useMemo(() => {
    if (termLowerCase === '') return sortedCameras;
    return sortedCameras.filter((cam) => {
      return cam.properties.label.text.toLowerCase().includes(termLowerCase);
    });
  }, [sortedCameras, termLowerCase]);

  const CameraTable: React.VFC<CommonProps> = (props) => {
    return (
      <div {...props}>
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="shadow mb-0 w-100"
          style={{ fontSize: '0.75rem' }}
        >
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Coordinates</th>
              <th scope="col">Distance</th>
            </tr>
          </thead>
          <tbody>
            {filteredCameras.map((cam) => (
              <tr
                key={['search', 'results', cam.id].join('-')}
                onClick={() => {
                  setCam(cam);
                  setShow(true);
                  handleFocus(false);
                }}
                style={{ cursor: 'pointer' }}
                className="not-selectable"
              >
                <td>{cam.id}</td>
                <td>{cam.properties.label.text}</td>
                <td>
                  {cam.geometry.coordinates.map((e) => e.toFixed(1)).join(', ')}
                </td>
                <td>
                  {distance(
                    [...position],
                    [...cam.geometry.coordinates]
                  ).toFixed(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  const CloseButton = () => {
    if (!focus) return null;
    return (
      <>
        <div style={{ width: '0.25rem' }} />
        <Button
          variant="danger"
          onClick={() => {
            if (focus) handleFocus(false);
          }}
        >
          Close
        </Button>
      </>
    );
  };

  const showCameras = cameras.length !== 0 && focus;

  return (
    <div {...props}>
      <div style={{ display: 'flex' }}>
        <SearchBar
          style={{ width: '100%' }}
          label={
            cameras.length === 0 ? 'No cameras available' : 'Search cameras...'
          }
          inputProps={{
            onFocus: () => {
              if (!focus) handleFocus(true);
            },
            disabled: cameras.length === 0,
            value: term,
            onChange: (e) => setTerm(e.target.value),
          }}
        />
        <CloseButton />
      </div>
      {showCameras && (
        <CameraTable
          style={{ height: '100%' }}
          className="mt-1 overflow-auto"
        />
      )}
      {cam !== null && (
        <CamInfo cam={cam} show={show} onHide={() => setShow(false)} />
      )}
    </div>
  );
};
