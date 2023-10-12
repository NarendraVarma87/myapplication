function Header(props) {
    return(
        <div>
            <h3>Name : {props.name}</h3>
            <h3>Age : {props.age}</h3>
            <h3>SkillSet : {props.skills}</h3>
            <h3>Earnings : {props.salary}</h3>
            <hr />
        </div>
    )
}
export default Header;