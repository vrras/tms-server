import { getPlaces } from "./providers/open-cage-data.provider";

export const getPlacesByName = async (q: string) => {
    if (q.length < 3) {
        return {
            type: "FeatureCollection",
            features: []
        };
    }

    return await getPlaces(q);
};