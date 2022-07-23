import React from "react";

import { useSelector } from "react-redux";

import styled from "styled-components";
import { motion } from "framer-motion";

//components
import GameItem from "../components/GameItem";


const GameList = styled(motion.section)({
    padding: '0 5rem',
    h2: {
        padding: '5rem 0',
        textTransform: 'capitalize',
        fontSize: '3rem',
        fontWeight: 'lighter',
    }
});
const Games = styled(motion.div)({
    minHeight: '80vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gridColumnGap: '3rem',
    gridRowGap: '5rem'
});

const Home = () => {
    const {popular, upComing, newGames} = useSelector(state => state);


    return (
        <GameList>
            <h2>upcoming games</h2>
            <Games>
                {
                    upComing.items.map((el) => {
                        return (
                            <GameItem 
                                key={el.id}
                                {...el}
                            />
                        )
                    })
                }
            </Games>
            <h2>popular games</h2>
            <Games>
                {
                    popular.items.map((el) => {
                        return (
                            <GameItem 
                                key={el.id}
                                {...el}
                            />
                        )
                    })
                }
            </Games>
            <h2>new games</h2>
            <Games>
                {
                    newGames.items.map((el) => {
                        return (
                            <GameItem 
                                key={el.id}
                                {...el}
                            />
                        )
                    })
                }
            </Games>
        </GameList>

    )
}

export default Home