import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'



function MyNavbar() {

    const [categories, setCategories] = useState([])

    useEffect(()=> {
        axios({
            method: "GET",
            url: "https://vast-stream-41619.herokuapp.com/api/category/"
        }).then(response => {
            setCategories(response.data)
        })
    }, [])

    return (
        <div className="App">
            <Container>
                <br/>
              <Row>
                <Col/>
                <Col xs={4}>
                    <h1>Blog</h1>
                </Col>
                <Col className="col-4 d-flex justify-content-end align-items-center">
                    <Button variant="outline-secondary">Sign up</Button>{' '}
                </Col>
              </Row>
                <hr/>
            </Container>
            <Container >
                    <Row>
                        <div className="position-sticky" style={{"top":"2rem"}}>
                        <Col>
                            <div className="nav-scroller py-1 mb-2">
                                <nav className="nav d-flex justify-content-between">
                                    <Link  className="p-2 link-secondary" to={{ pathname: `/`, fromDashboard: false }}><h6><u>BlogNews</u></h6></Link>
                                    {categories.map(c=>(
                                        <Link className="p-2 link-secondary" to={{ pathname: `/category/${c.id}/`, fromDashboard: false }}><h6><u>{c.name}</u></h6></Link>
                                    ))}
                                </nav>
                                <hr/>
                            </div>
                        </Col>
                        </div>
                    </Row>
            </Container>
        </div>
    );
}

export default MyNavbar;