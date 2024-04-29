import React from 'react';
import { homeCardItemsList } from '../../../data';
import CardItem from './CardItem';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import SlideDownToUp from '../../../components/slideDownToUp';
import DelayShowAnimation from '../../../components/delayShowAnimation';
import { prefixNavLink } from '../../../const/constante';

export default function Card() {
  return (
    <DelayShowAnimation>
      <div className="py-[10px]">
        {homeCardItemsList.map((card, key) => (
          <SlideDownToUp key={`card-item-${key}`}>
            <CardItem
              description={card.description}
              icon={card.icon}
              link={{
                href: `/${prefixNavLink}/${card.link.href}`,
                name: `${card.link.name}`,
              }}
              title={card.title}
            />
          </SlideDownToUp>
        ))}
      </div>
    </DelayShowAnimation>
  );
}
