// 'use client' directive to indicate it's a Client Component
'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store'; // Adjust path to your store
import { fetchNews } from '../store/newsSlice'; // Adjust path to your slice
import axios from 'axios';

// Define the article type
export interface Article {
    title: string;
    author: string | null;
    publishedAt: string;
}

type DashboardProps = {
    serverArticles: Article[]; // Articles fetched server-side
};

const Dashboard = ({ serverArticles }: DashboardProps) => {
    const dispatch = useDispatch();
    const { articles, status } = useSelector((state: RootState) => state.news);

    // Fetch news client-side if necessary
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchNews());
        }
    }, [dispatch, status]);

    // Fallback to server-side fetched articles if no client-side data
    const displayArticles = articles.length > 0 ? articles : serverArticles;

    return (
        <div>
            <h1>Dashboard</h1>
            {status === 'loading' ? (
                <p>Loading...</p>
            ) : (
                displayArticles.map((article) => (
                    <div key={article.title}>
                        <h2>{article.title}</h2>
                        <p>{article.author}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Dashboard;

// This function is for server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
    try {
        const response = await axios.get(
            'https://newsapi.org/v2/everything?q=technology&apiKey=087e129d5b2647ef9bf09845b247fa85'
        );
        return {
            props: {
                serverArticles: response.data.articles, // Pass server-fetched articles as props
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                serverArticles: [], // In case of error, return an empty list
            },
        };
    }

};
