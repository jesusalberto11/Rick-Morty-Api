import axios from "axios";
import { storeToRefs } from "pinia";
import { useStore } from "@/Store";

export const useCharacters = () => {
  const charactersStore = useStore();

  const {
    character,
    characters,
    isLoading,
    charactersPages,
    firstEpisodeData,
  } = storeToRefs(charactersStore);

  const ALL_CHARACTERS_API_URL = `https://rickandmortyapi.com/api/character/?page=1`;

  /* Fetch al characters and setup the data */

  const getAllCharacters = () => {
    charactersStore.setIsLoading(true);

    axios
      .get(ALL_CHARACTERS_API_URL)
      .then((response) => onCharactersDataResponse(response))
      .catch((error) => console.log("Error: ", error))
      .finally(() => charactersStore.setIsLoading(false));
  };

  const onCharactersDataResponse = (response) => {
    charactersStore.setCharacters(response.data.results);
    charactersStore.setCharactersPages(response.data.info.pages);
  };

  /* Update the characters list based on the page ID */

  const fetchNewCharactersPage = (id) => {
    let newPageToFetch = `https://rickandmortyapi.com/api/character/?page=${id}`;
    charactersStore.setIsLoading(true);

    axios
      .get(newPageToFetch)
      .then((response) => onCharactersDataResponse(response))
      .catch((error) => console.log("Error: ", error))
      .finally(() => charactersStore.setIsLoading(false));
  };

  /* Fetch a single character based on this and ID, an fetch this first episode information */

  const fetchSingleCharacterData = (characterId) => {
    let API_URL = `https://rickandmortyapi.com/api/character/${characterId}`;
    charactersStore.setIsLoading(true);

    axios
      .get(API_URL)
      .then((response) => onSingleCharacterDataResponse(response))
      .catch((error) => console.log("Error fetching character Data: ", error));
  };

  const onSingleCharacterDataResponse = (response) => {
    charactersStore.setCharacter(response.data);
    fetchFirstEpisode(response.data.episode[0]);
  };

  const fetchFirstEpisode = (firstEpisodeURL) => {
    axios
      .get(firstEpisodeURL)
      .then((response) => charactersStore.setFirstEpisodeData(response.data))
      .catch((error) =>
        console.log("Error fetching First Episode Data: ", error)
      )
      .finally(() => charactersStore.setIsLoading(false));
  };

  return {
    //! Properties
    character,
    characters,
    isLoading,
    charactersPages,
    firstEpisodeData,

    //! Methods
    getAllCharacters,
    fetchNewCharactersPage,
    fetchSingleCharacterData,
  };
};
