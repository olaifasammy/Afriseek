import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../../shared/components/Layout';
import { apiClient } from '../../shared/services/apiClient';

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const response = await apiClient(`/search?q=${encodeURIComponent(query)}`);
        setResults(response.data || []);
      } catch (e) {
        console.error('Search failed', e);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Search Results for "{query}"</h1>
        {loading ? <p>Searching...</p> : (
          <div className="space-y-4">
            {results.map((res: any) => (
              <div key={res.id} className="p-4 border border-white/10 rounded-lg bg-brand-dark">
                <h3 className="font-bold text-lg">{res.name || res.title}</h3>
                <p className="text-brand-muted">{res.type}</p>
              </div>
            ))}
            {results.length === 0 && <p>No results found.</p>}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchResults;
