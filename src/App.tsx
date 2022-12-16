import {
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Image,
  Wrap,
} from "@chakra-ui/react";

import {
  BsTvFill,
  BsHddFill,
  BsGlobe,
  BsCloudArrowDownFill,
} from "react-icons/bs";

function App() {
  return (
    <Center height="90vh">
      <Container>
        <Center>
          <Image width="30em" src="/logo.png" />
        </Center>
        <br />
        <Card variant="unstyled">
          <CardBody>
            <Center>
              <Wrap>
                <Button
                  leftIcon={<BsTvFill />}
                  width="100%"
                  onClick={() => window.open("https://stream.oatsoutpost.com")}
                  colorScheme="purple"
                >
                  Stream
                </Button>
                <Button
                  leftIcon={<BsCloudArrowDownFill />}
                  width="100%"
                  onClick={() => window.open("https://downloads.oatsoutpost.com")}
                  colorScheme="pink"
                >
                  Downloads
                </Button>
                <Button
                  leftIcon={<BsHddFill />}
                  width="100%"
                  onClick={() => window.open("https://manage.oatsoutpost.com")}
                  colorScheme="yellow"
                >
                  Manage
                </Button>
                <Button
                  leftIcon={<BsGlobe />}
                  width="100%"
                  onClick={() => window.open("https://proxy.oatsoutpost.com")}
                  colorScheme="cyan"
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
