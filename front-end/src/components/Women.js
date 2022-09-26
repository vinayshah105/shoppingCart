import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import '../components CSS/SaleProducts.css';

export default function WomenProducts() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/products');
            setProduct(result.data)
        }
        fetchData()
    }, [])
     const WomensData = product.filter((item) => item.gender === "Women")
    return (
        <div className="card_main">
            {
                WomensData.map((data) =>
                    <Card className="card_c" key={data.id}>
                        <div className="card_img_main">
                            <Card.Img className="card_img" variant="top" src={`assets/women/${data.src}`} />
                        </div>
                        <Card.Body>
                            <Card.Text className='card_text'>{data.gender}'s</Card.Text>
                            <Card.Title>{data.title} <span className="card_title" >${data.price}</span></Card.Title>
                            <Card.Text> {data.color} <span className='card_qty' > {data.quantity} </span></Card.Text>
                            <div className="size">
                                <ButtonGroup className="size_button" aria-label="Basic example">
                                    <Button id="smallSize" variant="outline-dark" className="size_button_sml" value="small">Small</Button>
                                    <Button id="mediumSize" variant="outline-dark" className="size_button_sml" value="medium">Medium</Button>
                                    <Button id="largeSize" variant="outline-dark" className="size_button_sml" value="large">Large</Button>
                                </ButtonGroup>
                            </div>
                            <Button className="cart_button" variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    )
}