import React, {useEffect, useState} from "react";
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";


function IndexPage(){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/posts-index/`
        }).then(response => {
            setPosts(response.data)
        })
    }, [])

    return (
        <Container>
            <Row>
                <Card className="text-white rounded bg-dark">
                  <Card.Header>Quote</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.{' '}
                      </p>
                      <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
            </Row>
            <Row>
            <Col sm={8}>
                <br/>
                <h3 className="pb-4 mb-4 fst-italic border-bottom">
                    Top News
                </h3>
                <div className="row row-cols-1 row-cols-md-3">
                        {posts.map(p=>(
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src={p.image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{p.title}</h5>
                                        <p className="card-text">{p.description}</p>
                                    </div>
                                    <div className="card-footer">
                                        <Link to={{ pathname: `/posts/${p.id}/`, fromDashboard: false }}>Read more</Link>
                                    </div>
                            </div>
                        </div>
                        ))}
                    </div>
            </Col>
            <Col sm={4}>
                <br/>
                <div className="position-sticky" style={{"top":"2rem"}}>
                    <div className="p-4 mb-3 bg-light rounded">
                        <h4 className="fst-italic">About</h4>
                        <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                    </div>
                </div>
            </Col>
            </Row>
        </Container>
    )
}

export default IndexPage;