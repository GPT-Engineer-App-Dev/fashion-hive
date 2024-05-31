import { Box, Container, Flex, Heading, SimpleGrid, Text, VStack, Image, Link, HStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <RouterLink to="/">Shopify</RouterLink>
        </Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/shop">Shop</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Category Filter */}
      <HStack spacing={4} p={4}>
        {["Men", "Women", "Kids", "Accessories"].map((category) => (
          <Button key={category} onClick={() => handleCategorySelect(category)}>
            {category}
          </Button>
        ))}
      </HStack>

      {/* Hero Section */}
      <Box bg="gray.100" color="gray.800" p={8} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to Shopify</Heading>
        <Text fontSize="xl">Discover the latest trends in fashion. Shop now!</Text>
      </Box>

      {/* Product Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} p={8}>
        {filteredProducts.map((product, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
              <Text>${product.price}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Shopify. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com/shopify" isExternal>
              Facebook
            </Link>
            <Link href="https://twitter.com/shopify" isExternal>
              Twitter
            </Link>
            <Link href="https://instagram.com/shopify" isExternal>
              Instagram
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

const products = [
  {
    name: "Cotton T-shirt",
    price: 25.99,
    image: "https://via.placeholder.com/150",
    category: "Men",
  },
  {
    name: "Denim Jeans",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    category: "Men",
  },
  {
    name: "Summer Dress",
    price: 49.99,
    image: "https://via.placeholder.com/150",
    category: "Women",
  },
  {
    name: "Leather Jacket",
    price: 79.99,
    image: "https://via.placeholder.com/150",
    category: "Men",
  },
  {
    name: "Sneakers",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    category: "Men",
  },
  {
    name: "Hoodie",
    price: 35.99,
    image: "https://via.placeholder.com/150",
    category: "Men",
  },
  {
    name: "Summer Dress",
    price: 49.99,
    image: "https://via.placeholder.com/150",
    category: "Women",
  },
  {
    name: "Kids T-shirt",
    price: 15.99,
    image: "https://via.placeholder.com/150",
    category: "Kids",
  },
  {
    name: "Kids Jeans",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    category: "Kids",
  },
  {
    name: "Kids Dress",
    price: 24.99,
    image: "https://via.placeholder.com/150",
    category: "Kids",
  },
  {
    name: "Sunglasses",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Accessories",
  },
  {
    name: "Handbag",
    price: 49.99,
    image: "https://via.placeholder.com/150",
    category: "Accessories",
  },
];

export default Index;