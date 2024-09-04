import React, { useEffect } from 'react'
import "./Home.css"
import MuliItemCarousel from "./MultiItemCarousel";
import RestaurantCard from '../Restaurant/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurantAction } from '../../state/restaurant/Action';
import { useNavigate } from 'react-router-dom';
import { findCart } from '../../state/cart/Action';

const Home = () => {

    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");

    const { restaurant, cart } = useSelector(store => store);

    useEffect(() => {
        dispatch(getAllRestaurantAction(jwt));
    }, []);

    return (
        <div className='pb-10'>
            <section className='banner -z-50 relative flex flex-col justify-center items-center'>
                <div className='w-[50vw] z-10 text-center'>
                    <p className='text-2xl lg:text-6xl font-bold z10 py-5'>Food Platform</p>
                    <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Taste the Convenience: Food, Fast and Delivered.</p>
                </div>
                <div className='cover absolute t-10 left-0 right-0'>

                </div>
                <div className='fadout'>

                </div>
            </section>
            <section className='p-10 lg:py-10 lg:px-20'>
                <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Meels</p>
                <MuliItemCarousel />
            </section>
            {
                jwt ?
                    <section className='px-5 pt-10 lg:px-20'>
                        <h1 className='text-2xl font-semibold text-gray-400 pb-8'>Order From Our Handpicked Favorites</h1>
                        <div className='flex flex-wrap items-center justify-around gap-5'>
                            {
                                restaurant.restaurants.map((item) => (
                                    <RestaurantCard onClick={console.log(item)} item={item} />
                                ))
                            }
                        </div>
                    </section>
                    : ""
            }
        </div>
    )
}

export default Home