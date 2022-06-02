import React, { useState } from 'react'
import { useSprings, animated, to } from 'react-spring'
import { useGesture } from '@use-gesture/react'

import {
  HomeCard,
  LawgileHome,
  LawgileTech,
  LinxHome,
  LinxTech,
  EdukanHome,
  EdukanTech,
  WeatherHome,
  WeatherTech,
} from '../cards';

// import arrow from '../assets/arrow.png';
import swipe from '../assets/swipe.png';
import classNames from 'classnames';

const cards = [
  (<WeatherTech />),
  (<WeatherHome />),
  (<EdukanTech />),
  (<EdukanHome />),
  (<LinxTech />),
  (<LinxHome />),
  (<LawgileTech />),
  (<LawgileHome />),
  (<HomeCard />),
]

const toHelper = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const transition = (rot, scale) => `perspective(1500px) rotateX(30deg) rotateY(${rot / 10}deg) rotateZ(${rot}deg) scale(${scale})`

const onDrag = ({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }, gone, api, setHasDragOccured) => {
  if (index === cards.length - 1) setHasDragOccured(true);
  const trigger = vx > 0.1

  if (!active && trigger) gone.add(index)

  api.start(i => {
    if (index !== i) return

    const isGone = gone.has(index)
    const x = isGone ? (200 + window.innerWidth) * xDir : (active ? mx : 0 )
    const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0)
    const scale = active ? 1.1 : 1
    return {
      x,
      rot,
      scale,
      delay: undefined,
      config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
    }
  })

  if (!active && gone.size === cards.length) setTimeout(() => {
    gone.clear();
    api.start(i => toHelper(i))
  }, 600)
}

const Deck = () => {
  const [gone] = useState(() => new Set())
  const [hasDragOccured, setHasDragOccured] = useState(false);

  const [springs, api] = useSprings(cards.length, i => ({
    from: { x: 0, rot: 0, scale: 1.5, y: -1000},
    to: toHelper(i),
  }))

  const bind = useGesture(
    {
      onDrag: (state) => onDrag(state, gone, api, setHasDragOccured),
      onHover: ({ args: [index], active }) => {
        api.start(i => {
          if (index !== i) return
      
          return {
            scale: active ? 1.2 : 1,
            delay: undefined,
          }
        })
      },
    },
    { drag: {
      axis: 'x',
    }}
  )

  return (
    <div>
      {/* <img className='left-arrow' src={arrow} /> */}
      {/* <img className='right-arrow' src={arrow} /> */}
      <div className={classNames(
        'swipe',
        {'swipe-fade': hasDragOccured},
      )}>
        <img className='swipe__img' src={swipe} />
        <span className='swipe__text'>Swipe it!</span>
      </div>
      {springs.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
          <animated.div className="card" {...bind(i)} style={{ transform: to([rot, scale], transition), touchAction: 'pan-y' }}>{cards[i]}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default React.memo(Deck);