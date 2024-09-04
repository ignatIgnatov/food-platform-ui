export const categorizeIngredients = (ingredients) => {
    return ingredients.reduce((accumulator, ingredient) => {
        const { category } = ingredient;

        if (!accumulator[category.name]) {
            accumulator[category.name] = [];
        }

        accumulator[category.name].push(ingredient);
        return accumulator;
    }, {});
}