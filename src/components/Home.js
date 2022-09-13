import React, { useState, useEffect } from "react";
import { Container, Row, Col, Navbar, Nav, useTable } from "react-bootstrap";
import Product from "./Product";
import axios from "axios";


const Home = () => { 
    const apiUrl = "http://localhost:43000/";
    const [allProducts, setAllProducts] = useState({});
     useEffect( () => { getProductsApi()  }, []);  
  const getProductsApi = async () => {       
    try {
      const res = await axios.get(apiUrl+"products")
      if (res?.data?.data?.status === true)
        setAllProducts(res?.data?.data?.package);
      
    } catch (error) {
      console.log(error?.message)
      
      }
    };
     
      return (
           <div className="App">      
          <h2>Products Listing</h2>
          
          { allProducts && allProducts?.length > 0 &&
                <Row className="justify-content-between  w-95 flex-wrap-control">
                    {allProducts?.length != 0 &&
                        allProducts?.map((product, index) => (
                            <Product
                                key={index}
                                product={product}
                                bundle={false}
                                col={"col-6 col-sm-3 col-md-2 col-lg-2 mx-0"}
                            />
                        ))}
                </Row>
                }
        </div> 
      )
    


};
export default Home;