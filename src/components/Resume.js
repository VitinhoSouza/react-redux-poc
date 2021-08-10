import {connect} from 'react-redux';
import { useForm } from "react-hook-form";
import  { changeTitle, increaseId } from '../store/actions/Courses'
import {addUser} from '../store/actions/Users'

function Resume ({coursesState,usersState,changeTitle,increaseId,addUser}){

    const {register,handleSubmit} = useForm(); 

    function toggleTitle(data){
        changeTitle(data.course);
    }

    function toggleId(){
        increaseId(coursesState.id+1);
    }

    function toggleName(){
        addUser("João");
    }

    return(
        <div>
            {console.log(coursesState)}
            <h1>{coursesState.id}</h1>
            <h1>{coursesState.title}</h1>
            <button onClick={toggleId}>Aumentar ID</button>
            <form>
                <input type="text" placeholder="Digite um curso" {...register('course', { required: true })}></input>
                <button type="submit" onClick={handleSubmit(toggleTitle)}>Cadastrar</button>
            </form>
            <button onClick={toggleName}> Mudar nome para João </button>
            <h1>{usersState.name}</h1>
            
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        coursesState:state.courses,
        usersState:state.users,
    }
}

//mapeia o actioncreator para o props deste componente //a função action creator já vai pro props do componente
const mapDispatchToProps = dispatch => {
    return {
        changeTitle(newTitle){
            dispatch(changeTitle(newTitle));
        },
        increaseId(newId){
            dispatch(increaseId(newId));
        },
        addUser(newUser){
            dispatch(addUser(newUser));
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Resume)