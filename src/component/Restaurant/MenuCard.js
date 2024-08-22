import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ingredients = [
    {
        category: "Nuts & Seeds",
        ingredient: ["Cashews"]
    },
    {
        category: "Protein",
        ingredient: ["Ground beef", "Backon strips"]
    }
]

const MenuCard = () => {

    const handleCheckboxChange = (value) => {
        console.log(value);
    }

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
                                src="https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                                <p className="font-semibold text-xl">Burger</p>
                                <p>$4.99</p>
                                <p className="text-gray-400">Description of this food...</p>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <form>
                        <div className="flex gap-5 flex-wrap">
                            {
                                ingredients.map((item) => (
                                    <div>
                                        <p>{item.category}</p>
                                        <FormGroup>
                                            {item.ingredient.map((ingredientItem) => (
                                                <FormControlLabel
                                                    control={<Checkbox onChange={handleCheckboxChange(ingredientItem)} />}
                                                    label={ingredientItem}
                                                />
                                            ))}


                                        </FormGroup>
                                    </div>

                                ))
                            }
                        </div>
                        <div className="pt-5">
                            <Button disabled={false} variant="contained" type="submit">{true ? "Add to cart" : "Out of stock"}</Button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MenuCard