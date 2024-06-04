import { Map } from '@vis.gl/react-google-maps';
import AdvancedMarkerWrapper from './AdvancedMarkerWrapper';
import { usePointOfSales } from '@/app/hooks/commons/usePointOfSales';
import InfoViewRoutes from '../infoView/InfoViewRoutes';
import { useRoutePlanning } from '@/app/hooks/commons/useRoutePlanning';

export default function PosMapRoutes() {
  const position = { lat: 3.8852761566538545, lng: 11.502079803888337 };

  const { pointOfSales } = usePointOfSales();
  // console.log('List of point of sales in state', pointOfSales);
  return (
    <Map center={position} zoom={15} mapId={'6fc7264e643ee8b1'}>
      {pointOfSales?.map((pos: any) => {
        // console.log('position of poss', pos.position);
        return (
          <AdvancedMarkerWrapper
            position={pos.position}
            active={true}
            key={pos.id}
            markerColor="red"
          >
            <InfoViewRoutes shopDetails={pos} />
          </AdvancedMarkerWrapper>
        );
      })}
    </Map>
  );
}
