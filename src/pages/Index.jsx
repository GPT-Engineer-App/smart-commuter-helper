import { Container, Text, VStack, Heading, Box, IconButton, Image, HStack } from "@chakra-ui/react";
import { FaCar, FaMapMarkedAlt, FaUsers, FaRoute, FaTrafficLight } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          UrbanRide AI - Your Smart Commuter Companion
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to UrbanRide AI, the intelligent solution for navigating urban traffic and optimizing your commute. Our cutting-edge website harnesses the power of artificial intelligence to provide personalized recommendations, real-time traffic insights, and innovative features designed to streamline your daily journeys. Say goodbye to traffic headaches and hello to a smarter way to get around with UrbanRide AI.
        </Text>
        <Box width="100%" height="400px" bg="gray.200" borderRadius="md" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxhbmRzY2FwZSUyMDNEfGVufDB8fHx8MTcxNjczMzcyOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Urban Landscape 3D" objectFit="cover" width="100%" height="100%" />
        </Box>
        <Heading as="h2" size="xl" textAlign="center">
          Key Features
        </Heading>
        <VStack spacing={6} align="start" width="100%">
          <HStack spacing={4}>
            <IconButton aria-label="Traffic Prediction" icon={<FaTrafficLight />} size="lg" />
            <Box>
              <Heading as="h3" size="md">
                AI-Powered Traffic Prediction
              </Heading>
              <Text>UrbanRide AI leverages cutting-edge artificial intelligence algorithms to predict traffic patterns and congestion levels with unparalleled accuracy. By analyzing historical data, real-time traffic updates, and user input, our platform provides customized route recommendations that help you avoid bottlenecks and reach your destination faster. Say goodbye to guesswork and hello to stress-free commutes.</Text>
            </Box>
          </HStack>
          <HStack spacing={4}>
            <IconButton aria-label="Commute Optimization" icon={<FaRoute />} size="lg" />
            <Box>
              <Heading as="h3" size="md">
                Personalized Commute Optimization
              </Heading>
              <Text>Take control of your commute with UrbanRide AI's personalized optimization tools. Simply input your starting point, destination, and preferred mode of transportation, and let our AI algorithms do the rest. Whether you're a daily commuter or an occasional traveler, our platform tailors route suggestions based on your unique preferences, time constraints, and traffic conditions. Maximize efficiency and minimize delays with UrbanRide AI.</Text>
            </Box>
          </HStack>
          <HStack spacing={4}>
            <IconButton aria-label="Smart Mobility" icon={<FaCar />} size="lg" />
            <Box>
              <Heading as="h3" size="md">
                Smart Mobility Integration
              </Heading>
              <Text>UrbanRide AI seamlessly integrates with a variety of smart mobility solutions to offer a holistic commuting experience. From ride-sharing services to public transit options, our platform provides real-time updates on availability, pricing, and estimated travel times. With seamless integration across multiple modes of transportation, UrbanRide AI empowers you to make informed decisions and choose the most convenient way to get around.</Text>
            </Box>
          </HStack>
          <HStack spacing={4}>
            <IconButton aria-label="3D Maps" icon={<FaMapMarkedAlt />} size="lg" />
            <Box>
              <Heading as="h3" size="md">
                Interactive 3D Maps
              </Heading>
              <Text>Explore your city like never before with UrbanRide AI's interactive 3D maps. Navigate through detailed virtual environments that showcase key landmarks, traffic hotspots, and points of interest along your route. Whether you're planning a new commute or exploring unfamiliar areas, our immersive maps provide a visual guide that enhances your journey and helps you stay informed every step of the way.</Text>
            </Box>
          </HStack>
          <HStack spacing={4}>
            <IconButton aria-label="Community Collaboration" icon={<FaUsers />} size="lg" />
            <Box>
              <Heading as="h3" size="md">
                Community Collaboration
              </Heading>
              <Text>Join a vibrant community of commuters on UrbanRide AI's collaborative platform. Share insights, tips, and real-time updates with fellow users to enhance everyone's commuting experience. From reporting road closures to recommending hidden shortcuts, our community-driven approach fosters a sense of camaraderie and empowers users to navigate the urban landscape together. Join the conversation and be part of the UrbanRide AI community today.</Text>
            </Box>
          </HStack>
        </VStack>
        <Heading as="h2" size="xl" textAlign="center">
          Conclusion
        </Heading>
        <Text fontSize="lg" textAlign="center">
          With UrbanRide AI's innovative features like AI-powered traffic prediction, personalized commute optimization, smart mobility integration, interactive 3D maps, and community collaboration, we're redefining the way you commute in the digital age. Embrace the future of smart transportation with UrbanRide AI and enjoy a smoother, more efficient journey every time you hit the road. Join us today and experience the power of AI in revolutionizing your daily commute.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
