import { FC } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { ICoordinates } from "@/models/ICoordinates";

interface YmapProps {
  array: ICoordinates[];
}
const Ymap: FC<YmapProps> = ({ array }) => {
  return (
    <YMaps>
      <Map
        width={1520}
        height={750}
        defaultState={{ center: [55.75, 37.57], zoom: 10 }}
      >
        {array.map((item) => (
          <Placemark
            key={Date.now()}
            modules={["geoObject.addon.balloon"]}
            options={{ iconColor: item.color }}
            properties={{ balloonContentBody: item.description }}
            defaultGeometry={item.coordinates}
          />
        ))}
      </Map>
    </YMaps>
  );
};

export default Ymap;
