import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Carousel, Stack } from "react-bootstrap";
import Cards from './cards';
import axiosInstance from './../axios config/axiosInstance';

export default function Carousels() {
    // const { data: reviews, isLoading, refetch } = useQuery("reviews", () =>
    //   fetch("https://.herokuapp.com/reviews").then((res) => res.json())
    // );
    // refetch();
    // if (isLoading) {
    //   return <Loading></Loading>;
    // }
    ////////////////////////////////////
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        // Make a request for a user with a given ID
        axiosInstance.get('/Product')
            .then(function (response) {
                // handle success
                // console.log(response.data);
                setPosts(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);







    const reviews = [
        { _id: 1, text: "abc" },
        { _id: 2, text: "def" },
        { _id: 3, text: "ghi" },
        { _id: 4, text: "jkl" },
        { _id: 5, text: "mno" },
        { _id: 6, text: "pqr" },
        { _id: 7, text: "stu" },
        { _id: 8, text: "vwx" },
        { _id: 9, text: "yza" }
    ];





    const languge = JSON.parse(localStorage.getItem('items'));
    console.log(languge);

    return (
        <div className='w-100  ' >

            {/* <h1 className=" my-5">
        User Reviews ({reviews.length})
      </h1> */}
            <div className=" h-100 my-1 ">
                <Carousel className='' style={{ height: 345 }}>
                    {reviews.map((review, index) => (
                        <Carousel.Item  >

                            <Stack direction="horizontal" className="h-10 justify-content-center align-items-center" gap={2}>


                                {loading ? (
                                    <h4>Loading...</h4>) :
                                    (posts.map((item) =>
                                        // Presently we only fetch 
                                        // title from the API 
                                        <div className='p-1 col-6 col-sm-6 col-md-4 col-lg-4' style={{ maxWidth: "15rem", height: 'auto' }} >
                                            {/* {item.title} */}
                                            {/* <div className='border border-success' style={{  wifdth: "2rem" }}> */}
                                            <Cards _id ={item._id} name={ languge==="en"?item.EnName:item.ArName} img={item.Image.url} />

                                            {/* </div> */}


                                        </div>
                                    )
                                    )
                                }









                            </Stack>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}




// /************************************
// 1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

// 2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
// ************************************/
// const slideWidth = 30;

//
// _items.push(..._items);

// const sleep = (ms = 0) => {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// };

// const createItem = (position, idx) => {
//     const item = {
//         styles: {
//             transform: `translateX(${position * slideWidth}rem)`,
//         },
//         player: _items[idx].player,
//     };

//     switch (position) {
//         case length - 1:
//         case length + 1:
//             item.styles = {...item.styles, filter: 'grayscale(1)'};
//             break;
//         case length:
//             break;
//         default:
//             item.styles = {...item.styles, opacity: 0};
//             break;
//     }

//     return item;
// };

// const CarouselSlideItem = ({pos, idx, activeIdx}) => {
//     const item = createItem(pos, idx, activeIdx);

//     return (
//         <li className="carousel__slide-item" style={item.styles}>
//             <div className="carousel__slide-item-img-link">
//                 <img src={item.player.image} alt={item.player.title} />
//             </div>
//             <div className="carousel-slide-item__body">
//                 <h4>{item.player.title}</h4>
//                 <p>{item.player.desc}</p>
//             </div>
//         </li>
//     );
// };

// const keys = Array.from(Array(_items.length).keys());

// const Carousel = () => {
//     const [items, setItems] = React.useState(keys);
//     const [isTicking, setIsTicking] = React.useState(false);
//     const [activeIdx, setActiveIdx] = React.useState(0);
//     const bigLength = items.length;

//     const prevClick = (jump = 1) => {
//         if (!isTicking) {
//             setIsTicking(true);
//             setItems((prev) => {
//                 return prev.map((_, i) => prev[(i + jump) % bigLength]);
//             });
//         }
//     };

//     const nextClick = (jump = 1) => {
//         if (!isTicking) {
//             setIsTicking(true);
//             setItems((prev) => {
//                 return prev.map(
//                     (_, i) => prev[(i - jump + bigLength) % bigLength],
//                 );
//             });
//         }
//     };

//     const handleDotClick = (idx) => {
//         if (idx < activeIdx) prevClick(activeIdx - idx);
//         if (idx > activeIdx) nextClick(idx - activeIdx);
//     };

//     React.useEffect(() => {
//         if (isTicking) sleep(300).then(() => setIsTicking(false));
//     }, [isTicking]);

//     React.useEffect(() => {
//         setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
//     }, [items]);

//     return (
//         <div className="carousel__wrap">
//             <div className="carousel__inner">
//                 <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
//                     <i className="carousel__btn-arrow carousel__btn-arrow--left" />
//                 </button>
//                 <div className="carousel__container">
//                     <ul className="carousel__slide-list">
//                         {items.map((pos, i) => (
//                             <CarouselSlideItem
//                                 key={i}
//                                 idx={i}
//                                 pos={pos}
//                                 activeIdx={activeIdx}
//                             />
//                         ))}
//                     </ul>
//                 </div>
//                 <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
//                     <i className="carousel__btn-arrow carousel__btn-arrow--right" />
//                 </button>
//                 <div className="carousel__dots">
//                     {items.slice(0, length).map((pos, i) => (
//                         <button
//                             key={i}
//                             onClick={() => handleDotClick(i)}
//                             className={i === activeIdx ? 'dot active' : 'dot'}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// ReactDOM.render(<Carousel />, document.getElementById('root'));
