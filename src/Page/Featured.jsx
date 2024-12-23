import featurimg from "../Banner/Img/featured.jpg";
import '../CSS/Featured.css';
import SectionTitle from "../Sheared/SectionTitle";

const Featured = () => {
    return (

// {bg-fixed} ata pic ta ka fixed kora disa ja parallax hoia gasa
        <div className="featured bg-fixed text-white pt-8 my-20 ">
            {/* design edit start */}
            <SectionTitle subHeading="check it out" heading="FROM OUR MENU"></SectionTitle>
            {/* design edit start */}
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featurimg} />
                </div>
                <div className="md:ml-10">
                    <p>Augest 20,2021</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit id, delectus omnis nam ipsum consequatur quae adipisci itaque, et accusantium placeat quas quasi ea? Voluptatem, suscipit? Alias non velit provident aperiam voluptatum mollitia error. Laudantium cupiditate asperiores id rerum quidem!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>



    );
};

export default Featured;