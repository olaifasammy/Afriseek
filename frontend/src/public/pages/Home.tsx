import { useEffect, useState } from 'react';
import { Layout } from '../../shared/components/Layout';
import { SearchBar } from '../../shared/components/SearchBar';
import { apiClient } from '../../shared/services/apiClient';

export const Home = () => {
  const [data, setData] = useState<any>({ entities: [], articles: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [entities, articles] = await Promise.all([
          apiClient('/entity'),
          apiClient('/article')
        ]);
        setData({ entities: entities.data.slice(0, 3), articles: articles.data.slice(0, 3) });
      } catch (e) {
        console.error('Failed to fetch', e);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold mb-4 text-brand-gold">Unveiling the African Narrative</h1>
          <p className="text-brand-muted mb-8">Discover, Map, and Analyze the African Knowledge Graph.</p>
          <SearchBar />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-white/10 rounded-xl bg-brand-dark">
            <h2 className="text-xl font-bold mb-2">New Entities</h2>
            {data.entities.map((e: any) => <p key={e.id}>{e.name}</p>)}
          </div>
          <div className="p-6 border border-white/10 rounded-xl bg-brand-dark">
            <h2 className="text-xl font-bold mb-2">New Articles</h2>
            {data.articles.map((a: any) => <p key={a.id}>{a.title}</p>)}
          </div>
          <div className="p-6 border border-white/10 rounded-xl bg-brand-dark">
            <h2 className="text-xl font-bold mb-2">Discovery</h2>
            <a href="/discover" className="text-brand-gold hover:underline">Explore More →</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
