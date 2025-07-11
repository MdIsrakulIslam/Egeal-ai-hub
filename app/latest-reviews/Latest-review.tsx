import React from 'react';

interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
}

interface ReviewsSectionProps {
  title?: string;
  reviews?: Review[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  title = "Latest reviews",
  reviews = [
    {
      id: "1",
      rating: 5,
      text: "Honestly didn't expect to win anything... but EGEAL made me $500 in a day. I just shared one tool. Realest platform I've touched.",
      author: "Alex Jordan"
    },
    {
      id: "2",
      rating: 5,
      text: "I posted an AI from EGEAL, won $700, and the post went viral. Gained 300 new followers. Insane boost.",
      author: "Tina Sanchez"
    },
    {
      id: "3",
      rating: 5,
      text: "I've joined so many fake giveaways before. This one hit different. Got paid direct, no BS.",
      author: "Marcus Khalid"
    },
    {
      id: "4",
      rating: 5,
      text: "One tool post, one viral moment, $800 in my account. EGEAL is built different.",
      author: "Riley Lane"
    },
    {
      id: "5",
      rating: 5,
      text: "I didn't believe I would win. Then I got an email saying I had won $150. That was real. Now I check EGEAL daily.",
      author: "Samantha Kim"
    }
  ]
}) => {
  // Function to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-black min-h-screen text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          {title}
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto ">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-black border border-[#D10800]  rounded-lg  sm:p-6 hover:border-gray-700 transition-colors duration-300 lg:w-[521px] lg:h-[180px] lg:top-[2887px] lg:left-[175px] "
            >
              {/* Stars */}
              <div className="flex items-center  mb-2 pl-2">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 mb-4 font-normal text-[15px] leading-[24px] tracking-[0px] p-2">
                "{review.text}"
              </p>

              {/* Author */}
              <p className="text-gray-400 text-sm sm:text-base font-medium mb-2 p-2">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;