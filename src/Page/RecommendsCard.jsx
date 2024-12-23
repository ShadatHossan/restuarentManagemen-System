import img2 from "../Banner/Img/pizza-bg.jpg";
import img1 from "../Banner/Img/salad-bg.jpg";
import img3 from "../Banner/Img/soup-bg.jpg";
import "../CSS/RecommendCard.css";
import SectionTitle from "../Sheared/SectionTitle";

const RecommendsCard = () => {
    return (
        <div>
            <SectionTitle subHeading="Should Try" heading="CHEF RECOMMENDS"></SectionTitle>
   
    {/* CARD START */}  
    <div className="grid grid-cols-3 gap-4 ">
<div className="card w-100 glass">
  <figure><img src={img1} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="text-xl font-bold  text-center">Life hack</h2>
    <p className="text-center">How to park your car at your garage?</p>
    <div className="card-actions justify-center">
       <button className="btn btn-outline border-0 border-b-4">ADD TO CART</button>
    </div>
  </div>
</div>

{/* 2ND */}
<div className="card w-100 glass">
  <figure><img src={img2} alt="car!"/></figure>
<div className="card-body">
    <h2 className="text-xl font-bold  text-center">Life hack</h2>
    <p className="text-center">How to park your car at your garage?</p>
    <div className="card-actions justify-center">
       <button className="btn btn-outline border-0 border-b-4">ADD TO CART</button>
    </div>
  </div>
</div>

{/* 3RD */}
<div className="card w-100 glass">
  <figure><img src={img3} alt="car!"/></figure>
<div className="card-body">
    <h2 className="text-xl font-bold  text-center">Life hack</h2>
    <p className="text-center">How to park your car at your garage?</p>
    <div className="card-actions justify-center">
       <button className="btn btn-outline border-0 border-b-4">ADD TO CART</button>
    </div>
  </div>
</div>
     </div>
         {/* CARD END */}

 
        </div>
    );
};

export default RecommendsCard;