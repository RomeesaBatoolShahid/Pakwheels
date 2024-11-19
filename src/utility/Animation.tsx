import { delay } from "framer-motion";
import { useState, useEffect } from 'react';


export const Fadeup = (delay: any) => {
    return{
        hidden: {
            opacity : 0,
            y : 100,
        },
        visible: {
            opacity : 1,
            y: 0,
            transition :{
                duration : 1,
                delay : delay,
            }
        }
    }
}
export const FadeLeft = (delay: any) => {
    return{
        hidden: {
            opacity : 0,
            x : 100,
        },
        visible: {
            opacity : 1,
            x: 0,
            transition :{
                duration : 1,
                delay : delay,
            }
        }
    }
}

export const RollText = (delay = 0) => {
    return {
        hidden: {
            y: 0, // Start at the top
        },
        visible: {
            y: -48, // Rolls one line up (adjust based on your text height)
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 2, // Duration for one full roll
                delay: delay,
            },
        },
    };
};



export const FadeRight = (delay: any) => {
    return{
        hidden: {
            opacity : 0,
            x : -100,
        },
        visible: {
            opacity : 1,
            x: 0,
            transition :{
                duration : 1,
                delay : delay,
            }
        }
    }
  
}