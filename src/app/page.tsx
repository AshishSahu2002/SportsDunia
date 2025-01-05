// Add this line to indicate this is a Client Component
'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store'; // Adjust the path to your store
import { fetchNews } from '../store/newsSlice'; // Adjust the path to your slice

const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); // Correctly typed dispatch
  const { articles, status } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNews());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load articles</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Render articles */}
      {articles.length > 0 ? (
        articles.map((article) => (
          <div key={article.title}>
            <h2>{article.title}</h2>
            <p>{article.author}</p>
          </div>
        ))
      ) : (
        <div>No articles available</div>
      )}
    </div>
  );
};

export default Dashboard;
