import { ICamInfo, RoadCamMap } from '@teleplan-assignment/components';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from 'use-http';

export default function Home() {
  // const uri = '/api/cameras';
  const uri = '/api/cameras-mongodb';
  const { loading, error, data } = useFetch(uri, {}, []);
  return (
    <RoadCamMap
      mapboxToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      cameras={(data?.features ?? []) as ICamInfo[]}
      loading={loading}
      error={!!error}
    />
  );
}
