import { Heading, Image, Text } from '@chakra-ui/react';

const Header = () => {

    return (
        <>
            <Heading color='white' marginBottom='1rem' font-family='Vesper Libre'>
                DARK HACK RPG
            </Heading>
            <Text fontFamily='Vesper Libre'>
                Dark Hack is so called because it's an attempt to carry the design principles of Gray Hack into a fantasy game using the Forged in the Dark rules system
            </Text>
        </>
    )
}

export default Header