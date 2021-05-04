import { MapView } from '@teleplan-assignment/components';

export default function Home() {
  return (
    <>
      {/* <MapMarker /> */}
      <MapView mapboxToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN} />
    </>
  );
}
