import { useEffect, useState } from 'react'
import { useApi } from '../../shared/hooks/api.hook';
import { PaginatedResult } from '../../shared/types/paginated';
import { Hero } from '../../shared/types/hero';
import { Flex, Card, Heading, CardHeader, Image, CardBody, Stack, Text, Input, Fade } from '@chakra-ui/react';
import { createPortal } from 'react-dom';

export const Home = () => {
    const api = useApi();
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [isDomReady, setIsDomReady] = useState(false);
    const [search, setSearch] = useState("");

    const getHeroes = async () => {
        const result = await api.get<PaginatedResult<Hero>>('/heroes', {
            page: 0,
        });
        if (result.success) {
            setHeroes(result.data.results);
        }
        console.log(result)
    }

    useEffect(() => {
        getHeroes();
        setIsDomReady(true);
    }, [])

    return (
        <>
            <Flex flexWrap="wrap" gap="12px" justifyContent="center">
                {heroes.filter((hero) => hero.name.toLowerCase().includes(search.toLowerCase())).map((hero) => (
                    <Fade in={true} key={hero.id}>
                    <Card w='72'>
                        <CardHeader>
                            <Heading size="sm">{hero.name}</Heading>
                        </CardHeader>
                        <CardBody >
                            <Image
                                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                                alt={hero.name}
                                boxSize='72'
                            />
                            <Stack mt='6' spacing='3'>
                                <Text>
                                    {hero.description || 'Not have description'}
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                    </Fade>
                ))}
            </Flex>
            {isDomReady &&
                createPortal(<Input placeholder="Search" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />, document.getElementById("box-header")!)
            }
        </>)
}
