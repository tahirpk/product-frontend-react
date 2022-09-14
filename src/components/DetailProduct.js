import React, { useState, useEffect } from "react";
import { Container, Row, Col,Card, Badge } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
    const apiUrl = "http://localhost:43000/";
    const params = useParams()
    const { id } = params;
  
    //original products to be retrieved from api
    const [product, setProduct] = useState({});
    useEffect( () => { getProductApi()  }, []); 
    const getProductApi = async () => {       
    try {
      const res = await axios.get(apiUrl+"product/"+id)
      if (res?.data?.data?.status === true)
        setProduct(res?.data?.data?.package);
      
    } catch (error) {
      console.log(error?.message)
      
      }
    }

    const [formValue, setFormValue] = React.useState({
    email: '',
  });

    const handleSubmit = async (event) => {
      
        event.preventDefault();
        const bodyFormData = new FormData();
        bodyFormData.append("email", formValue.email)
        bodyFormData.append("price", product.price)
        bodyFormData.append("product_id", product.id)

        try {
        // make axios post request
        const response =  await axios({
            method: "post",
            url: apiUrl+"user/email",
          data: {
            "email": formValue.email,
            "price": product.price,
            "product_id": product.id              
            },
            headers: { "Content-Type": "application/json" },
        });
           console.log(response?.data?.data)
        } catch(error) {
             console.log(error)
        }
  }

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }
  
   
    return (
      
        <Container fluid className="centered-container pb-5 mt-0 search-page px-0">
        <Card>
            <Card.Header as="h5">Product Detail</Card.Header>
            <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                     <Badge bg="warning"><h1>Price: {product.price} </h1></Badge>
                    <div className="col-md-6">
                    <Card.Text>
                    {product.detail}
                    </Card.Text>
                    </div>
                    <div className="col-md-6">
                        <Card.Img
                        src={product.image}
                        variant="top"
                        height={176.109}
                        width={221}
                        />
                    </div>
               
               
                </Card.Body>
                <Card.Footer>
                    <form onSubmit={handleSubmit}>
                    <div><label htmlFor="email">Email</label></div>
                        <div>
                            <input
        type="email"
        name="email"
        placeholder="enter an email"
        value={formValue.email}
        onChange={handleChange}
                            />
                             <input
        type="hidden"
        name="price"
        value={product.price}
        onChange={handleChange}
                            />
                            <input
        type="hidden"
        name="product_id"
        value={product.id}
        onChange={handleChange}
      />
                    </div>
                    <button
                    type="submit"
                    >Submit</button>
                    </form>
                </Card.Footer>
        </Card>

        </Container>       
        
    );
}

export default DetailProduct;
