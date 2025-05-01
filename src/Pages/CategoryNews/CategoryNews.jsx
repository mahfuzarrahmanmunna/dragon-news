import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../Components/NewsCard/NewsCard';

const CategoryNews = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const convertId = parseInt(id)

    const [categoryNews, setCategoryNews] = useState([])
    // console.log(id, data);

    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data)
            return
        }
        else if (id == '1') {
            const newsFilter = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(newsFilter)
            return
        }
        else {
            const newsFilter = data.filter(news => news.category_id === convertId)
            console.log(newsFilter);

            setCategoryNews(newsFilter)
        }
    }, [data, id])
    return (
        <div>
            <h1 className='font-bold'>Total Category News <span className='text-secondary'>{categoryNews.length}</span></h1>

            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news} />)
                }
            </div>
        </div>
    );
};

export default CategoryNews;