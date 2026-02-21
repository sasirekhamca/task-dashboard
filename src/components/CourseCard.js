function CourseCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">HTML Basics</h2>

      <p className="text-gray-600 mb-4">
        Learn structure of web pages, tags, forms, and semantic elements.
      </p>

      <label className="block text-sm font-medium text-gray-700 mb-1">
        Progress
      </label>

      <input type="range" min="0" max="100" className="w-full" />

      <div className="text-right text-sm text-gray-500 mt-1">0%</div>
    </div>
  );
}

export default CourseCard;
