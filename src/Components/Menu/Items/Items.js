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
import chips from './Images/chips.jpg';
import rice from './Images/rice.jpg';
import radish from './Images/radish.jpg';
import coleslaw from './Images/coleslaw.jpg';
import sauce from './Images/sauce.jpg';

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
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Half - $18 | Full - $34",
                picture: spicy
            },
            {   
                title: "Hot and Spicy Chicken", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Medium - $4 | Large - $6", 
                picture: chips
            },
            {   
                title: "Rice", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Per serving - $2",
                picture: rice
            },
            {   
                title: "Radish", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Per serving - $2",
                picture: radish
            },
            {   
                title: "Coleslaw", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Per serving - $2",
                picture: coleslaw
            },
            {   
                title: "Sauce", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: "Per serving - $4",
                picture: sauce
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
        default:
            list = null;
            break;
    }

    return (
        list
    )
}

export default items;
