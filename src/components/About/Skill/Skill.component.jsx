import React from 'react';

import './Skill.styles.scss';

const SkillIcons = [
  { id: 1, src: '/SkillIcons/Html5-icon.svg', alt: 'HTML5'},
  { id: 2, src: '/SkillIcons/Css3-icon.svg', alt: 'CSS3'},
  { id: 3, src: '/SkillIcons/Sass-icon.svg', alt: 'SASS'},
  { id: 4, src: '/SkillIcons/Npm-icon.svg', alt: 'NPM'},
  { id: 5, src: '/SkillIcons/Expressjs-icon.svg', alt: 'ExpressJS'},
  { id: 6, src: '/SkillIcons/Firebase-icon.svg', alt: 'Firebase'},
  { id: 7, src: '/SkillIcons/Git-icon.svg', alt: 'Git'},
  { id: 8, src: '/SkillIcons/Postgresql-icon.svg', alt: 'Postgresql'},
  { id: 9, src: '/SkillIcons/Postman-icon.svg', alt: 'Postman'},
  { id: 10, src: '/SkillIcons/React-icon.svg', alt: 'React'},
  { id: 11, src: '/SkillIcons/Redux-icon.svg', alt: 'Redux'},
  { id: 12, src: '/SkillIcons/Javascript-icon.svg', alt: 'JavaScript'},
  { id: 13, src: '/SkillIcons/Vitejs-logo.svg', alt: 'ViteJS'},
  { id: 14, src: '/SkillIcons/Framer-motion-icon.svg', alt: 'Framer Motion'},
  { id: 15, src: '/SkillIcons/Node.js-icon.svg', alt: 'Node.JS'},
  { id: 16, src: '/SkillIcons/GIMP-icon.png', alt: 'GIMP'},
]

const Skill = () => {
  return (
    <>
      {SkillIcons.map(({ id, src, alt }) => (
        <div key={id} className='skill-container'>
          <img src={src} alt={alt} loading="lazy" width="50" height="50" decoding="async"/>
          <span>{alt}</span>
        </div>
      ))}
    </>
  )
}

export default Skill;