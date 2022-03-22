import { useEffect, useState } from "react";

function useHeroData(hero) {
  const [heroData, setHeroData] = useState({});

    useEffect(() => {
        const { name, description, thumbnail } = hero;
        setHeroData({ name, description, thumbnail });
      }, [hero]);

      return heroData;
}

export default useHeroData;
