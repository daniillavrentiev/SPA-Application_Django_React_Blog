import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



function CategoryDetail({ match }) {

    const [category, setCategory] = useState({})
    const [posts, setPosts] = useState([])
    const id = match.params.id


    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/category/${id}/`
        }).then(response => {
            setCategory(response.data)
            setPosts(response.data.posts)
        })
    }, [id])

    return (
            <Container fluid>
            <Row>
                <Col sm={8}>
                    <h3 className="pb-4 mb-4 fst-italic border-bottom">
                    {category.name}
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
                                        <Row>
                                            <Col>
                                                <Link to={{ pathname: `/posts/${p.id}/`, fromDashboard: false }}>Read more</Link>
                                            </Col>
                                        </Row>
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

export default CategoryDetail;