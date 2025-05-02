import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import RightAside from '../../Components/RightAside/RightAside';
import NewsDetailsCard from '../../Components/NewsDetailsCard/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router'; // ⬅ use `react-router-dom`, not just 'react-router'

const NewsDetails = () => {
    const data = useLoaderData();
    const [news, setNews] = useState({});
    const { id } = useParams();
    // console.log(news);

    useEffect(() => {
        const singleNews = data.find(news => news.id == id); // optional: use === and parseInt(id)
        setNews(singleNews);
    }, [data, id]);

    return (
        <div>
            <header>
                <Header />
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-6 my-10'>
                <section className='col-span-12 md:col-span-9'>
                    <h1 className='text-2xl font-bold mb-5'>News Details</h1>
                    {news ? (
                        <NewsDetailsCard key={news.id} news={news} />
                    ) : (
                        <p className="text-gray-500">Loading news details...</p>
                    )}
                </section>
                <aside className='col-span-12 md:col-span-3 mt-10 md:mt-0'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
