export default function ContentTypePage() {
  return (
    <div className="bg-gray-800 text-white w-full rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">Content Types</h1>
        <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
          New
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-700 text-gray-400">
              <th className="py-2 px-4 border-b border-gray-700">Name</th>
              <th className="py-2 px-4 border-b border-gray-700">Type</th>
            </tr>
          </thead>
          <tbody>
            {contentTypes.map((contentType, index) => (
              <tr key={index} className="hover:bg-gray-700 transition">
                <td className="py-3 px-4 flex items-center">
                  <span className="text-blue-400 mr-2">{contentType.icon}</span>
                  <span>{contentType.name}</span>
                </td>
                <td className="py-3 px-4 text-gray-400">Content Type</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

// Temporary mock data
const contentTypes = [
  { icon: '🌐', name: 'Web Page' },
  { icon: '📄', name: 'Blogpost' },
  { icon: '👨‍💻', name: 'Vaga' },
];