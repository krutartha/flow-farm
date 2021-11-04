import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [12.722727340408463, 77.43520626745796];
const Map = () => {
  return (
    <div className="flex items-center justify-center h-[40rem] p-5">
      <MapContainer center={position} zoom={14} scrollWheelZoom={false} className="h-full w-[50%] z-0">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Tooltip direction="top" offset={[0, 20]} opacity={0.5} permanent>
            <a href="maps.google.com">Flow Farm Hydroponics</a>
          </Tooltip>
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
