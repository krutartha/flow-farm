import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("../../public/assets/logo.png"),
  iconUrl: require("../../public/assets/logo.png"),
  shadowUrl: require("../../public/assets/logo.png"),
});

const position = [12.722727340408463, 77.43520626745796];
const Map = ({ id }) => {
  return (
    <div className="flex items-center justify-center h-[30rem] pt-8 md:h-[40rem]" id={id}>
      <MapContainer center={position} zoom={14} scrollWheelZoom={true} className="h-full w-full z-0 md:w-[50%]">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Google Maps:{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/cd26rQ17jHytYiFe7">
              Flow Farm Technologies
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

{
  /* <div className="w-full">
        <MapContainer center={[40.8054, -74.0241]} zoom={14} scrollWheelZoom={false} className="h-full w-[50%]">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[40.8054, -74.0241]} draggable={true} animate={true}>
            <Popup>Hey ! I live here</Popup>
          </Marker>
        </MapContainer>
      </div> */
}

export default Map;
