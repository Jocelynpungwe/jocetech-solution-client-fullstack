import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'At Jocestech, our mission is to empower tech enthusiasts, professionals, and everyday users by providing a diverse range of cutting-edge products, unparalleled service, and expert guidance. We aim to foster a community where innovation meets accessibility, transforming the way people interact with technology.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Our vision is to be the go-to destination for tech aficionados and consumers seeking top-tier devices, accessories, and expert advice. We aspire to create an ecosystem where convenience, innovation, and customer satisfaction converge, setting new standards in the tech ecommerce landscape.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Established in 2021, our tech ecommerce store began as a passion project by a group of tech enthusiasts aiming to democratize access to cutting-edge technology. Starting small, we have grown into a comprehensive platform offering curated gadgets, laptops, smartphones, and accessories from renowned brands. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the tech retail industry.',
  },
]
