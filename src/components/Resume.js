import {useSelector, useDispatch} from 'react-redux';
import  { changeTitle, increaseId } from '../store/actions/Courses'
import {addUser} from '../store/actions/Users'

function Resume ({}){

    const dispatch = useDispatch();
    const coursesState = useSelector(state => state.courses);
    const usersState = useSelector(state => state.users);

    return(
        <div>
            {/* {console.log(coursesState)} */}
            <h1>{coursesState.id}</h1>
            <h1>{coursesState.title}</h1>
            <button onClick={() => {
                dispatch(increaseId(coursesState.id+1));
            }}>Aumentar ID</button>
        
             <input type="text" placeholder="Digite um curso" 
                    onChange={(e) => dispatch(changeTitle(e.target.value))}></input>

            <button onClick={() =>{
                let newUsers = usersState.names;
                newUsers.push("João");
                dispatch(addUser(newUsers));
            }}> Adicionar João à lista</button>
            <h1>{usersState.names.map(name => (
                name + " - "
            ))}</h1>
            
        </div>
    )
}

/*const mapStateToProps = state =>{
    return {
        coursesState:state.courses,
        usersState:state.users,
    }
}*/

//mapeia o actioncreator para o props deste componente //a função action creator já vai pro props do componente
/* const mapDispatchToProps = dispatch => {
    return {
        changeTitle(newTitle){
            dispatch(changeTitle(newTitle));
        }
    }
} */

export default Resume;