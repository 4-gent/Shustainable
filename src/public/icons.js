import { FaUtensils,FaStoreAlt,FaCouch,FaHeart } from "react-icons/fa";
import { FaCartShopping,FaPersonRunning } from "react-icons/fa6";
import { GiCycling } from "react-icons/gi";
import { MdOutlineRecycling,MdVolunteerActivism } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { BsStars } from "react-icons/bs";


const icons = [{name: 'Utensils', icon: <FaUtensils/>},{name: 'Fashion',icon: <FaStoreAlt/>},{name: 'Furniture', icon: <FaCouch/>},{name: 'Supermarkets',icon: <FaCartShopping/>},{name:'Outdoors', icon: <GiCycling/>},{name: 'Recycling', icon: <MdOutlineRecycling/>},{name: 'Volunteering',icon: <MdVolunteerActivism/>},{name: 'More', icon: <IoIosMore/>}];

export const places = [
{
    name: 'My favorites',
    icon: <FaHeart/>,
    color: '#B8DCE8'
},
{
    name: 'Would go again',
    icon: <FaPersonRunning/>,
    color: '#C5C5C3'
},
{
    name: 'Surprise Me',
    icon: <BsStars/>,
    color: '#F0E5EB'
},

]

export default icons;

