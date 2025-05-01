import React from 'react';
import { FaArrowLeft, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const navigate = useNavigate()
    if (!news) return null;

    const { title, details, author, image_url, total_view, tags, category_id } = news || {};

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6 border border-gray-300">
            <img
                src={image_url}
                alt={title}
                className="rounded-lg w-full object-cover"
            />

            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

            <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full border"
                    />
                    <div>
                        <p className="font-medium text-gray-700">{author?.name}</p>
                        <p>{new Date(author?.published_date).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <FaEye className="text-gray-400" />
                    <span>{total_view} views</span>
                </div>
            </div>

            <p className="text-gray-700 leading-relaxed">{details}</p>

            {tags?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            )}

            <div>
                <button onClick={() => navigate(`/category/${category_id}`)} className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md text-sm font-semibold mt-6">
                    <FaArrowLeft /> All news in this category
                </button>
            </div>
        </div>
    );
};

export default NewsDetailsCard;
