import React from 'react';
import './Items.css'
import Item from './Item/Item';

import original from './Images/original.jpg';
import crispy from './Images/crispy.jpg';
import korean from './Images/korean.jpg';
import spicy from './Images/spicy.jpg';
import hotandspicy from './Images/hotandspicy.jpg';
import sweetchilly from './Images/sweet-chilly.jpg';
import soy from './Images/soy.jpg';
import spicysoy from './Images/spicy-soy.jpg';
import honeybutter from './Images/honeybutter.jpg';
import padak from './Images/padak.jpg';
import snowy from './Images/snowy.jpg';
import onion from './Images/onion.jpg';

import chips from './Images/chips.JPG';
import rice from './Images/rice.jpg';
import radish from './Images/radish.jpg';
import coleslaw from './Images/coleslaw.jpg';
import sauce from './Images/sauce.jpg';

import broccoli from '../Lunch/Images/broccoli.jpg';
import pasta from '../Lunch/Images/pasta.jpg';
import macncheese from '../Lunch/Images/macandcheese.jpg';
import potnbacon from '../Lunch/Images/potatoandbacon.jpg';
import lunchcoleslaw from '../Lunch/Images/coleslaw.jpg';
import udonsalad from '../Lunch/Images/udonsalad.jpg';
import salad from '../Lunch/Images/salad.jpg';
import spicyudon from '../Lunch/Images/spicy_udon.jpg';

import teriyaki from '../Lunch/Images/teriyaki.jpg';
import bulgogi from '../Lunch/Images/bulgogi.jpg';
import popcorn from '../Lunch/Images/popcorn.jpg';
import lunchspicy from '../Lunch/Images/spicy.jpg';
import lunchhoneybutter from '../Lunch/Images/honeybutter.jpg';
import bbq from '../Lunch/Images/bbq.jpg';
import garlicsoy from '../Lunch/Images/garlicsoy.jpg';
import lunchonion from '../Lunch/Images/onion.jpg';

