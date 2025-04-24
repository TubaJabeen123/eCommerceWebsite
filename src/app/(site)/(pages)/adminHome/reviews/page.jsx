
const dummyReviews = [
    { id: 'REV001', product: 'Stylish Watch', customer: 'Alice Smith', rating: 5, comment: 'Absolutely love it!', date: '2023-10-27' },
    { id: 'REV002', product: 'Comfy Sneakers', customer: 'Bob Johnson', rating: 4, comment: 'Good value for money.', date: '2023-10-26' },
    { id: 'REV003', product: 'Wireless Headphones', customer: 'Charlie Brown', rating: 3, comment: 'Decent sound, but connectivity issues sometimes.', date: '2023-10-26' },
    { id: 'REV004', product: 'Stylish Watch', customer: 'Diana Prince', rating: 5, comment: 'Perfect gift!', date: '2023-10-25' },
];

const ReviewsPage = () => {
    // Add state for filtering, sorting, pagination if needed
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-7 pt-20 px-6 md:px-8 pb-2 md:pb-2 top-[88px] mb-6">Product Reviews</h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <ul className="divide-y divide-gray-6">
                    {dummyReviews.map(review => (
                        <li key={review.id} className="p-4 hover:bg-gray">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="text-sm font-semibold text-dark">{review.customer}</p>
                                    <p className="text-xs text-dark">Reviewed: <span className="font-medium text-blue">{review.product}</span> on {review.date}</p>
                                </div>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow' : 'text-gray-4'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.97z" />
                                        </svg>
                                    ))}
                                    <span className="text-xs text-gray-5 ml-1">({review.rating}/5)</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-6 mb-3">{review.comment}</p>
                            <div className="flex gap-2">
                                <button className="text-xs px-2 py-1 rounded bg-green text-white hover:bg-green">Approve</button>
                                <button className="text-xs px-2 py-1 rounded bg-red text-white hover:bg-red">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Add pagination if needed */}
        </div>
    );
};

export default ReviewsPage;
