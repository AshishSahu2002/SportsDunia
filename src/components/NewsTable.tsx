import { Article } from "../store/newsSlice";

interface NewsTableProps {
  articles: Article[];
}

const NewsTable: React.FC<NewsTableProps> = ({ articles }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">News Articles</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">Published At</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td className="border p-2">{article.title}</td>
              <td className="border p-2">{article.author || "Unknown"}</td>
              <td className="border p-2">{article.publishedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsTable;
