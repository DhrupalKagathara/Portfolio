// src/app/_components/Hero.tsx
import { Button } from 'components/ui/Button'
import Link from 'next/link'
import React from 'react'
import BlurText from "../../components/ui/BlurText";
import ShinyText from '../../components/ui/ShinyText';


export default function Hero() {
  return (
    <section className="bg-background text-foreground relative grid place-content-center py-20 px-6">
      <div className="md:max-w-2xl max-w-md text-center grid gap-1">
        <BlurText
          text={
            <>
              <div className="md:text-4xl lg:text-5xl text-3xl font-bold">
                Hi I am <span className="gradient-text ">Dhrupal Kagathra</span> a Front End Developer
                <span className="text-primary">.</span>
              </div>
            </>
          }
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl mb-8"
        />

        <ShinyText
          text="I am on a mission to become a Full Stack Developer. My goal is to gain
          proficiency in both front-end and back-end technologies"
          disabled={false}
          speed={3}
          className='custom-class'
        />
      </div>
      <div className="flex items-center justify-center gap-3 mt-5">
        <Button asChild variant="outline">
          <Link href="/about">About Me</Link>
        </Button>
        <Button asChild className="flex gap-1 items-center justify-center">
          <Link href="/projects">My Project</Link>
        </Button>
      </div>
    </section>
  )
}
