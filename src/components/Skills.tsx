import { Data, skills } from "../data/data";

function SkillCard({image, name} : Data){
    return <div className="w-32 h-32 flex justify-center flex-col items-center rounded-xl gap-4 bg-red-200 hover:bg-red-300 hover:cursor-pointer">
        <img src= {image} alt="" width={50}/>
        <h4 className="font-bold">{name}</h4>
    </div>
}

export default function Skills(){

    return (
        <div className="w-full">
            <div className="mx-auto max-w-6xl p-2 text-center mt-16">
                <h2 className='font-bold text-red-500 mb-1 mx-auto'>My Skills</h2>
                <h3 className='text-2xl font-extrabold mx-auto'>What i'm good</h3>

                <div className="flex flex-wrap justify-between mt-6 items-center gap-6">
                    {skills.map((skill)=><SkillCard name ={skill.name} image={skill.image} level={skill.level} />)}
                </div>
            </div>
        </div>
    )
}