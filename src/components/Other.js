import {connect} from 'react-redux';

function Other ({coursesState}){

    return(
        <div>
            {console.log(coursesState)}
            <h1>{coursesState.id}</h1>
            <h1>{coursesState.title}</h1>
            
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        coursesState:state.courses,
    }
}

export default connect (mapStateToProps)(Other)