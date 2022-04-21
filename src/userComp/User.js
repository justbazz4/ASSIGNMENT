

const User = (props) => {
    let title = 'Welcome to your Dashboard'
    return (
        <div>
            <h2>{title}</h2>
            <h3>Pupil Name : {props.name}</h3>
            <h3>Pupil Age : {props.age}</h3>
            <h3>Pupil sex : {props.sex}</h3>
            <h3>Pupil Location : {props.location}</h3>
            
        </div>
        
    );
}

export default User;
