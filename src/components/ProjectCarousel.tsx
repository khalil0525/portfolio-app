import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Text,
  Image,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import CarouselModal from './CarouselModal';
interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  hashTags: string[];
  githubUrl: string | null;
  appUrl: string | null;
}

const projectsData: Project[] = [
  {
    id: 1,
    name: 'Sound Garden',
    description: `🎵 Introducing the latest version of my cutting-edge Music Sharing App, where the passion for music meets the brilliance of technology. This revamped app is powered by advanced CRUD operations, Firebase for seamless data management, and a rich tech stack including React, JavaScript, HTML, CSS, and innovative audio processing techniques. 🎧🎶
		🔍 New Features:
		Enhanced CRUD Functionality: Elevate your music-sharing experience with an optimized and intuitive CRUD system.
		Real-Time Collaboration: Enjoy synchronized music sharing and collaboration with friends in real-time.
		Customizable Audio Settings: Fine-tune your audio preferences with dynamic equalization and immersive audio processing.
		Mobile Responsive: Access your music library and favorite tracks on the go with our fully responsive design.
		🌐 Tech Stack: React, JavaScript, HTML, CSS, Firebase, Audio Processing.
		🎶 Discover the Harmony: Dive into a world of melodies, discover new tracks, and connect with fellow music enthusiasts. Embark on this extraordinary journey where technology and music merge seamlessly. 🚀💻🎶
		This updated description highlights the latest version of your Music Sharing App, focusing on the new features and improvements. Feel free to further customize it to fit your needs and capture the essence of your project.`,
    imageUrl: '/img/project/soundgarden.jpg',
    hashTags: [
      'CRUD',
      'AUDIO',
      'FIREBASE',
      'REACT',
      'JAVASCRIPT',
      'HTML',
      'CSS',
    ],
    githubUrl: 'https://github.com/khalil0525/sound-garden-app',
    appUrl: 'https://sound-garden-eeeed.web.app/',
  },

  {
    id: 2,
    name: 'Shoplocalforage',
    description: `🛍️ Description: ShopForage, a groundbreaking ethical community marketplace, is the result of a collaborative effort with our esteemed client. This innovative app empowers sellers within a close-knit community, fostering an environment that upholds strong ethics and unique product offerings. 🌿🌏🌟
	\n
		💼 Client Collaboration: Working closely with our valued client, we co-created ShopForage to align with their vision and values. Together, we developed a user-centric platform that cultivates trust and integrity, making it a go-to destination for conscious shoppers and sellers alike.
	\n	
		🌱 Ethical Practices: At the heart of ShopForage lies a commitment to ethical practices. Our platform prioritizes products that are sustainably sourced, eco-friendly, and ethically produced. Through conscious curation, we empower buyers to make responsible choices while supporting sellers who share our passion for social and environmental responsibility. ♻️🤝🌿
	\n	
		🏢 Community-Centric Approach: ShopForage celebrates the essence of community by fostering connections between sellers and buyers. With a user-friendly interface, seamless navigation, and personalized recommendations, we've created an engaging space where like-minded individuals can interact, exchange ideas, and promote conscious consumption.
	\n	
		🛒 Unique Product Offerings: Explore an array of handpicked products that reflect the diversity of our community. From handmade crafts to artisanal goods, every item on ShopForage tells a meaningful story. Our platform serves as a gateway to discovering one-of-a-kind treasures, each carrying its own legacy and cultural significance. 🎁🌍
	\n	
		🌐 Tech Stack: [Include the relevant technologies and tools you used for this project]
	\n	
		🌿 Embrace the Change: Join us on this journey toward a more sustainable and ethical future. Together, let's amplify the positive impact of conscious consumerism and build a thriving community marketplace that empowers both sellers and buyers. 🚀💚🛍️ `,
    imageUrl: '/img/project/shopforage.jpg',
    hashTags: ['CRUD', 'TYPESCRIPT', 'NEXT', 'LOOPBACK', 'SQL'],
    githubUrl: 'Private',
    appUrl: 'https://beta.shopforage.com/',
  },
  {
    id: 3,
    name: 'KeraRX',
    description: 'Shopify hair care store',
    imageUrl: '/img/project/kerarx.jpg',
    hashTags: ['SHOPIFY', 'LIQUID', 'JAVASCRIPT', 'HTML', 'CSS'],
    githubUrl: null,
    appUrl: 'https://kerarxhaircare.com/',
  },
  {
    id: 4,
    name: 'Two Tones',
    description: 'Wordpress business website and booking site',
    imageUrl: '/img/project/twotones.jpg',
    hashTags: ['WORDPRESS', 'HTML', 'CSS', 'PHP', 'JAVSCRIPT'],
    githubUrl: null,
    appUrl: 'https://twotonespianobar.com/',
  },
  {
    id: 5,
    name: 'NudeU',
    description: 'Shopify waxing supplies store',
    imageUrl: '/img/project/nudeu.jpg',
    hashTags: ['SHOPIFY', 'LIQUID', 'JAVASCRIPT', 'HTML', 'CSS'],
    githubUrl: null,
    appUrl: 'https://sound-garden-eeeed.web.app/',
  },
  {
    id: 6,
    name: 'Luminae',
    description: 'Shopify hair care shop',
    imageUrl: '/img/project/luminae.jpg',
    hashTags: ['SHOPIFY', 'LIQUID', 'JAVASCRIPT', 'HTML', 'CSS'],
    githubUrl: null,
    appUrl: 'https://luminaehaircare.com/',
  },
  {
    id: 7,
    name: 'Joon',
    description: 'Shopify hair care shop',
    imageUrl: '/img/project/joon.jpg',
    hashTags: ['SHOPIFY', 'LIQUID', 'JAVASCRIPT', 'HTML', 'CSS'],
    githubUrl: null,
    appUrl: 'https://joonhaircare.com/',
  },
];

