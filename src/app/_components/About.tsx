'use client'

import { Button } from "../../components/ui/Button"
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="bg-background text-foreground relative grid place-content-center py-20 px-6">
      <motion.div
        className="md:max-w-3xl max-w-md text-center grid gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="md:text-4xl lg:text-3xl text-xl font-bold">
          Hi I am{" "}
          <span className="underline underline-offset-4 text-primary">
            Dhrupal Kagathra
          </span>
          .{" "}
          <TypeAnimation
            sequence={[
              "I'm a Frontend Developer",
              2000,
              "I'm a Full-stack Developer",
              2000,
              "I'm a UI Designer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-primary font-semibold"
            repeat={Infinity}
          />
        </h1>

        <p className="text-[1.1rem] mx-auto leading-relaxed text-gray-700 dark:text-gray-300">
          Hello, I'm Dhrupal Kagathra, a passionate and skilled full-stack web
          developer from Gujarat, India. I'm currently pursuing a{" "}
          <span className="underline underline-offset-4 text-primary">
            Bachelor of Engineering (BE)
          </span>{" "}
          at Marwadi University, Rajkot, Gujarat. My ambition is to become a
          successful full-stack developer and secure a prominent position in a
          leading tech company.
        </p>

        <h2 className="md:text-4xl lg:text-2xl text-xl font-bold mt-3">
          Education
        </h2>
        <hr className="border-muted dark:border-gray-600" />
        <p className="text-[1rem] mx-auto leading-relaxed mt-2 font-bold text-primary">
          2021 to 2025
        </p>
        <h2 className="md:text-4xl lg:text-xl text-xl font-bold mt-1">
          Bachelor of Engineering (B.E.)
        </h2>
        <p className="text-[1.1rem] mx-auto leading-relaxed text-gray-700 dark:text-gray-300 mt-2">
          In 2021, I started my BE at Marwadi University, Rajkot, Gujarat,
          where I am currently continuing my studies.
        </p>
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-3 mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button asChild variant="outline">
          <Link
            href="http://www.linkedin.com/in/kagathra-dhrupal-352987225"
            target="_blank"
          >
            LinkedIn
          </Link>
        </Button>
        <Button asChild className="flex gap-1 items-center justify-center">
          <Link href="https://github.com/DhrupalKagathara/" target="_blank">
            My GitHub
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
