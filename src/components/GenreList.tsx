import { List, Button, Text, Stack, Avatar, HStack, Spinner } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre';

const GenreList = () => {
    const { data, error, isLoading } = useGenre();
    const genres = data;
    return (
            error ? (
                    <Text color={"red"} fontSize={"2rem"}>{error}</Text>
                  ) : isLoading ? (
                    <Spinner size="xl" boxSize="65px" borderWidth="10px" color="yellow.500" marginTop= "40%" marginLeft= "10%"/>
                  ) :
        <Stack>
            <Text fontSize="2xl" fontWeight="bold" paddingLeft={2}>Genres</Text>
            <List.Root gap={2} padding={2}>
                {genres?.map(genre => (
                    <List.Item key={genre.id}>
                        <Stack direction="row">
                        <HStack>
                        <Avatar.Root size="lg" >
                        <Avatar.Image src={genre.image_background}/>
                        </Avatar.Root>
                        </HStack>
                            <Button 
                                variant="outline" 
                                justifyContent="flex-start"
                                fontSize="lg"
                            >
                                {genre.name}
                            </Button>
                        </Stack>
                    </List.Item>
                ))}
            </List.Root>
        </Stack>
    );
};

export default GenreList