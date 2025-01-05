import { useState } from "react";

interface FilterBarProps {
  onFilter: (search: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilter }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onFilter(search);
  };

  return (
    <div className="p-4 flex gap-4">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
};

export default FilterBar;
