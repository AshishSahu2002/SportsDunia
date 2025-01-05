import { useState } from "react";
import { Article } from "../store/newsSlice";

interface PayoutCalculatorProps {
  articles: Article[];
}

const PayoutCalculator: React.FC<PayoutCalculatorProps> = ({ articles }) => {
  const [rate, setRate] = useState<number>(10);

  const totalPayout = articles.length * rate;

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Payout Calculator</h2>
      <div className="flex gap-4">
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="border p-2 rounded w-full"
        />
        <p>Total: ${totalPayout}</p>
      </div>
    </div>
  );
};

export default PayoutCalculator;
