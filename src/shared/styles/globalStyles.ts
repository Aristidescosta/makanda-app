import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const MainElement = styled(Box)`
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 0 0 120px;
    overflow-x: hidden;
    background-color: #000000;

    &::before{
        position: absolute;
        content: '';
        left: 0;
        top: -88px;
        width: 100%;
        height: 200px;
        background-color: #000000;
        filter: blur(50px);
    }
`


export const SectionElement = styled(Box)`
    position: relative;
    overflow: hidden;
    padding: 120px 100px 20px;
    width: 100%;
    transition: ease-in-out;
    transform-origin: bottom;
    z-index: 1100;
`

export const SectionH1 = styled(Typography)`
    font-weight: 400;
    font-size: 4em;
    letter-spacing: 1px;
    margin-bottom: 150px;
    color: #FFF;

    &.section-title{
        position: relative;
        color: #FFF;
        font-weight: 500;
        font-size: 1.6rem;
        letter-spacing: 1px;
        margin-bottom: 30px;
        text-transform: uppercase;
    }

    &.section-title::after{
        position: absolute;
        content: '';
        left: 0;
        bottom: -30px;
        height: 5px;
        width: 50%;
        background: linear-gradient(
            90deg,
            #ff3700,
            #ff3700,
            transparent
        );
        z-index: 1000;
    }

    &.p{
        font-weight: 300;
        color: #111111;
        letter-spacing: 1px;
        margin-bottom: 40px;
    }
`
export const SectionP = styled(Typography)`
    font-weight: 300;
    color: #111111;
    letter-spacing: 1px;
    margin-bottom: 40px;
`