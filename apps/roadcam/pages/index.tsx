import { RoadCamMap, ICamInfo } from '@teleplan-assignment/components';
import cameras from './road-cameras.json';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <RoadCamMap
      mapboxToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      cameras={cameras.features as ICamInfo[]}
    />
  );
}
