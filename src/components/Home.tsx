import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useEffect, useState } from 'react';
import MainArticle from "./MainArticle";
import Article from './Article';
import { OtherArticlesInterface } from "../interfaces/OtherArticlesInterface";

const Home = () => {

    const [articles, setArticles] = useState<OtherArticlesInterface[]>([]);
    const ARTICLES_URL = 'https://api.spaceflightnewsapi.net/v3/articles';

    const getOtherArticles = async () => {

        try {
            let res = await fetch(ARTICLES_URL);
            if (res.ok) {
                let data = await res.json();
                setArticles(data);
            }
            else {
                alert('Response NOT ok!' + res.statusText);
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getOtherArticles();
    }, [])

    return (
        <Container className="py-5">
            <Row className="align-items-center justify-content-center">
                <Col xs={12} md={8}>
                    <MainArticle />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h3>Other Articles:</h3>
                </Col>
                <Row xs={1}>
                    {
                        articles && (
                            articles.map((article, i) => {
                                return (
                                    <Col className="my-3">
                                        <Article articolo={article.id}/>
                                    </Col>
                                )
                            })
                        )
                    }
                </Row>
            </Row>
        </Container>
    )
}

export default Home;