import React from "react";
import {useState} from "react"
import{
  Button ,Modal, ModalBody ,Input,Select ,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Flex,
FormControl
} from "@chakra-ui/react";


const AddProduct = ({add}) => {
  const[form,setform]=useState({
    title:"",
    category:"",
    price:"",
  });
  const{isOpen,onOpen,onClose}=useDisclosure();
  const initialRef=React.useRef();

  const handeOnChange=(e)=>{
    let {name,value}=e.target;
    setform({
      ...form,
      [name]:value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
  add({...form,
    imageSrc:"https://picsum.photos/seed/picsum2/421/261"
  })
    onClose();
  }
  // const {title,category,gender,price}=form;
  // TODO: Remove below const and instead import them from chakra
  

  return (
    <>
      <Button my={4}
       data-cy="add-product-button"
       onClick={onOpen}>Add New product</Button>


      <Modal initialfocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
        <ModalHeader>Add to product</ModalHeader>
       {/* <ModelCloseButton/> */}
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
          <Input
          ref={initialRef}
          placeholder="Title"
          name="title"
          onChange={handeOnChange}
          
          data-cy="add-product-title" />
          
          </FormControl>
          <FormControl mt={4}>
        
         <FormLabel>Category</FormLabel>
          <Select
          placeholder="Category"
          name="category"
          onChange={handeOnChange}
          data-cy="add-product-category">
            
            <option 
            value="oil"    data-cy="add-product-category-shirt">oil</option>
            <option value="cable"  data-cy="add-product-category-pant">cable</option>
            <option value="starter"  data-cy="add-product-category-jeans">starter</option>
          </Select>
          </FormControl>
         
          <FormControl mt={4}>
          <FormLabel>Price</FormLabel>
          <InputGroup>
          <InputLeftElement pointerEvents="none" children="Rs."/>
          <Input
          type="number"
          placeholder="Price"
          name="price" 
          onChange={handeOnChange}
           data-cy="add-product-price" />
          </InputGroup>
          
          </FormControl> 
          <Flex FlexDirection="row-reverse">
          <Button 
          mt={4}
          colorScheme="teal"
          type="submit"
          onClick={handleSubmit}
          data-cy="add-product-submit-button">Create</Button>
          </Flex>   

           </ModalBody>
           </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;