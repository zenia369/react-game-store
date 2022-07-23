import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useGetGameDetailsQuery, useGetGameScreenShotUrlQuery } from "../redux/api/apiFetch";

const CardSahdow = styled(motion.div)({
    width: '100%',
    minHeight: '100vh',
    overflowY: 'scroll',
    background: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    '&::-webkit-scrollbar': {
        width: '0.5rem'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(221, 128, 240)'
    },
    '&::-webkit-scrollbar-track': {
        background: 'white'
    }
});

const Detail = styled(motion.div)({
    width: '80%',
    borderRadius: '1rem',
    padding: '2rem',
    background: 'white',
    position: 'absolute',
    left: '10%',
    color: 'black',
    img: {
        width: '100%'
    }
})


const GameDetailItem = () => {
    const {data:game, isLoading:loadGame} = useGetGameDetailsQuery('58386');
    const {data:screen, isLoading:loadScreen} = useGetGameScreenShotUrlQuery('58386');

    return (
        <>
            {
                (loadGame || loadScreen) ? null : (
                    <CardSahdow>
                        <Detail>
                            <div className="stats">
                                <div className="rating">
                                    <h3>{game.name}</h3>
                                    <p>Rating: {game.rating}</p>
                                </div>
                                <div className="info">
                                    <h3>Platforms</h3>
                                    <div className="platforms">
                                        {game.platforms.map((el) => (
                                            <h3 key={el.platform.id}>{el.platform.name}</h3>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="media">
                                <img src={game.background_image} alt={game.name} />
                            </div>
                            <div className="description">
                                {game.description_raw}
                            </div>
                            <div className="gallery">
                                {
                                    screen.results.map(el => (
                                        <img key={el.id} src={el.image} alt={game.name} />
                                    ))
                                }
                            </div>
                        </Detail>
                    </CardSahdow>
                )
            }
        </>
    )
}

export default GameDetailItem