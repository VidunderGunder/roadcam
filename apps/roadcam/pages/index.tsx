import { MapView } from '@teleplan-assignment/components';

export default function Home() {
  return <MapView mapboxToken={process.env.MAPBOX_TOKEN} />;
}
