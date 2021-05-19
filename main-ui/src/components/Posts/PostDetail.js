import React, { useState, useEffect } from "react";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';


function PostDetail({ match }){

    const [post, setPost] = useState({})
    const id = match.params.id
    const [images, setImage] = useState([])
    const [related, setRelatedPost] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/blogpost/${id}/`
        }).then(response => {
            setPost(response.data)
            setRelatedPost(response.data.related_posts)
            setImage(response.data.images)
        })
    }, [id])

    return (
        <Container>
            <Row>
                <Col>

                    <Image src={post.image} fluid/>
                </Col>
                <Col>
                    <Card className="text-white rounded bg-secondary">
                      <Card.Header>{post.title}</Card.Header>
                      <Card.Body>
                        <blockquote className="blockquote mb-0">
                          <p>
                              {post.description}
                          </p>
                          <footer className="blockquote-footer">
                              <cite title="Source Title"></cite>
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col sm={8}>
                    <Card body border="dark">{post.content}</Card>
                    <br/>
                    <Row>
                        <Carousel className="carousel-inner" role="listbox"  style={{ "width":"100%", "height": "600px"}}>
                        {images.map(p=>(
                            <Carousel.Item>
                                <img src={p.image} className="d-block w-100"/>
                                <Carousel.Caption>
                                    <p>{post.title}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                        </Carousel>
                    </Row>
                </Col>
                <Col sm={4}>
                    <div className="position-sticky" style={{top:"2rem", width: '23rem'}}>
                        <div className="p-4 mb-3 bg-light rounded " style={{ width: '23rem' }}>
                            <h4 className="fst-italic">Card Title</h4>
                            <p className="mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        {related.map(p=>(
                            <div className="p-4 mb-3 bg-light rounded card border-info " style={{ width: '23rem' }}>
                                <h4 className="fst-italic">{p.title}</h4>
                                <p className="mb-0">{p.description}</p>
                                <Link className="btn btn-outline-info" to={{ pathname: `/posts/${p.id}/`, fromDashboard: false }}>Read</Link>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
</Container>
    )
}

export default PostDetail;