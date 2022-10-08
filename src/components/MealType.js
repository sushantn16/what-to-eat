import { Container } from '@mui/system';
import { Button, Checkbox, FormGroup, FormLabel, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { useState } from 'react';
import Foodcard from './FoodCard';

const MealType = () => {

    const recipies = {
        "Breakfast": {
            "veg": [
                {
                    "name": "Poha",
                    "image": "Poha.jpg"
                },
                {
                    "name": "Upma",
                    "image": "Upma.jpg"
                },
                {
                    "name": "Dhokla",
                    "image": "Dhokla.jpg"
                },
                {
                    "name": "Idli",
                    "image": "Idli.jpg"
                },
                {
                    "name": "Quinoa",
                    "image": "Quinoa.jpg"
                }
            ],
            "nveg": [
                {
                    "name": "Chicken Sausage",
                    "image": "ChickenSausage.jpg"
                },
                {
                    "name": "Omelette",
                    "image": "Omelette.jpg"
                },
                {
                    "name": "Egg Sandwich",
                    "image": "EggSandwich.jpg"
                }
            ]
        },
        "Lunch": {
            "veg": [
                {
                    "name": "Rajma",
                    "image": "Rajma.jpg"
                },
                {
                    "name": "Dal Makhni",
                    "image": "DalMakhni.jpg"
                },
                {
                    "name": "Palak Paneer",
                    "image": "PalakPaneer.jpg"
                },
                {
                    "name": "Chana Masala",
                    "image": "ChanaMasala.jpg"
                },
                {
                    "name": "Kadhi",
                    "image": "Kadhi.jpg"
                }
            ],
            "nveg": [
                {
                    "name": "Chicken",
                    "image": "Chicken.jpg"
                },
                {
                    "name": "Mutton",
                    "image": "Mutton.jpg"
                }
            ]
        },
        "Dinner": {
            "veg": [
                {
                    "name": "Dal",
                    "image": "Dal.jpg"
                },
                {
                    "name": "Paneer Bhurji",
                    "image": "PaneerBhurji.jpg"
                },
                {
                    "name": "Mix Veg",
                    "image": "MixVeg.jpg"
                },
                {
                    "name": "Rajma",
                    "image": "Rajma.jpg"
                },
                {
                    "name": "Dal Makhni",
                    "image": "DalMakhni.jpg"
                },
                {
                    "name": "Palak Paneer",
                    "image": "PalakPaneer.jpg"
                },
                {
                    "name": "Chana Masala",
                    "image": "ChanaMasala.jpg"
                },
                {
                    "name": "Kadhi",
                    "image": "Kadhi.jpg"
                }
            ],
            "nveg": [
                {
                    "name": "Chicken",
                    "image": "Chicken.jpg"
                },
                {
                    "name": "Mutton",
                    "image": "Mutton.jpg"
                },
                {
                    "name": "Butter Chicken",
                    "image": "ButterChicken.jpg"
                },
                {
                    "name": "Egg Bhurji",
                    "image": "EggBhurji.jpg"
                }
            ]
        },
        "Snacks": {
            "veg": [
                {
                    "name": "Samosa",
                    "image": "Samosa.jpg"
                },
                {
                    "name": "Tikki",
                    "image": "Tikki.jpg"
                },
                {
                    "name": "Paneer Tikka",
                    "image": "PaneerTikka.jpg"
                },
                {
                    "name": "Gol Gappe",
                    "image": "GolGappe.jpg"
                },
                {
                    "name": "Dahi Bhalle",
                    "image": "DahiBhalle.jpg"
                }
            ],
            "nveg": [
                {
                    "name": "Chicken Tikka",
                    "image": "Chicken Tikka.jpg"
                }
            ]
        }
    }

    const [formData, setFormData] = useState({
        mealType: 'Breakfast',
        veg: false,
        nveg: false

    });
    const [finalRecipie, setFinalRecipie] = useState({})
    const [showCard, setShowCard] = useState(false)

    const HandleRadioChange = (e) => {
        setShowCard(false);
        setFormData({
            ...formData,
            mealType: e.target.value
        })
    }
    const HandleCheckboxChange = (e) => {
        setShowCard(false);
        if (e.target.value === "veg") {
            setFormData({
                ...formData,
                veg: !formData.veg
            })
        } else if (e.target.value === "nveg") {
            setFormData({
                ...formData,
                nveg: !formData.nveg
            })
        }
        console.log(formData)
    }

    const HandleButton = () => {
        if (formData.veg === true || formData.nveg === true) {
            setShowCard(true);
            let meal
            if (formData.mealType === 'Breakfast') {
                meal = recipies.Breakfast
            } else if (formData.mealType === 'Lunch') {
                meal = recipies.Lunch
            } else if (formData.mealType === 'Dinner') {
                meal = recipies.Dinner
            } else if (formData.mealType === 'Snacks') {
                meal = recipies.Snacks
            }
            setFinalRecipie(getRecipie(meal))
        }
    }
    const getRecipie = (meal) => {
        let recipie
        if (formData.veg === true && formData.nveg === true) {
            recipie = meal.veg.concat(meal.nveg)
            return recipie[Math.floor(Math.random() * recipie.length)];
        } else if (formData.veg === true && formData.nveg === false) {
            recipie = meal.veg
            return recipie[Math.floor(Math.random() * recipie.length)];
        } else if (formData.veg === false && formData.nveg === true) {
            recipie = meal.nveg
            return recipie[Math.floor(Math.random() * recipie.length)];
        }
    }

    return (
        <Container maxWidth="xl" sx={{
            minHeight:'calc( 100vh - 104px )'
        }}>
            <FormControl sx={{mt:5}}>
                <FormLabel id="demo-radio-buttons-group-label">Meal Type</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Breakfast"
                    name="radio-buttons-group"
                    sx={{
                        
                        flexDirection: "row"
                    }}
                    onChange={HandleRadioChange}
                    required
                >
                    <FormControlLabel value="Breakfast" control={<Radio />} label="Breakfast" />
                    <FormControlLabel value="Lunch" control={<Radio />} label="Lunch" />
                    <FormControlLabel value="Dinner" control={<Radio />} label="Dinner" />
                    <FormControlLabel value="Snacks" control={<Radio />} label="Snacks" />
                </RadioGroup>

                <FormLabel id="demo-radio-buttons-group-label" sx={{ mt: 5 }}>Select your meal Preferences</FormLabel>

                <FormGroup
                    onChange={HandleCheckboxChange}
                    required
                    sx={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>

                    <FormControlLabel control={<Checkbox value={"veg"} />} label="Vegetarian" />
                    <FormControlLabel control={<Checkbox value={"nveg"} />} label="Non Vegetarian" />
                </FormGroup>

                <Button variant="contained" sx={{ mt: 5 }} onClick={HandleButton}>Get Meal Suggesion</Button>


            </FormControl>
            {showCard && <Foodcard food={finalRecipie} />
            }

        </Container>


    )
}
export default MealType;