const ProjectCarousel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const numProjectsToShowDesktop = 3;
  const numProjectsToShowTablet = 1;
  const totalProjects = projectsData.length;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const numProjectsToShow = isMobile
    ? numProjectsToShowTablet
    : numProjectsToShowDesktop;
  const projectCardWidth = isMobile
    ? '100%'
    : `${100 / numProjectsToShowDesktop}%`;

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const chunkHashtags = (hashtags: string[], chunkSize: number) => {
    const chunkedHashtags: string[][] = [];
    for (let i = 0; i < hashtags.length; i += chunkSize) {
      chunkedHashtags.push(hashtags.slice(i, i + chunkSize));
    }
    return chunkedHashtags;
  };

  const renderHashtags = (hashtags: string[], isModal = false) => {
    return (
      <Flex
        direction={isModal ? 'row' : 'column'}
        gap={2}
        sx={{ scrollbarWidth: 'thin', scrollbarColor: '#63b3ed transparent' }}
        wrap={'nowrap'}
        maxH={isModal ? 'auto' : '80px'}>
        {hashtags.map((hashtag) => (
          <Text
            key={hashtag}
            fontSize="16px"
            fontWeight="300">
            #{hashtag}
          </Text>
        ))}
      </Flex>
    );
  };

  return (
    <>
      <Box
        p={2}
        maxWidth="100%"
        mx="auto">
        <Flex
          overflowX="auto"
          position="relative"
          justifyContent="flex-start"
          transition="left 0.3s ease"
          color="#fff"
          className="custom-scrollbar horizontal"
          overflowY="hidden"
          maxWidth="100%"
          height="100%"
          pb={[4, 4, 28, 4]}>
          {projectsData.map((project) => (
            <Box
              key={project.id}
              flex={`1 0 ${projectCardWidth}`}
              px={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              cursor="pointer"
              onClick={() => handleOpenModal(project)}
              h="70%"
              w="100%">
              <Text
                fontSize="26px"
                fontWeight="400"
                mb={['4px', '4px', 6]}
                ps={['0%', '0%', '0%', '30%']}>
                {project.name}
              </Text>
              <div
                className="image-container"
                style={{ marginBottom: '12px' }}>
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  objectFit="fill"
                  borderRadius="300px"
                />
              </div>
              <Flex
                direction="column"
                gap={0}
                alignItems="center"
                pt={2}
                h={['120px', '100px', '100px', '200px']}
                w="100%"
                pb={8}>
                {renderHashtags(project.hashTags)}
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
      {selectedProject && (
        <CarouselModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </>
  );
};

export default ProjectCarousel;
