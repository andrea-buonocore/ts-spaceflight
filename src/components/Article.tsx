import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
import { MainArticleInterface } from '../interfaces/MainArticleInterface';
import { Row,Col } from 'react-bootstrap';
interface ArticleProps {
    articolo: number
}

const Article = ({ articolo }: ArticleProps) => {

    const ARTICLES_URL = 'https://api.spaceflightnewsapi.net/v3/articles/';

    const [article, setArticle] = useState<MainArticleInterface | null>(null)

    const getArticle = async () => {
        try {
            let res = await fetch(ARTICLES_URL + articolo)
            if (res.ok) {
                let data = await res.json();
                console.log(data);
                setArticle(data);
                console.log(article);
            }
            else {
                alert('Response NOT ok!' + res.statusText);
            }
        }
        catch (err) {
            console.log(err);
        }
    }



    useEffect(() => {
        getArticle();
    }, [])

    return (
        <>
            {
                article && (
                    <Card className='d-flex'>
                        <Row>
                            <Col xs={3}>
                                <Card.Img variant="top" src={article.imageUrl}/>
                            </Col>
                            <Col xs={9} >
                                <Card.Body className='d-flex align-items-center'>
                                    <Card.Text className='text-truncate'>
                                    {article.title}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                )
            }
        </>
    )
}

export default Article;