import React from 'react';
import { homeCardItemsList } from '../../../data';
import CardItem from './CardViewItem';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import SlideDownToUp from '../../../components/slideDownToUp';
import DelayShowAnimation from '../../../components/delayShowAnimation';
import { prefixNavLink } from '../../../const/constante';
import CardViewItem from './CardViewItem';

export default function Card() {
  return (
    <DelayShowAnimation>
      <div className="py-[10px]">
        {homeCardItemsList.map((card, key) => (
          <SlideDownToUp key={`card-item-${key}`}>
            <CardViewItem
              description={card.description}
              icon={card.icon}
              link={{
                href: `${card.link.href}`,
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
