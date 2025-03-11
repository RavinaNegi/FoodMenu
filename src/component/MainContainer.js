import React, { useState, useEffect, useRef, useCallback } from 'react';
import Restau from './Restau';
import ScrolllItem from './ScrollItem';
import { Link } from 'react-router-dom';
import { withPromoted } from './Restau';

const MainContainer = () => {
    const [cardData, setCardData] = useState([]);
    const [resData, setResData] = useState([]);
    const [page, setPage] = useState(1); // Pagination state
    const [loading, setLoading] = useState(false);
    const observer = useRef(null);
    const PromRes=withPromoted(Restau)

    useEffect(() => {
        GetCard();
    }, [page]); // Fetch data when page number changes

    const GetCard = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const response = await fetch(
                `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page=${page}`
            );
            const json = await response.json();

            let extractedData =
                json?.data?.cards[0]?.card?.card?.imageGridCards?.info ||
                json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
                [];
            let resextractedData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
              console.log(json.data)
            setCardData((prevData) => [...prevData, ...extractedData]); // Append new data
            setResData((prevData) => [...prevData, ...resextractedData]);

        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    // Infinite Scroll Observer
    const lastElementRef = useCallback((node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPage((prevPage) => prevPage + 1);
            }
        });

        if (node) observer.current.observe(node);
    }, [loading]);

    return (
        <div className="min-w-[200px] max-w-[1700px] pt-[380px] mx-auto ">
            <p className="font-bold text-xl md:text-2xl mt-4">What's On Your Mind?</p>

            {/* Horizontal Scrollable Section */}
            <div 
                className="shadow-sm flex overflow-x-auto whitespace-nowrap space-x-4 px-4 py-2 scroll-smooth snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} 
            >
                {cardData.length > 0 ? (
                    cardData.map((item, index) => <ScrolllItem key={index} data={item} />)
                ) : (
                    <p>Loading images...</p>
                )}
            </div>

            <p className="font-bold text-xl md:text-2xl mt-6">Restaurants with online food delivery</p>

            <div className="  flex flex-wrap justify-center items-center shadow-lg m-4 gap-9">
               { resData.length  && (
                    resData.map((restaurant, index) => 
                          <Link to={"/Restaurant/"+restaurant.info.id} key={index} className="block">{ restaurant.promoted ? <PromRes key={index} data={restaurant}/>:<Restau key={index} data={restaurant} />}</Link>
                       
                    ))}
            </div>

            {/* Loading Indicator */}
            {loading && <p className="text-center my-4">Loading more restaurants...</p>}
        </div>
    );
};

export default MainContainer;
