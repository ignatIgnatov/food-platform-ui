import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantById, getRestaurantsCategory } from "../../state/restaurant/Action";
import { getMenuItemByRestaurantId } from "../../state/menu/Action";

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian Only", value: "vegetarian" },
    { label: "Non Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" },
];

const RestaurantDetails = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { auth, restaurant, menu } = useSelector(store => store);
    const [selectedCategory, setSelectedCategory] = useState("");

    const { id, city } = useParams();

    const [foodType, setFoodType] = useState("all");

    const handleFilter = (e) => {
        setFoodType(e.target.value);
    }

    const handleFilterCategory = (e) => {
        setSelectedCategory(e.target.value);
    }

    useEffect(() => {
        dispatch(getRestaurantById({ jwt, restaurantId: id }));
        dispatch(getRestaurantsCategory({ jwt, restaurantId: id }));
    }, []);

    useEffect(() => {
        dispatch(getMenuItemByRestaurantId({
            jwt,
            restaurantId: id,
            vegetarian: foodType === "vegetarian",
            nonVeg: foodType === "non-vegetarian",
            seasonal: foodType === "seasonal",
            foodCategory: selectedCategory
        }));
    }, [selectedCategory, foodType]);

    return (
        <div className="px-5 lg:px-20">
            <section>
                <h3 className="text-gray-500 py-2 mt-10">Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        {
                            restaurant.restaurant?.images.map((item) => (
                                <Grid item xs={12} lg={6}>
                                    <img
                                        className="w-full h-[60vh] object-cover"
                                        src={item}
                                        alt=""
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold">{restaurant.restaurant?.name}</h1>
                    <p className="text-gray-500 mt-1">
                        {restaurant.restaurant?.description}
                    </p>
                    <div className="space-y-3 mt-3">
                        <p className="text-gray-500 flex items-center gap-3">
                            <LocationOnIcon />
                            <span>{restaurant.restaurant?.address?.city}, {restaurant.restaurant?.address?.country}</span>
                        </p>
                        <p className="text-gray-500 flex items-center gap-3">
                            <CalendarTodayIcon />
                            <span>{restaurant.restaurant?.openingHours}</span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider />
            <section className="pt-[2rem] lg:flex relative">
                <div className=" space-y-10 lg:w-[20%] filter">
                    <div className="box space-y-5 lg:sticky top-28">
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>

                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                    {
                                        foodTypes.map((item) =>
                                            <FormControlLabel
                                                key={item.value}
                                                value={item.value}
                                                control={<Radio />}
                                                label={item.label} />)
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>

                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup
                                    onChange={handleFilterCategory}
                                    name="food_category"
                                    value={selectedCategory}
                                >
                                    {
                                        restaurant.categories.map((item) =>
                                            <FormControlLabel
                                                key={item.id}
                                                value={item.name}
                                                control={<Radio />}
                                                label={item.name} />)
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className=" space-y-5 lg:w-[80%] lg:pl-10">
                    {
                        menu.menuItems.map((item) => <MenuCard item={item} />)
                    }
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails