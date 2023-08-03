import { getItemFromStorage } from "@/utils/Storage";
import React, { useState, useEffect } from "react";

export const useSearchHistory = (key: string) => {
  const [searchHistoyItem, setSearchHistoryItem] = useState<any[]>();

  useEffect(() => {
    (async () => {
      const item = await getItemFromStorage(key);
      if (item) {
        const previousSearches = JSON.parse(item);
        previousSearches.slice(0, 14);
        setSearchHistoryItem(previousSearches);
      }
    })();

    const addItemToSearchHistory = (item: any) => {};
  }, [key]);
};
