import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-lg mx-auto">
      <Search className="absolute left-3 top-3 text-brand-muted" />
      <input
        type="search"
        placeholder="Search entities, articles, or trends..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 pl-10 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-brand-gold"
      />
    </form>
  );
};