const items = (props) => {
    const itemList = {
        chicken: [
            {   
                title: "Original Fried Chicken", 
                description: "[Insert description here]",
                price: "Half - $18 | Full - $34",
                options: "Whole Chicken, Boneless, or Nibble",
                picture: original,
                main: true
            },
            {   
                title: "Crispy Fried Chicken", 
                description: "Original Chicken but battered with Panko to give it an extra cripsy texture.",
                price: "Half - $18 | Full - $34",
                options: "Whole Chicken, Boneless, or Nibble",
                picture: crispy,
                main: true
            },
            {   
                title: "Korean Fried Chicken", 
                description: "A Korean classic. Fried chicken marinated with sweet sticky red sauce, topped with sesame and peanuts.",
                price: "Half - $18 | Full - $34",
                options: "Whole Chicken, Boneless, or Nibble",
                picture: korean,
                main: true
            },
            {   
                title: "Spicy Chicken", 
                description: "Korean fried chicken but with a spicy kick.",
                price: "Half - $18 | Full - $34",
                options: "Whole Chicken, Boneless, or Nibble",
                picture: spicy,
                main: true
            },
            {   
                title: "Hot and Spicy Chicken", 
                description: "Directly translated as \"Fire Chicken\", the Hot and Spicy Chicken is not for sensitive stomachs.",
                price: "Half - $18 | Full - $34",
                options: "Whole Chicken, Boneless, or Nibble",
                picture: hotandspicy,
                main: true
            },
            {   
                title: "Sweet Chilly Chicken", 
                description: "[Insert description here]",
                price: "Half - $18 | Full - $34",
                options: "Whole Chicken, Boneless, or Nibble",
                picture: sweetchilly,
                main: true
            },
            {   
                title: "Spicy Soy Chicken", 
                description: "Soy Chicken with a spicy kick.",
                price: "Half - $18 | Full - $34",
                options: "Whole Chicken, Boneless, or Nibble",
                picture: spicysoy,
                main: true
            },
            {   
                title: "Soy Chicken", 
                description: "Original Chicken marinated in sweet savoury soy sauce.",
                price: "Half - $18 | Full - $34",
                options: "Whole Chicken, Boneless, or Nibble",
                picture: soy,
                main: true
            },
            {   
                title: "Garlic Soy", 
                description: "Soy Chicken with a garlic aroma",
                price: "Half - $18 | Full - $34",
                options: "Whole Chicken, Boneless, or Nibble",
                picture: soy,
                main: true
            },
            {   
                title: "BBQ Chicken", 
                description: "Fried Chicken marinated with Smokey BBQ Sauce.",
                price: "Half - $18 | Full - $34",
                options: "Whole Chicken, Boneless, or Nibble",
                picture: soy,
                main: true
            },
            {   
                title: "Honey Butter Chicken", 
                description: "Fried Chicken marinated with a sweet and sticky mix of honey and butter.",
                price: "Half - $18 | Full - $34",
                options: "Boneless or Nibble",
                picture: honeybutter,
                main: true
            },
            {   
                title: "Padak", 
                description: "Fried Chicken topped with spring onions, with spicy mustard sauce on the side.",
                price: "Half - $18 | Full - $34",
                options: "Boneless",
                picture: padak,
                main: true
            },
            {   
                title: "Snowy Cheese Chicken", 
                description: "Orignal Fried Chicken showered with cheese powder topping.",
                price: "Half - $18 | Full - $34",
                options: "Whole Chicken, Boneless, or Nibble",
                picture: snowy,
                main: true
            },
            {   
                title: "Onion Seasoning Chicken", 
                description: "Orignal Fried Chicken showered in savoury onion powder topping",
                price: "Half - $18 | Full - $34",
                options: "Whole Chicken, Boneless, or Nibble",
                picture: onion,
                main: true
            },
        ],
        sides: [
            {   
                title: "Chips", 
                price: "Medium - $4 | Large - $6", 
                picture: chips
            },
            {   
                title: "Rice", 
                price: "Per serving - $2",
                picture: rice
            },
            {   
                title: "Radish", 
                description: "Sweet and sour pickled radish, a perfect palate cleanser to go with your chicken",
                price: "Per serving - $2",
                picture: radish
            },
            {   
                title: "Coleslaw", 
                description: "Fresh cabbage, corn and capcicum mixed with lemon mayonnaise",
                price: "Per serving - $2",
                picture: coleslaw
            },
            {   
                title: "Sauce", 
                description: "Get extra sauce on the side. Choose between: Korean, Spicy, Hot and Spicy, and Sweet Chilly.",
                price: "Per serving - $4",
                picture: sauce
            }
        ],
        lunchSalads: [
            {
                title: "Broccoli Salad",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                picture: broccoli,
                lunch: true
            },
            {
                title: "Pasta Salad",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                picture: pasta,
                lunch: true
            },
            {
                title: "Mac and Cheese",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                picture: macncheese,
                lunch: true
                
            },
            {
                title: "Potato and Bacon",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                picture: potnbacon,
                lunch: true
            },
            {
                title: "Coleslaw",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                picture: lunchcoleslaw,
                lunch: true
            },
            {
                title: "Balsamic and Vineger Salad",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                picture: salad,
                lunch: true
            },
            {
                title: "Udon Salad",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                picture: udonsalad,
                lunch: true
            },
            {
                title: "Spicy Udon Salad",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                picture: spicyudon,
                lunch: true
            },
        ],
        lunchMeats: [
            {
                title: "Teriyaki Chicken",
                description: "Pan fried breast chicken strips marinated in teriyaki sauce.",
                picture: teriyaki,
                lunch: true
            },
            {
                title: "Bulgogi Beef",
                description: "Pan fried marinated slices of beef. A Korean classic.",
                picture: bulgogi,
                lunch: true
            },
            {
                title: "Popcorn Chicken",
                description: "Cripsy bitesized breast chicken pieces.",
                picture: popcorn,
                lunch: true
            },
            {
                title: "Spicy Chicken",
                description: "Same sweet flavour like the korean fried chicken but with a spicy kick.",
                picture: lunchspicy,
                lunch: true
            },
            {
                title: "Honey Butter Chicken",
                description: "Fried Chicken marinated with a sweet and sticky mix of honey and butter.",
                picture: lunchhoneybutter,
                lunch: true
            },
            {
                title: "BBQ Chicken",
                description: "Fried Chicken marinated with Smokey BBQ Sauce.",
                picture: bbq,
                lunch: true
            },
            {
                title: "Garlic Soy Chicken",
                description: "Soy Chicken with a garlic aroma",
                picture: garlicsoy,
                lunch: true
            },
            {
                title: "Onion Seasoning",
                description: "Orignal Fried Chicken showered in savoury onion powder topping",
                picture: lunchonion,
                lunch: true
            }
        ]
    }

    let list = null;
    switch(props.listName) {
        case "chicken":
            list = <div className="Items">
                        {itemList.chicken.map(item => {
                            return <Item 
                                        title={item.title} 
                                        description={item.description}
                                        price={item.price}
                                        picture={item.picture}
                                        options={item.options}
                                        main={item.main}
                                        key={item.title}
                                    />
                        })}
                    </div>
        break;
        case "sides":
            list = <div className="Items">
                        {itemList.sides.map(item => {
                            return <Item 
                                        title={item.title} 
                                        description={item.description}
                                        price={item.price}
                                        picture={item.picture}
                                        key={item.title}
                                    />
                        })}
                    </div>
        break;
        case "lunchSalads":
            list = <div className="Items">
                        {itemList.lunchSalads.map(item => {
                            return <Item 
                                        title={item.title} 
                                        description={item.description}
                                        picture={item.picture}
                                        lunch={item.lunch}
                                        key={item.title}
                                    />
                        })}
                    </div>
        break;
        case "lunchMeats":
            list = <div className="Items">
                        {itemList.lunchMeats.map(item => {
                            return <Item 
                                        title={item.title} 
                                        description={item.description}
                                        picture={item.picture}
                                        lunch={item.lunch}
                                        key={item.title}
                                    />
                        })}
                    </div>
        break;
        default:
            list = null;
            break;
    }

    return (
        list
    )
}

export default items;
