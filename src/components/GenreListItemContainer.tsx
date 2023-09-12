import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GenreListItemContainerProps {
  children: ReactNode;
}

const GenreListItemContainer = ({ children }: GenreListItemContainerProps) => {
  return <Box paddingY="5px">{children}</Box>;
};

export default GenreListItemContainer;
