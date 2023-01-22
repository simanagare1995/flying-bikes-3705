import axios from "axios";
import React from "react";
import Product from "./products";
import {useState,useEffect} from "react"
import AddProduct from "./Addproduct";
import Pagination from "./Pagination";
import {Flex,Grid} from "@chakra-ui/react"

 const getProducts=(pageNumber,limit)=>{
  return axios.get(` http://localhost:8080/products?_page=${pageNumber}&_limit=${limit}`)
 };             
const Products = () => {
  const [pageFilter,setPageFilter]=useState({
    pageNumber:1,
    limit:3,
    totalCount:0,
  })
  const [Products,setProducts]=useState([]);
  const{pageNumber,limit}=pageFilter;

  const handleOnAdd=(body)=>{
    axios.post(`http://localhost:8080/products`,body)
    .then(()=>{
      getProducts(pageNumber,limit).then((res)=>{
        setPageFilter({
...pageFilter,
totalCount:Number(res.headers["x-total-count"]),
        });
        setProducts(res.data);
      });
    });
  };

  useEffect(()=>{
    
 getProducts(pageNumber,limit).then((res)=>{
  setPageFilter({
    ...pageFilter,
    totalCount:Number(res.headers["x-total-count"]),
  });
  setProducts(res.data);
  // console.log(res.data)
 });
  },[pageNumber,limit]);

  const updatePageFilter=(change)=>{
    setPageFilter({
      ...pageFilter,
      ...change,
    });
  };

  
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex 
    direction="column"
    justifyContent="center"
    alignItems="center"
    borderColor="gray.200"
    borderWidth={1}
    borderStyle="solid"
    borderRadius={16}
    p={4}
    mt={4}
    >
      <AddProduct add={handleOnAdd}/>

      {/*  AddProduct */}

      <Grid
      w="full" gridGap={4} gridTemplateColumns="1fr 1fr 1fr">
       {Products.map((p)=>(
        <Product key={p.id}{...p}/>
       ))}
       
        {/* List of Products */}
        </Grid>

        <Pagination pageFilter={pageFilter} updatePageFilter={updatePageFilter}/>
     
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
