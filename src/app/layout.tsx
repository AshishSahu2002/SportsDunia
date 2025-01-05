import './globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '../store';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Responsive Dashboard',
  description: 'A dashboard built with Next.js and Redux',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
