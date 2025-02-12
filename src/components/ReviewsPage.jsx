export const ReviewsPage = () => {
  const reviews = [
    {
      name: "Michael B.",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Excellent service! Fixed my laptop's screen in under 2 hours. Very professional and reasonable prices.",
      service: "Laptop Screen Repair",
    },
    {
      name: "Jennifer K.",
      rating: 5,
      date: "1 month ago",
      review:
        "The team recovered all my important data from a crashed hard drive. Can't thank them enough!",
      service: "Data Recovery",
    },
    {
      name: "David R.",
      rating: 5,
      date: "2 months ago",
      review:
        "Great experience with phone repair. Fixed my iPhone screen and it looks brand new.",
      service: "Phone Repair",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Customer Reviews</h1>
          <p className="mt-4 text-xl text-gray-600">
            See what our customers say about us
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">{review.review}</p>
                <p className="mt-2 text-sm text-blue-600">{review.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
