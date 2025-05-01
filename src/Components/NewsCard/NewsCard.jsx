import { FaRegBookmark, FaRegShareSquare, FaRegEye, FaStar } from 'react-icons/fa';
import { format } from 'date-fns';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
        tags
    } = news;

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-3 bg-base-300">
                <div className="flex gap-3 items-center">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold text-sm">{author.name}</h3>
                        <p className="text-xs text-gray-500">
                            {format(new Date(author.published_date), 'yyyy-MM-dd')}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 text-gray-500 text-lg">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaRegShareSquare className="cursor-pointer" />
                </div>
            </div>

            {/* Body */}
            <div className="px-6 py-2">
                <h2 className="text-lg font-bold mb-5">{title}</h2>
                <img
                    src={thumbnail_url}
                    alt="news"
                    className="w-full h-52 object-cover rounded-md mb-8"
                />
                <p className="text-sm text-gray-700 leading-relaxed mb-1">
                    <span className="text-gray-500">
                        {`Wednesday, ${format(new Date(author.published_date), 'MMMM dd, yyyy')} | Tag Cloud Tags:`}{' '}
                        {tags.map((tag, i) => (
                            <span key={i} className="inline">
                                {tag}
                                {i !== tags.length - 1 ? ', ' : ' '}
                            </span>
                        ))}
                    </span>
                    {details.length > 200
                        ? `– ${details.slice(0, 200)}... `
                        : `– ${details} `}
                    <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer">Read More</Link>
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-5 border-t border-gray-300">
                <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-sm" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{rating.number}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <FaRegEye />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
