import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import blogData from '../../data/blogs.json';

const BlogDetail = () => {
  const { id } = useParams();

  // Normalize imported JSON to an array
  const blogsArray = Array.isArray(blogData) ? blogData : (blogData.blogs || []);

  // Find blog by matching id string (params are strings)
  const blog = blogsArray.find((b) => String(b.id) === id);

  if (!blog) {
    console.warn(`Blog with id=${id} not found.`, blogsArray);
    return (
      <div className="p-10 text-center text-red-500 text-lg">
        Blog not found
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.metaKeywords.join(', ')} />
      </Helmet>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
        {blog.imageUrl && (
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        <div className="mt-8">
          {blog.metaKeywords.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="inline-block bg-blue-100 text-blue-700 px-3 py-1 text-sm font-semibold rounded-full mr-2 mb-4"
            >
              {tag}
            </span>
          ))}

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {blog.title}
          </h1>

          {blog.author && blog.date && (
            <p className="text-sm text-gray-500 mb-6">
              By <span className="font-medium">{blog.author}</span> on {blog.date}
            </p>
          )}

          <div className="prose max-w-none text-gray-700 leading-relaxed">
            {blog.sections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {section.sectionTitle}
                </h2>
                <p>{section.content}</p>
              </div>
            ))}

            {blog.conclusion && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Conclusion
                </h2>
                <p>{blog.conclusion}</p>
              </div>
            )}

            {blog.callToAction && (
              <div className="mt-8">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  {blog.callToAction}
                </button>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogDetail;