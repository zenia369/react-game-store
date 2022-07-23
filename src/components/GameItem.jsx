import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";


const ItemStyle = styled(motion.div)({
    minHeight: '30vh',
    boxShadow: '0px 5px 20px rgba(0,0,0,0.15)',
    borderRadius: '1rem',
    overflow: 'hidden',
    textAlign: 'center',
    img: {
        width: '100%',
        height: 300,
        float: 'left',
    },
    h3: {
        fontSize: '1.3rem',
        fontWeight: '500',
        color: '#333',
        padding: '1rem'
    },
    p: {
        fontSize: '1rem',
        lineHeight: '200%',
        color: '#696969'
    }
})

const GameItem = (props) => {
    return (
        <ItemStyle>
            <h3>{props.name}</h3>
            <p>{props.released}</p>
            <img src={props.background_image} alt={props.name} />
        </ItemStyle>
    )
}

export default GameItem