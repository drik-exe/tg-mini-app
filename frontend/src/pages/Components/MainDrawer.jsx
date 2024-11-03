import React, { useRef, useState, useEffect } from 'react';
import {
    Drawer,
    DrawerContent,
    DrawerBackdrop ,
    Box,
    Center,
} from '@chakra-ui/react';

export default function MainDrawer({ isOpen, onClose, children }) {
    const boxColor = "boxColor.100"; // Replace with your theme values
    const textColor = "textColor.100"; // Replace with your theme values

    const [topOffset, setTopOffset] = useState(32);
    const [animatingBack, setAnimatingBack] = useState(false);
    const drawerRef = useRef();
    const contentRef = useRef();
    const startTouchY = useRef(0);
    const startTime = useRef(0);
    const [scrollAtTop, setScrollAtTop] = useState(false);
    const [touchHandledOnce, setTouchHandledOnce] = useState(false);

    const handleTouchStart = (e) => {
        if (drawerRef.current && contentRef.current) {
            const scrollTop = contentRef.current.scrollTop;

            setScrollAtTop(scrollTop === 0);

            if (scrollTop === 0 && !touchHandledOnce) {
                startTouchY.current = e.touches[0].clientY;
                startTime.current = Date.now();
                setTouchHandledOnce(true);
            }
        }
    };

    const handleTouchMove = (e) => {
        if (scrollAtTop && touchHandledOnce) {
            const currentY = e.touches[0].clientY;
            const deltaY = currentY - startTouchY.current;

            const newOffset = topOffset + deltaY;
            setTopOffset(Math.max(newOffset, 32));

            startTouchY.current = currentY;
        } else if (contentRef.current.scrollTop !== 0) {
            setScrollAtTop(false);
        }
    };

    const handleTouchEnd = () => {
        if (scrollAtTop && touchHandledOnce) {
            const endTime = Date.now();
            const elapsedTime = endTime - startTime.current;
            const swipeDistance = topOffset - 32;
            const swipeVelocity = Math.abs(swipeDistance / elapsedTime);

            if (swipeVelocity > 0.5 || topOffset > window.innerHeight / 3) {
                onClose();
            } else {
                setAnimatingBack(true);
                setTopOffset(32);
                setTimeout(() => setAnimatingBack(false), 300);
            }
        }

        setTouchHandledOnce(false);
    };

    useEffect(() => {
        if (!isOpen) {
            setTopOffset(32);
            setScrollAtTop(false);
            setTouchHandledOnce(false);
        } else {
            window.history.pushState(null, null, window.location.pathname);

            const handlePopState = () => {
                onClose();
            };

            window.addEventListener('popstate', handlePopState);

            return () => {
                window.removeEventListener('popstate', handlePopState);
            };
        }
    }, [isOpen, onClose]);

    return (
        <Drawer
            isOpen={isOpen}
            placement="bottom"
            onClose={onClose}
            closeOnOverlayClick={true}
            w="full"
            maxW={96}
        >
            <DrawerBackdrop  />

            <DrawerContent
                ref={drawerRef}
                style={{
                    position: 'relative',
                    top: `${topOffset}px`,
                    transition: animatingBack ? 'top 0.3s ease' : 'none'
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                w="container.md"
                borderTopRadius={26}
                backgroundColor={boxColor}
                h="calc(100% - 32px)"
                color={textColor}
            >
                <Center>
                    <Box
                        backgroundColor={textColor}
                        width={32}
                        height={2}
                        top={-4}
                        borderRadius={26}
                        pos="absolute"
                    />
                </Center>
                <Box
                    overflowY="auto"
                    overflowX="hidden"
                    position="relative"
                    borderTopRadius={26}
                    ref={contentRef}
                >
                    {children}
                </Box>
            </DrawerContent>
        </Drawer>
    );
}
