import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import GenreListItemContainer from "./GenreListItemContainer";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  console.log("genre", genres);
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListItemContainer key={skeleton}>
            <GenreListSkeleton />
          </GenreListItemContainer>
        ))}
      {genres.map((genre) => (
        <GenreListItemContainer key={genre.id}>
          <ListItem>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        </GenreListItemContainer>
      ))}
    </List>
  );
};

export default GenreList;
