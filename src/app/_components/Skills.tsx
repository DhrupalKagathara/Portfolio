'use client'

import React from 'react'
import { FaHtml5, FaReact, FaNodeJs, FaAngular, FaDatabase } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import {
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiBootstrap,
    SiMongodb,
    SiMysql,
    SiFirebase,
    SiExpress,
    SiGit,
    SiGithub,
    SiC,
} from 'react-icons/si'
import { DiPython } from 'react-icons/di'
import { Tooltip } from '@nextui-org/react'
import type { IconType } from 'react-icons'
import VsCodeIcon from 'components/icons/VsCodeIcon'

interface Skill {
    Icon: IconType
    color: string
    name: string
}

export default function Skills(): React.ReactElement {
    const frontend: Skill[] = [
        { Icon: FaReact, color: '#5ed3f3', name: 'React.js' },
        { Icon: FaAngular, color: '#dd0031', name: 'AngularJS' },
        { Icon: SiJavascript, color: '#ecda1d', name: 'JavaScript' },
        { Icon: SiTypescript, color: '#3178c6', name: 'TypeScript' },
        { Icon: FaHtml5, color: '#dd4b24', name: 'HTML5' },
        { Icon: IoLogoCss3, color: '#2862e9', name: 'CSS3' },
        { Icon: SiTailwindcss, color: '#38bdf8', name: 'Tailwind CSS' },
        { Icon: SiBootstrap, color: '#7952B3', name: 'Bootstrap' },
        // Next.js does not have a dedicated icon in react-icons, you can add a custom one if needed
    ]

    const backend: Skill[] = [
        { Icon: FaNodeJs, color: '#3c873a', name: 'Node.js' },
        { Icon: SiExpress, color: '#000000', name: 'Express.js' },
        { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
        { Icon: SiMysql, color: '#00758F', name: 'MySQL' },
        { Icon: SiFirebase, color: '#FFCA28', name: 'Firebase' },
        // For database in general, you could use FaDatabase if you want
    ]

    const languages: Skill[] = [
        { Icon: SiJavascript, color: '#ecda1d', name: 'JavaScript' },
        { Icon: SiTypescript, color: '#3178c6', name: 'TypeScript' },
        { Icon: DiPython, color: '#306998', name: 'Python' },
        { Icon: SiC, color: '#A8B9CC', name: 'C' },
    ]

    const tools: Skill[] = [
        { Icon: VsCodeIcon, color: '#007ACC', name: 'VS Code' },
        { Icon: SiGit, color: '#F05032', name: 'Git' },
        { Icon: SiGithub, color: '#211F1F', name: 'GitHub' },
    ]

    const renderSkillGroup = (skills: Skill[]) =>
        skills.map((skill, index) => (
            <Tooltip
                key={index}
                placement="top"
                showArrow
                content={
                    <div className="flex items-center space-x-2">
                        <skill.Icon className="h-6 w-6" color={skill.color} />
                        <span>{skill.name}</span>
                    </div>
                }
                classNames={{
                    base: ['before:bg-gray-600 dark:before:bg-gray-300'],
                    content: [
                        'flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg',
                        'font-medium text-sm',
                    ],
                }}
            >
                <div className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <skill.Icon
                        className="h-10 w-10 sm:h-12 sm:w-12 md:h-12 md:w-12 lg:h-14 lg:w-14"
                        color={skill.color}
                    />
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {skill.name}
                    </span>
                </div>
            </Tooltip>
        ))

    return (
        <div className="py-4 -mt-5 mb-10 px-5">
            {/* Frontend */}
            <div className="py-20 -mb-12 text-center">
                <h1 className="text-2xl font-bold">
                    Frontend<span className="text-primary">.</span>
                </h1>
            </div>
            <div className="flex gap-6 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
                {renderSkillGroup(frontend)}
            </div>

            {/* Backend */}
            <div className="py-16 -mb-12 text-center">
                <h1 className="text-2xl font-bold">
                    Backend<span className="text-primary">.</span>
                </h1>
            </div>
            <div className="flex gap-6 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
                {renderSkillGroup(backend)}
            </div>

            {/* Languages */}
            <div className="py-16 -mb-12 text-center">
                <h1 className="text-2xl font-bold">
                    Languages<span className="text-primary">.</span>
                </h1>
            </div>
            <div className="flex gap-6 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
                {renderSkillGroup(languages)}
            </div>

            {/* Tools & Services */}
            <div className="py-16 -mb-12 text-center">
                <h1 className="text-2xl font-bold">
                    Tools & Services<span className="text-primary">.</span>
                </h1>
            </div>
            <div className="flex gap-6 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
                {renderSkillGroup(tools)}
            </div>
        </div>
    )
}
