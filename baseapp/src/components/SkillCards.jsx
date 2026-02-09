const SkillCard = (props) => {
    return (
        <div className="SkillCard">

        <h2>{props.titulo}</h2>
        <div className="skills">{props.skills}</div>

        </div>
    )
}

export default SkillCard