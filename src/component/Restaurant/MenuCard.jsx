import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { categorizeIngredients } from "../../util/categorizeIngredients";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../state/cart/Action";

const MenuCard = ({ item }) => {

    const dispatch = useDispatch();
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const token = localStorage.getItem("jwt");

    const handleCheckboxChange = (intemName) => {
        if (selectedIngredients.includes(intemName)) {
            setSelectedIngredients(selectedIngredients.filter((item) => item !== intemName));
        } else {
            setSelectedIngredients([...selectedIngredients, intemName]);
        }
    }

    const handleAddItemToCart = (event) => {
        event.preventDefault();

        const requestData = {
            jwt: token,
            cartItem: {
                foodId: item.id,
                quantity: 1,
                ingredients: selectedIngredients
            }
        }
        dispatch(addItemToCart(requestData));
    }
console.log("item", item);


    

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className="lg:flex items-center justify-between">
                        <div className="lg:flex items-center lg:gap-5">
                            <img
                                className="w-[7rem] h-[7rem] object-cover"
                                src={item?.images[0]}
                                alt={item?.name}
                            />
                            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                                <p className="font-semibold text-xl">{item?.name}</p>
                                <p>${item?.price}</p>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <form>
                        <div className="flex gap-5 flex-wrap">
                            {
                                Object.keys(categorizeIngredients(item.ingredients)).map((category) => (
                                    <div>
                                        <p>{category}</p>
                                        <FormGroup>
                                            {categorizeIngredients(item.ingredients)[category].map((item) => (
                                                <FormControlLabel key={item.name}
                                                    control={<Checkbox onChange={() => handleCheckboxChange(item.name)} />}
                                                    label={item.name}
                                                />
                                            ))}


                                        </FormGroup>
                                    </div>

                                ))
                            }
                        </div>
                        <div className="pt-5">
                            <Button
                                onClick={handleAddItemToCart}
                                disabled={false}
                                variant="contained"
                                type="submit"
                            >
                                {true ? "Add to cart" : "Out of stock"}
                            </Button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MenuCard