import Home from '@/app/modules/home/Home';
import GeoCodeMap from '../../common/components/maps/GeoCodeMap';
import GoogleReactMap from '@/app/common/components/maps/GoogleReactMap';
import ReactDirectionsMap from '@/app/common/components/maps/ReactDirectionsMap';
import AllDirections from '@/app/common/components/maps/AllDirections';
import RealTimeMap from '@/app/common/components/maps/RealTimeMap';

export default function home({}) {
  return (
    <div className="h-full p-8 2xl:w-11/12 mx-auto ">
      <Home />
      {/* <GeoCodeMap address="Bonamoussadi, Douala" /> */}
      {/* {<GoogleReactMap />} */}

      {/* <AllDirections /> */}

      <RealTimeMap />
    </div>
  );
}
