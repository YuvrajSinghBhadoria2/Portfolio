'use client';

import React from 'react';
import Image from 'next/image';

const Sports = () => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          🏅 Not Just Tech - I'm Built for the Fast Lane
        </h2>
        <p className="mt-2 text-muted-foreground text-lg">
          (On Wheels, Tables, and Consoles)
        </p>
      </div>

      <div className="space-y-6 text-muted-foreground text-base">
        <p>
          Before I dove deep into development, I was speeding through life quite literally on skates 🛼. I've been skating since childhood and even made it to the national level. It taught me discipline, balance, and how to keep moving forward no matter the bumps (or bruises).
        </p>
        <p>
          My love for sports didn't stop there. I've proudly captained my college snooker team 🎱—snooker's actually my all-time favorite. It's a game of precision, patience, and strategy, basically debugging, but with more chalk and cooler posture.
        </p>
        <p>
          On the virtual side of things, I was also part of a professional esports team 🎮. It's high-speed, high-pressure, and weirdly similar to deploying a complex AI model with zero margin for error.
        </p>
        <p>
          When I'm not leading code or cue sports, you'll catch me on a bike ride 🏍️—it's my way to chase the thrill and hit pause on the chaos. Two wheels, open roads, and some deep thinking time works every time.
        </p>
        <p>
          And just for fun? I enjoy a game of badminton 🏸, a match of football ⚽, or a thoughtful round of chess ♟️. Win or lose, it's all part of staying sharp mentally and physically.
        </p>
      </div>

      {/* Bike Photos Gallery */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6 text-center">Bike Adventures</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="aspect-square overflow-hidden rounded-xl bg-muted">
            <Image 
              src="/bike1.jpg" 
              alt="Biking adventure" 
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-xl bg-muted">
            <Image 
              src="/bike2.jpg" 
              alt="Mountain biking" 
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-xl bg-muted">
            <Image 
              src="/bike3.jpg" 
              alt="Road cycling" 
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <p className="text-center text-muted-foreground mt-4 italic">
          Photos coming soon - stay tuned for my biking adventures!
        </p>
      </div>
    </div>
  );
};

export default Sports;