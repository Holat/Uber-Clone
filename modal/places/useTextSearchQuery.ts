import { useUserLocationStateContext } from "@/context/userLocationStateContext";
import { GOOGLE_MAPS_API_KEY } from "@env";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { TxtSearchItem } from "./types/TxtSearchItems";

type TextSearchQueryResponse = AxiosResponse<{
  status: string;
  results: TxtSearchItem[];
}>;

export const useTextSearchQuery = (searchQuery?: string) => {
  const [responseData, setResponseData] =
    useState<TextSearchQueryResponse["data"]>();
  const { userLocation } = useUserLocationStateContext();
  const requestUrl =
    "https://maps.googleapis.com/maps/api/place/textsearch/json";

  useEffect(() => {
    if (searchQuery && searchQuery !== "") {
      (async () => {
        try {
          const { data } = await axios.get<any, TextSearchQueryResponse>(
            requestUrl,
            {
              params: {
                query: searchQuery,
                location: `${userLocation?.cords.latitude},${userLocation?.cords.longitude}`,
                key: GOOGLE_MAPS_API_KEY,
              },
            }
          );
          setResponseData(data);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setResponseData(undefined);
    }
  }, [
    searchQuery,
    userLocation?.cords.latitude,
    userLocation?.cords.longitude,
  ]);

  return responseData;
};

/**
 * https://maps.googleapis.com/maps/api/place/textsearch/json
  ?location=42.3675294%2C-71.186966
  &query=123%20main%20street
  &radius=10000
  &key=YOUR_API_KEY
 */
