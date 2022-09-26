import React from "react";
import { Link } from 'react-router-dom';
import "../components CSS/Header.css";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><div id="logo">fashion HuB</div></Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/men" className="nav-item nav-link">Men's</Link>
                        <Link to="/female" className="nav-item nav-link">Women's</Link>
                        <Link to="/sale" className="nav-item nav-link">Sale</Link>
                    </div>
                    <form className="d-flex">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <button type="button" className="btn btn-secondary"><i className="bi-search"></i></button>
                        </div>
                    </form>
                    <div className="navbar-nav">
                        <button className="checkout btn btn-outline-secondary"><i className="bi bi-person-circle"></i></button>
                        <Link to='/cart'><button className="checkout btn btn-outline-secondary"><i className="bi bi-cart-fill"></i></button></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}