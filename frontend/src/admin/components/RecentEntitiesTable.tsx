const TableRow = ({ entity, type, status, quality, updatedBy, updatedAt }: any) => (
  <tr className="border-b border-slate-800/70 text-sm">
    <td className="py-4 text-slate-100">{entity}</td>
    <td className="py-4 text-slate-400">{type}</td>
    <td className="py-4">
      <span className="px-2 py-1 rounded-full text-xs bg-green-950/40 text-green-400">{status}</span>
    </td>
    <td className="py-4">
      <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-green-500" style={{ width: `${quality}%` }} />
      </div>
    </td>
    <td className="py-4 text-slate-400">{updatedBy}</td>
    <td className="py-4 text-slate-400">{updatedAt}</td>
  </tr>
);

export const RecentEntitiesTable = () => {
  const data = [
    { entity: "Lagos Mainland", type: "City", status: "Verified", quality: 85, updatedBy: "Samuel", updatedAt: "2m ago" },
    { entity: "Igbo Culture", type: "Culture", status: "Verified", quality: 92, updatedBy: "Amina", updatedAt: "15m ago" },
    { entity: "University of Ghana", type: "Institution", status: "Review", quality: 65, updatedBy: "John", updatedAt: "1h ago" },
  ];

  return (
    <div className="bg-[#121824] border border-slate-800/70 p-6 rounded-lg">
      <h3 className="text-slate-100 font-semibold mb-4">Recent Entities</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-slate-500 text-xs uppercase border-b border-slate-800/70">
            <th className="pb-3">Entity</th>
            <th className="pb-3">Type</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Quality</th>
            <th className="pb-3">Updated By</th>
            <th className="pb-3">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => <TableRow key={i} {...row} />)}
        </tbody>
      </table>
    </div>
  );
};
