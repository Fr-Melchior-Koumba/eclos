import React from 'react'
import { styles } from '../../assets/js/styles'
import { projects } from '../../constants'
import { Link } from 'react-router-dom'
import { git, view } from '../../assets/images'

const Project = () => {
  return (
    <section id="project" className='py-[10rem]'>
      <div className={`${styles.flexStart} flex-col`}>
        <h2 className='w-full flex flex-row justify-between items-center text-gradient font-bold text-[22px] ss:text-[40px]'>Projets Standards</h2>
      </div>
      <div className='sm:flex justify-between items-center gap-5'>
          {projects.map((project) => (
            <div key={project.id} className='my-5'>
              <img src={project.img} width={300} height={450} alt={project.name} className='py-5'/>
              <h1 className='text-gradient text-[25px] ss:text-[30px] font-bold'>{project.name}</h1>
              <h2 className='text-white text-[18px] ss:text-[22px] tracking-[1px]'>{project.techno}</h2>
              <p className={`${styles.paragraph}`}>{project.text}</p>
              <div className='flex w-full items-center gap-[5rem] my-5'>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <img src={git} alt="github" width={45} height={45} />
                </a>
                <a href={project.view} target="_blank" rel="noopener noreferrer">
                  <img src={view} alt="view" width={45} height={45} />
                </a>
              </div>
            </div>
          ))}
      </div>

    </section>
  )
}

export default Project