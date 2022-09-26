import React from 'react';
import Card from 'react-bootstrap/Card';
import "../../components CSS/Home CSS/Shop.css";

export default function Shop() {
    return (
        <div>
            <span id='shopHead'>
                <h3>Shop by Category</h3>
            </span>

            <div id="catalog">
                <Card className='catalogCard' style={{ width: '15rem' }}>
                    <Card.Img variant="top" className='shopImage' src="assets/Home/TopShop.jpg" />
                    <Card.Body>
                        <Card.Title><h3>Dresses</h3></Card.Title>
                    </Card.Body>
                </Card>
                <Card className='catalogCard' style={{ width: '15rem' }}>
                    <Card.Img variant="top" className='shopImage' src="assets/Home/ShortShop.jpg" />
                    <Card.Body>
                        <Card.Title><h3>Tops</h3></Card.Title>
                    </Card.Body>
                </Card>
                <Card className='catalogCard' style={{ width: '15rem' }}>
                    <Card.Img variant="top" className='shopImage' src="assets/Home/ShirtShop.jpg" />
                    <Card.Body>
                        <Card.Title><h3>Tees</h3></Card.Title>
                    </Card.Body>
                </Card>
                <Card className='catalogCard' style={{ width: '15rem' }}>
                    <Card.Img variant="top" className='shopImage' src="assets/Home/SweatShirtShop.jpg" />
                    <Card.Body>
                        <Card.Title><h3>SweatShirts</h3></Card.Title>
                    </Card.Body>
                </Card>
                <Card className='catalogCard' style={{ width: '15rem' }}>
                    <Card.Img variant="top" className='shopImage' src="assets/Home/DenimJacket-Shop.jpg" />
                    <Card.Body>
                        <Card.Title><h3>BeachWear</h3></Card.Title>
                    </Card.Body>
                </Card>
                <Card className='catalogCard' style={{ width: '15rem' }}>
                    <Card.Img variant="top" className='shopImage' src="assets/Home/BottomShop.jpg" />
                    <Card.Body>
                        <Card.Title><h3>Denim</h3></Card.Title>
                    </Card.Body>
                </Card>
                <Card className='catalogCard' style={{ width: '15rem' }}>
                    <Card.Img variant="top" className='shopImage' src="assets/Home/HoodieShop.jpg" />
                    <Card.Body>
                        <Card.Title><h3>Bottom</h3></Card.Title>
                    </Card.Body>
                </Card>
                <Card className='catalogCard' style={{ width: '15rem' }}>
                    <Card.Img variant="top" className='shopImage' src="assets/Home/JeansShop.jpg" />
                    <Card.Body>
                        <Card.Title><h3>Coats</h3></Card.Title>
                    </Card.Body>
                </Card>
                <Card className='catalogCard' style={{ width: '15rem' }}>
                    <Card.Img variant="top" className='shopImage' src="assets/Home/PoloT-shirtShop.jpg" />
                    <Card.Body>
                        <Card.Title><h3>Jackets</h3></Card.Title>
                    </Card.Body>
                </Card>
                <Card className='catalogCard' style={{ width: '15rem' }}>
                    <Card.Img variant="top" className='shopImage' src="assets/Home/ShoeShop.jpg" />
                    <Card.Body>
                        <Card.Title><h3>Shoes</h3></Card.Title>
                    </Card.Body>
                </Card>
                <Card className='catalogCard' style={{ width: '15rem' }}>
                    <Card.Img variant="top" className='shopImage' src="assets/Home/AccessoriesShop.jpg" />
                    <Card.Body>
                        <Card.Title><h3>Accessories</h3></Card.Title>
                    </Card.Body>
                </Card>
                <Card className='catalogCard' style={{ width: '15rem' }}>
                    <Card.Img variant="top" className='shopImage' src="assets/Home/JeansBlueShop.jpg" />
                    <Card.Body>
                        <Card.Title><h3>Accessories</h3></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}