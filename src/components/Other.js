import {connect, useSelector} from 'react-redux';

function Other (){

    const coursesState = useSelector(state => state.courses);
    const usersState = useSelector(state => state.users);

    return(
        <div>
            {/* {console.log(coursesState)} */}
            <h1>{coursesState.id}</h1>
            <h1>{coursesState.title}</h1>
            <h1>{usersState.names.map(name => (
                name + " - "
            ))}</h1>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        coursesState:state.courses,
    }
}

export default connect (mapStateToProps)(Other)