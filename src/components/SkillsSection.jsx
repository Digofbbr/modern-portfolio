import { useState } from "react"

const skills = [
    {name: 'HTML', level: 95, category: 'frontend'},
    {name: 'CSS', level: 95, category: 'frontend'},
    {name: 'Tailwind CSS', level: 60, category: 'frontend'},
    {name: 'Javascript', level: 85, category: 'frontend'},
    {name: 'React', level: 70, category: 'frontend'},
    {name: 'NextJS', level: 40, category: 'frontend'},

    {name: 'Ruby on Rails', level: 75, category: 'backend'},
    {name: 'NodeJS', level: 40, category: 'backend'},
    {name: 'Express', level: 40, category: 'backend'},
    {name: 'PostgreSQL', level: 40, category: 'backend'},

    {name: 'VS Code', level: 75, category: 'tools'},
    {name: 'Figma', level: 70, category: 'tools'},
    {name: 'Git', level: 80, category: 'tools'},
]

const categories = [
    "all", "frontend", "backend", "tools"
]


const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter(skill => activeCategory === "all" || activeCategory === skill.category)
    console.log(filteredSkills)

  return (
    <section id='skills' className="py-24 px-4 relative  bg-secondary/3">  
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button className={`cursor-pointer px-5 py-2 rounded-full transition-colors duration-300 capitalize ${category === activeCategory ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary'}`} onClick={() => setActiveCategory(category)} key={key}>{category}</button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover ">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-left">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 overflow-hidden rounded-full">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%"}}/>

                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    </section>
  )
}

export default SkillsSection