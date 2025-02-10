import React, { useEffect, useState } from "react";
import { NavBar } from "../common/NavBar";
import { useParams } from "react-router-dom";
import { Star, Moon, Sun } from "lucide-react";
import {
  Container,
  Heading,
  Grid,
  Box,
  Image,
  Text,
  Flex,
  Select,
  Button,
  Badge,
  Icon,
  useColorMode,
  useColorModeValue,
  Tooltip,
  IconButton
} from "@chakra-ui/react";
const DisplayIdealDestinations = () => {
  const { state } = useParams();
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();
  const [filters, setFilters] = useState({
    interests: "",
    budget: 10000,
    rating: 0
  });
  // Color mode values
  const filterBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const cardBg = useColorModeValue("white", "gray.700");
  const selectBg = useColorModeValue("gray.50", "gray.700");
  useEffect(() => {
    const dummyData = [
      { place: "Mountain Resort", category: "Adventure", budget: 2000, rating: 4.5, state: "California" },
      { place: "Beach Paradise", category: "Relaxation", budget: 3000, rating: 4.8, state: "California" },
      { place: "Cultural Center", category: "Culture", budget: 1500, rating: 4.2, state: "California" }
    ];
    setPlaces(dummyData);
    setFilteredPlaces(dummyData);
  }, [state]);
  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const applyFilters = () => {
    let filtered = places;
    if (filters.interests) {
      filtered = filtered.filter(place => place.category === filters.interests);
    }
    filtered = filtered.filter(place =>
      place.budget <= filters.budget &&
      place.rating >= filters.rating
    );
    setFilteredPlaces(filtered);
  };
  const budgetOptions = [
    { value: 1000, label: "Up to $1,000" },
    { value: 2000, label: "Up to $2,000" },
    { value: 5000, label: "Up to $5,000" },
    { value: 10000, label: "Up to $10,000" },
    { value: 20000, label: "Up to $20,000" }
  ];
  return (
    <Container maxW="8xl" py={8}>
      <Flex justify="space-between" align="center" mb={8}>
        <NavBar />
        <Tooltip
          label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
          placement="left"
        >
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            onClick={toggleColorMode}
            size="lg"
            w={6}
            borderRadius="lg"
            colorScheme={colorMode === 'light' ? 'purple' : 'yellow'}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg"
            }}
            transition="all 0.2s"
          />
        </Tooltip>
      </Flex>
      <Heading
        size="xl"
        mb={8}
        mt={10}
        bgGradient="linear(to-r, blue.400, purple.500)"
        bgClip="text"
      >
        Ideal Destinations for {state}
      </Heading>
      <Box
        bg={filterBg}
        p={6}
        borderRadius="xl"
        boxShadow="md"
        borderWidth="1px"
        borderColor={borderColor}
        mb={8}
      >
        <Flex
          gap={4}
          flexWrap={["wrap", "wrap", "nowrap"]}
          align="center"
        >
          <Tooltip label="Select your interests" placement="top">
            <Select
              placeholder="Select Interests"
              value={filters.interests}
              onChange={(e) => handleFilterChange("interests", e.target.value)}
              bg={selectBg}
              size="lg"
              flex={1}
              minW="200px"
              icon={<Icon as={Star} />}
              _hover={{ borderColor: "blue.400" }}
            >
              <option value="Adventure">Adventure</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Culture">Culture</option>
              <option value="Nature">Nature</option>
              <option value="Food & Dining">Food & Dining</option>
            </Select>
          </Tooltip>
          <Tooltip label="Select your budget range" placement="top">
            <Select
              placeholder="Select Budget"
              value={filters.budget}
              onChange={(e) => handleFilterChange("budget", Number(e.target.value))}
              bg={selectBg}
              size="lg"
              flex={1}
              minW="200px"
              _hover={{ borderColor: "blue.400" }}
            >
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Tooltip>
          <Tooltip label="Select minimum rating" placement="top">
            <Select
              placeholder="Select Rating"
              value={filters.rating}
              onChange={(e) => handleFilterChange("rating", Number(e.target.value))}
              bg={selectBg}
              size="lg"
              flex={1}
              minW="200px"
              _hover={{ borderColor: "blue.400" }}
            >
              <option value={0}>Any Rating</option>
              <option value={3}>3+ Stars</option>
              <option value={4}>4+ Stars</option>
              <option value={4.5}>4.5+ Stars</option>
            </Select>
          </Tooltip>
          <Button
            onClick={applyFilters}
            colorScheme="blue"
            size="lg"
            w={5}
            minW="150px"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg"
            }}
            transition="all 0.2s"
          >
            Apply Filters
          </Button>
        </Flex>
      </Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)"
        }}
        gap={6}
      >
        {filteredPlaces.map((place, index) => (
          <Box
            key={index}
            bg={cardBg}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="sm"
            borderWidth="1px"
            borderColor={borderColor}
            transition="all 0.3s"
            _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
          >
            <Image
              src="/src/assets/img 4.jpg"
              alt={place.place}
              objectFit="cover"
              h="200px"
              w="full"
            />
            <Box p={4}>
              <Heading size="md" mb={2} noOfLines={2}>
                {place.place}
              </Heading>
              <Badge
                colorScheme="blue"
                mb={3}
                px={3}
                py={1}
                borderRadius="full"
              >
                {place.category}
              </Badge>
              <Flex justify="space-between" align="center">
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color="green.500"
                >
                  ${place.budget.toLocaleString()}
                </Text>
                <Flex align="center" gap={1}>
                  <Icon as={Star} color="yellow.400" />
                  <Text fontWeight="semibold">{place.rating}</Text>
                </Flex>
                <Button
                  // onClick={handleViewDetails}
                  colorScheme="blue"
                  size="lg"
                  w={5}
                  minW="150px"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg"
                  }}
                  transition="all 0.2s"
                >
                  View Details
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};
export default DisplayIdealDestinations;
