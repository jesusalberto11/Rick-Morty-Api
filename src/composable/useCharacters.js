import axios from "axios";
import { storeToRefs } from "pinia";
import { useStore } from "@/Store";

export const useCharacters = () => {
  const charactersStore = useStore();

  const { characters, isLoading, charactersCount } =
    storeToRefs(charactersStore);

  const ALL_CHARACTERS_API_URL = `https://rickandmortyapi.com/api/character/?page=1`;

  const getAllCharacters = () => {
    charactersStore.setIsLoading(true);

    axios
      .get(ALL_CHARACTERS_API_URL)
      .then((response) => getData(response))
      .catch((error) => console.log("Error: ", error))
      .finally(() => charactersStore.setIsLoading(false));
  };

  const getData = (response) => {
    charactersStore.setCharacters(response.data.results);
    charactersStore.setCharactersCount(response.data.info.pages);
  };

  const updateData = (id) => {
    let newPageToFetch = `https://rickandmortyapi.com/api/character/?page=${id}`;
    charactersStore.setIsLoading(true);

    axios
      .get(newPageToFetch)
      .then((response) => getData(response))
      .catch((error) => console.log("Error: ", error))
      .finally(() => charactersStore.setIsLoading(false));
  };

  return {
    //! Properties
    characters,
    isLoading,
    charactersCount,

    //! Methods
    getAllCharacters,
    updateData,
  };
};
