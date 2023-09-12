import { List, ListItem, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem>
        <Skeleton height="32px" />
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
