import React from "react";

import{
  Text,Image ,Box,Stack ,Heading,Flex
} from "@chakra-ui/react"



const Product = ({imageSrc,title,category,price}) => {
 
  return (
    <Stack data-cy="product" boxShadow={"2xl"} rounded={"lg"} p={6}>
      <Image data-cy="product-image" 
      rounded={"lg"}
      height={230}
      objectFit={"cover"}
      src={imageSrc}/>
      <Flex justifyContent={"space-between"}>
      <Text data-cy="product-category"
      color="teal.600"
      textTransform="uppercase">{category}</Text>
  
   {/* {gender&&(
   <Tag>
        <TagLabel 
        size="sm"
        variant="subtle"
        colorScheme="cyan"
        data-cy="product-gender">{gender}</TagLabel>
      </Tag>)} */}
       </Flex>
      <Heading data-cy="product-title"
      color="teal.300"
      size="md"
      textTransform="capitalize"
      >{title}</Heading>
      <Box data-cy="product-price">
        {"Rs."}
        {price}
        {/* <Box as="span"color="gray.400" fontSize="sm">/unit</Box> */}
        </Box>
    </Stack>
  );
};

export default Product;