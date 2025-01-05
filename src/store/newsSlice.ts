import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the article type
export interface Article {
  title: string;
  author: string | null;
  publishedAt: string;
}

interface NewsState {
  articles: Article[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: NewsState = {
  articles: [],
  status: 'idle',
};

// Async thunk to fetch news
export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get(
    'https://newsapi.org/v2/everything?q=technology&apiKey=087e129d5b2647ef9bf09845b247fa85'
  );
  return response.data.articles;
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default newsSlice.reducer;
