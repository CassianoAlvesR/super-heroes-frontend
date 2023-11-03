import { memo } from 'react'
import { Hero } from '../../../shared/types/hero'
import { Fade, Card, CardHeader, Heading, CardBody, Stack, Text, Image } from '@chakra-ui/react';

interface Props {
    hero: Hero;
}

const HeroCardComponent = ({ hero }: Props) => {
    return (
        <Fade in={true}>
            <Card w='72' h='full'>
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
    )
}

export const HeroCard = memo(HeroCardComponent);