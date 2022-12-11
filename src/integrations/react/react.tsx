/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import { Icon, addIcon } from '@iconify/react/dist/offline';
export const addIcons = addIcon;
export const Icons = qwikify$(Icon);
import { Home, Terminal, GitHub, ArrowRight, Mail,User, Heart, ArrowDown } from 'react-feather';
export const Cameras = qwikify$(Home)
export const Terminals = qwikify$(Terminal)
export const GH = qwikify$(GitHub)
export const AR = qwikify$(ArrowRight)
export const Mails = qwikify$(Mail)
export const Downs = qwikify$(ArrowDown)

export const Profiles = qwikify$(User)
export const Hearts = qwikify$(Heart)
import Xarrow from "react-xarrows";
export const Xarrows = qwikify$(Xarrow)

import { ReactNode, useEffect, useRef, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TagSphere } from 'react-tag-sphere'
export function shuffleArray(array: Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate random number
      const j = Math.floor(Math.random() * (i + 1))
  
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  
    return array
  }
const skillImageUrls = [
  'https://cdn.svgporn.com/logos/javascript.svg',
  'https://cdn.svgporn.com/logos/python.svg',
  'https://cdn.svgporn.com/logos/react.svg',
  'https://cdn.svgporn.com/logos/nodejs-icon.svg',
  'https://cdn.svgporn.com/logos/prisma.svg',
  'https://cdn.svgporn.com/logos/docker-icon.svg',
  'https://cdn.svgporn.com/logos/figma.svg',
  'https://cdn.svgporn.com/logos/tailwindcss-icon.svg',
  'https://cdn.svgporn.com/logos/css-3.svg',
  'https://cdn.svgporn.com/logos/postgresql.svg',
  'https://cdn.svgporn.com/logos/firebase.svg',
  'https://cdn.svgporn.com/logos/supabase-icon.svg',
  'https://cdn.svgporn.com/logos/github-octocat.svg',
  'https://cdn.svgporn.com/logos/redux.svg',
  'https://cdn.svgporn.com/logos/django-icon.svg',
  'https://cdn.svgporn.com/logos/web3js.svg',
]

const imageTags = skillImageUrls.map((url) => (
  <div className="w-6 lg:w-12">
    <img src={url} width={'50px'} height={'50px'} />
  </div>
)) as ReactNode[]

const textTags = [
  'Chakra UI',
  'HTML5',
  'Linux',
  'GitHub',
  'ExpressJS',
  'Graphql',
  'ReactJS',
  'Digital Marketing',
  'AWS',
  'Solidity',
  'ThreeJS',
  'OpenGL',
  'GLSL',
].map((tag) => <p className='text-sm lg:text-lg'>{tag}</p>)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tags = shuffleArray(imageTags.concat(textTags))

export const SkillsTagSphere: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [radius, setRadius] = useState(200)

  useEffect(() => {
    const width = ref.current?.clientWidth as number
    setRadius(width / 2)
    console.log(width / 2);
  }, [ref.current?.clientWidth])

  return (
    <div className="lg:block hidden  filter text-white brightness-125 mx-auto rounded-full " ref={ref}>
     
    </div>
  )
}

export const Sphere = qwikify$(SkillsTagSphere)