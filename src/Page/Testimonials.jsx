
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../Sheared/SectionTitle';



const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews)
    return (
        <div>
            <section className='my-20'>
                <SectionTitle
                    subHeading="What Our Client Say"
                    heading="TESTIMONIALS"
                > </SectionTitle>

                {/* swiper start */}
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='flex flex-col items-center text-center m-24'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='py-8'>{review.details}</p>
                                <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
                {/* swiper End */}



            </section>


        </div>
    );
};

export default Testimonials;