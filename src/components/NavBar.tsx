'use client';
import React, { useState } from 'react';
import {
  Flex,
  Button,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NavBar() {
  const pathName = usePathname();
  console.log(pathName);
  const isStartPage = pathName === '/';
  let page = pathName.slice(1);
  const [isLargerThan768] = useMediaQuery('(min-width: 840px)');
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const LinkContainerStyles = {
    display: 'inline-block',
    paddingBottom: '10px', // Adjust the value to control the space between the Link text and the underline
  };
  const selectedPageLinkStyles = {
    color: '#fff',
    backgroundImage: 'linear-gradient(to right, #1EF828, #1EF828)',
    backgroundSize: '100% 2px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 100%',
  };
  const LinkStyles = {
    background: 'none',
    color: '#fff',
    fontSize: isLargerThan768 ? '18px' : '12px',
    textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: '500',
    fontStretch: 'normal',

    letterSpacing: '-10%',
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleNavItemClick = () => {
    setDrawerOpen(false); // Close the drawer on mobile when a link is clicked
  };

  return (
    <Flex
      direction="row"
      p={['6px', '6px', '16px', '24px', '36px']}
      gap={['6px', '6px', '36px', '36px']}
      justify="space-between"
      alignSelf="middle"
      position={isLargerThan768 ? 'static' : 'sticky'} // Set position to sticky on mobile
      top={0} // Stick to the top of the viewport on mobile
      zIndex={999} // Set a higher z-index to ensure it's above other elements
    >
      {/* Regular Navigation Links */}
      {isLargerThan768 ? (
        <>
          <Link
            href="/home"
            style={page === 'home' ? selectedPageLinkStyles : {}}>
            home
          </Link>
          <Link
            href="/about"
            style={page === 'about' ? selectedPageLinkStyles : {}}>
            about
          </Link>
          <Link
            href="/skills"
            style={page === 'skills' ? selectedPageLinkStyles : {}}>
            skills
          </Link>
          <Link
            href="/projects"
            style={page === 'projects' ? selectedPageLinkStyles : {}}>
            my projects
          </Link>
          <Link
            href="/contact"
            style={page === 'contact' ? selectedPageLinkStyles : {}}>
            contact
          </Link>
        </>
      ) : (
        <Flex
          direction="row"
          gap="16px"
          align={'end'}>
          {/* Mobile Menu Link */}
          <Button
            style={LinkStyles}
            onClick={toggleDrawer}>
            ☰
          </Button>
        </Flex>
      )}

      {/* Mobile Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={toggleDrawer}>
        <DrawerOverlay>
          <DrawerContent bg="#000">
            {' '}
            {/* Add the desired background color here */}
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack spacing="8px">
                <Link
                  href="/home"
                  style={page === 'home' ? selectedPageLinkStyles : {}}
                  onClick={() => handleNavItemClick()}>
                  home
                </Link>
                <Link
                  href="/about"
                  style={page === 'about' ? selectedPageLinkStyles : {}}
                  onClick={() => handleNavItemClick()}>
                  about
                </Link>
                <Link
                  href="/skills"
                  style={page === 'skills' ? selectedPageLinkStyles : {}}
                  onClick={() => handleNavItemClick()}>
                  skills
                </Link>
                <Link
                  href="/projects"
                  style={page === 'projects' ? selectedPageLinkStyles : {}}
                  onClick={() => handleNavItemClick()}>
                  my projects
                </Link>
                <Link
                  href="/contact"
                  style={page === 'contact' ? selectedPageLinkStyles : {}}
                  onClick={() => handleNavItemClick()}>
                  contact
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}
