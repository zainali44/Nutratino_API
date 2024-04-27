import axios from "axios";

const getNutrition = async (req, res) => {
    try {
        console.log('https://api.edamam.com/api/nutrition-data?app_id=518e6159&app_key=d7ceca7039bf58ca9807f121bfdc07c5%09&nutrition-type=cooking&ingr=' + req.body.ingr);

        const response = await axios.get('https://api.edamam.com/api/nutrition-data?app_id=518e6159&app_key=d7ceca7039bf58ca9807f121bfdc07c5%09&nutrition-type=cooking&ingr=' + req.body.ingr);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
}

export default { getNutrition };