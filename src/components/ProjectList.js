export default function ProjectList({projects}) {
    return (
        <div className="projects">
            {projects.map(project => <img src={project.img} alt={project.category}></img>)}
        </div>
    )
}