import { List, Button, Text, Stack, Avatar, HStack } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre';

const GenreList = () => {
    const { data, error } = useGenre();
    const genres = data;

    if (error) {
        throw <Text color={"red"} fontSize={"2rem"}>{error}</Text>;
    }

    return (
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
                                variant="ghost" 
                                borderWidth={0}
                                width="60%"
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