export default function ContentPage() {
  return (
    <div className="bg-gray-800 text-white w-full rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">Content</h1>
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
            {contentList.map((content, index) => (
              <tr key={index} className="hover:bg-gray-700 transition">
                <td className="py-3 px-4 flex items-center">
                  <span className="text-blue-400 mr-2">{content.icon}</span>
                  <span>{content.name}</span>
                </td>
                <td className="py-3 px-4 text-gray-400">{content.type}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

// Temporary mock data
const contentList = [
  { icon: '🗂️', name: 'Blogposts', type: "Folder" },
  { icon: '🗂️', name: 'Vagas', type: "Folder" },
  { icon: '🌐', name: 'Home', type: "Web Page" },
];