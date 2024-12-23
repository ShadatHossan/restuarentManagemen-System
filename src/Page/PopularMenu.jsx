import '../CSS/PopularMenu.css';
import SectionTitle from "../Sheared/SectionTitle";
import useMenu from "../hooks/useMenu";
import PopularMenuDesign from "./popularMenuDesign";

const PopularMenu = () => {

const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular');

    return (
        <div>
            <section className="mb-12">
                <SectionTitle
                subHeading="Check it out"
                heading="FROM OUR MENU"
                >
                </SectionTitle>
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        popular.map(item =><PopularMenuDesign
                        key={item._id}
                        item={item}
                        ></PopularMenuDesign>)
                    }
                </div>
                <div className="text-center my-8">
                     <button className=" btn btn-outline border-0 border-b-4">VIEW FULL MENU</button>
                </div>
                   <div className="number py-10">
                    <p className="text-2xl text-center text-white">Call US:+8801720929666</p>
                   </div>
            </section>
        </div>
    );
};

export default PopularMenu;