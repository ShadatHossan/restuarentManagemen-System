import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img from '../../Banner/Img/order.jpg';
import Cover from '../../Sheared/Cover/Cover.jsx';
import useTitle from '../../Sheared/Title';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';

const Order = () => {
 useTitle("Order");
    const categoriess = ['salad', 'dessert', 'soup', 'pizza', 'drinks'];
    const { category } = useParams();
    console.log(category)
    const initialIndex = categoriess.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <div>
                <Cover img={img} title={"ORDER NOW"}></Cover>
            </div>

            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Drink</Tab>

                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;

