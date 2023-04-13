
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { MainArticleInterface } from '../interfaces/MainArticleInterface'
import { Container } from 'react-bootstrap';

const MainArticle = () => {

    const MAIN_ARTICLE_URL = 'https://api.spaceflightnewsapi.net/v3/articles/18955';

    const [mainArticle, setMainArticle] = useState<MainArticleInterface | null >(null)

    const getMainArticle = async () => {

        try {
            let res = await fetch(MAIN_ARTICLE_URL);
            if (res.ok) {
                let data = await res.json();
                console.log(data);
                setMainArticle(data);
            }
            else {
                console.log(res.statusText);
            }

        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMainArticle();
    }, [])

    return (
            <Card className='mb-5'>
                <Card.Img variant="top" src={mainArticle?.imageUrl} />
                <Card.Body>
                    <Card.Title>{mainArticle?.title}</Card.Title>
                    <Card.Text>
                        {mainArticle?.summary}
                    </Card.Text>
                    <a href={mainArticle?.url} target='_blank' rel='noreferrer'><Button variant="primary">Read More</Button></a>
                </Card.Body>
                <Card.Footer className="text-muted text-end">Published at: {mainArticle?.publishedAt}</Card.Footer>
            </Card>
    )
}

export default MainArticle;