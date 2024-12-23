import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../Sheared/Cover/Cover';
import PopularMenuDesign from './popularMenuDesign';

const MenuCategory = ({items, title,img}) => {
    return (

        //loop through
        <div className='pt-8'>
         <Cover img={img} title={title}></Cover>
              <div className="grid md:grid-cols-2 gap-10 my-16">
                    {
                        items.map(item =><PopularMenuDesign
                        key={item._id}
                        item={item}
                        ></PopularMenuDesign>)
                    }
                </div>
                                <div className="text-center my-8">
                   <Link to={`/order/${title}`}>
                     <button className=" btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
                   </Link>
                </div>
        </div>
            
    );
};

export default MenuCategory;