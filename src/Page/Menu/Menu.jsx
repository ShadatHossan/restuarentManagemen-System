import Cover from "../../Sheared/Cover/Cover";
import SectionTitle from "../../Sheared/SectionTitle";
import useTitle from "../../Sheared/Title";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../MenuCategory";
import dessertImg from "./img/dessert-bg.jpeg";
import pizzaImg from "./img/pizza-bg.jpg";
import saladImg from "./img/salad-bg.jpg";
import { default as drinksImg, default as soupImg } from "./img/soup-bg.jpg";


const Menu = () => {
    useTitle("Menu");
    const [menu] = useMenu();
   
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
       
          
        

            <Cover title={"Offerd"}></Cover>
          
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            {/* dessert menu */}
            <MenuCategory items={dessert} img={dessertImg} title="dessert"></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} img={soupImg} title="soup"></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} img={saladImg} title="salad"></MenuCategory>
            {/* Pizza */}
        <MenuCategory items={pizza} img={pizzaImg} title="pizza"></MenuCategory>
        {/* drinks */}
        <MenuCategory items={drinks} img={drinksImg} title="drinks"></MenuCategory>

        </div>
    );
};

export default Menu;