import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Wrap,
} from "@chakra-ui/react";

function App() {
  return (
    <Center height="90vh">
      <Container>
        <HStack>
          <Image height="10em" src="/logo.png" />
          <Heading alignSelf="flex-end" color="white">
            Beau Box
          </Heading>
        </HStack>
        <Card variant="umstyled">
          <CardBody>
            <Center>
              <Wrap>
                <Button
                  onClick={() => window.open("https://media.beaubox.cloud")}
                  colorScheme="purple"
                >
                  Media
                </Button>
                <Button
                  onClick={() => window.open("https://downloads.beaubox.cloud")}
                  colorScheme="pink"
                >
                  Downloads
                </Button>
                <Button
                  onClick={() => window.open("https://tnas.beaubox.cloud")}
                  colorScheme="cyan"
                >
                  TNAS
                </Button>
                <Button
                  onClick={() => window.open("https://portainer.beaubox.cloud")}
                  colorScheme="yellow"
                >
                  Portainer
                </Button>
                <Button
                  onClick={() => window.open("https://portainer.beaubox.cloud")}
                  colorScheme="gray"
                >
                  Proxy
                </Button>
              </Wrap>
            </Center>
          </CardBody>
        </Card>
      </Container>
    </Center>
  );
}

export default App;
