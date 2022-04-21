import "./styles/Cars.css"

const Cars = (props) => {
    return (
        <div>
             <h1 className='Red'> This is a {props.car} and it is {props.color} in color </h1>
             <q >Let the machines take over and let the world turn {props.color} in color</q>
             <hr />
        </div>
    );
}


export default Cars;
