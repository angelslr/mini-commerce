import React from "react";

export const Rating = ({ rating }) => {


    const { rate, count } = rating;

    const starsRating = () => {
        let stars = [];
        let color = '';
        let coloredStars = 0;

        for (let i = 0; i < 5; i++) {

            color = coloredStars < Math.round(rate) ? 'orange' : 'none';

            stars.push(
                <>
                    <svg width="15.071" height="14.120" version="1.1" viewBox="0 0 2.153 2.0172" xmlns="http://www.w3.org/2000/svg">
                        <path d="m1.0765 0.060092 0.25466 0.72154h0.76399l-0.59421 0.46688 0.21222 0.72154-0.63666-0.42444-0.63666 0.42444 0.21222-0.72154-0.59421-0.46688h0.76399z" fill={color} stroke="#000" stroke-width=".04" />
                    </svg>
                </>
            );

            coloredStars += 1;
        }
        return stars;
    }
    return (
        <>
            {starsRating()} ({rate} de 5)
            <p>Basado en {count} reseñas</p>
        </>
    )
}