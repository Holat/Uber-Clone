import { getItemFromStorage, saveItemToStorage } from "@/utils/Storage";
import React, { useState, useEffect } from "react";

export const useSearchHistory = (key: string, idKey: string) => {
  const [searchHistoryItem, setSearchHistoryItem] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const item = await getItemFromStorage(key);
      if (item) {
        const previousSearches = JSON.parse(item);
        previousSearches.slice(0, 14);
        setSearchHistoryItem(previousSearches);
      }
    })();
  }, [key]);

  const addItemToSearchHistory = (item: any) => {
    const filteredData = searchHistoryItem?.filter((searchItem) => {
      return searchItem[idKey] !== item[idKey];
    });
    setSearchHistoryItem([item, ...filteredData]);
    saveItemToStorage("places", JSON.stringify([item, ...filteredData]));
  };

  return {
    searchHistoryItem,
    addItemToSearchHistory,
  };
};
