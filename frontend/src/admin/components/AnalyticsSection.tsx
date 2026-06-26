import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'May 1', entities: 400, relationships: 240, articles: 200, sources: 100 },
  { name: 'May 7', entities: 600, relationships: 400, articles: 300, sources: 150 },
  { name: 'May 14', entities: 800, relationships: 700, articles: 500, sources: 200 },
  { name: 'May 21', entities: 1000, relationships: 900, articles: 600, sources: 240 },
  { name: 'May 27', entities: 1284, relationships: 1100, articles: 856, sources: 241 },
];

export const AnalyticsSection = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Card 1: Knowledge Graph Overview (Placeholder) */}
      <div className="bg-[#121824] border border-slate-800/70 p-6 rounded-lg">
        <h3 className="text-slate-100 font-semibold mb-4">Knowledge Graph Overview</h3>
        <div className="h-64 flex items-center justify-center bg-slate-900 rounded-lg">
           <p className="text-slate-500">Interactive Node Graph Visualization</p>
        </div>
      </div>

      {/* Card 2: Knowledge Growth */}
      <div className="bg-[#121824] border border-slate-800/70 p-6 rounded-lg">
        <h3 className="text-slate-100 font-semibold mb-4">Knowledge Growth</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: 'none' }} />
              <Line type="monotone" dataKey="entities" stroke="#A855F7" strokeWidth={2} />
              <Line type="monotone" dataKey="relationships" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="articles" stroke="#22C55E" strokeWidth={2} />
              <Line type="monotone" dataKey="sources" stroke="#F59E0B" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
