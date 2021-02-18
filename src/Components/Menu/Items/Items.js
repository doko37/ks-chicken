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
import pasta from '../Lunch/Images/pasta.jpg';
import macncheese from '../Lunch/Images/macandcheese.jpg';
import potnbacon from '../Lunch/Images/potatoandbacon.jpg';
import lunchcoleslaw from '../Lunch/Images/coleslaw.jpg';
import udonsalad from '../Lunch/Images/udonsalad.jpg';
import salad from '../Lunch/Images/salad.jpg';

const items = (props) => {
    const itemList = {
        chicken: [
            {   
                title: "Original Fried Chicken", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Half - $18 | Full - $34",
                picture: original
            },
            {   
                title: "Crispy Fried Chicken", 
                description: "Original Chicken but battered with Panko to give it an extra cripsy texture.",
                price: "Half - $18 | Full - $34",
                picture: crispy
            },
            {   
                title: "Korean Fried Chicken", 
                description: "A Korean classic. Fried chicken marinated with sweet sticky red sauce, topped with sesame and peanuts.",
                price: "Half - $18 | Full - $34",
                picture: korean
            },
            {   
                title: "Spicy Chicken", 
                description: "Same sweet flavour like the korean fried chicken but with a spicy kick.",
                price: "Half - $18 | Full - $34",
                picture: spicy
            },
            {   
                title: "Hot and Spicy Chicken", 
                description: "Directly translated as \"Fire Chicken\", the Hot and Spicy Chicken is not for sensitive stomachs.",
                price: "Half - $18 | Full - $34",
                picture: hotandspicy
            },
            {   
                title: "Sweet Chilly Chicken", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Half - $18 | Full - $34",
                picture: sweetchilly
            },
            {   
                title: "Spicy Soy Chicken", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Half - $18 | Full - $34",
                picture: spicysoy
            },
            {   
                title: "Soy Chicken", 
                description: "Original Chicken marinated in sweet savoury soy sauce.",
                price: "Half - $18 | Full - $34",
                picture: soy
            },
            {   
                title: "Garlic Soy", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Half - $18 | Full - $34",
                picture: soy
            },
            {   
                title: "BBQ Chicken", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Half - $18 | Full - $34",
                picture: soy
            },
            {   
                title: "Honey Butter Chicken", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Half - $18 | Full - $34",
                picture: honeybutter
            },
            {   
                title: "Padak", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Half - $18 | Full - $34",
                picture: padak
            },
            {   
                title: "Snowy Cheese Chicken", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Half - $18 | Full - $34",
                picture: snowy
            },
            {   
                title: "Onion Seasoning Chicken", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Half - $18 | Full - $34",
                picture: onion
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
                title: "Pasta",
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
                title: "Salad",
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
