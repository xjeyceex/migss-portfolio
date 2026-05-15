import { IconButton, Tooltip, styled } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { animateScroll as scroll } from 'react-scroll';

const StyledIconButton = styled(IconButton)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1001;
    color: white;
    padding: 10px;
`

const StyledArrowIcon = styled(MdKeyboardArrowUp)`
    background-color: #2563eb;
    border-radius: 50%;
    padding: 5px;
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
    transition: background-color 0.2s ease, transform 0.2s ease;
`

function ScrollToTop() {
    const [open, setOpen] = React.useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const handleClick = () => {
        setOpen(false);
        scroll.scrollToTop({ duration: 550, smooth: true });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 500;
            if (window.scrollY > scrollThreshold) setShouldRender(true)
            else setShouldRender(false);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
    }, []);

    return (
        shouldRender &&
        <Tooltip title='Scroll to top' placement='top' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
            <StyledIconButton size='large' aria-label='scroll to top' onClick={handleClick} >
                <StyledArrowIcon fontSize={40} />
            </StyledIconButton>
        </Tooltip>
    )
}

export default ScrollToTop