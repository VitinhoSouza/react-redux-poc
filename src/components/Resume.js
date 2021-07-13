import {connect} from 'react-redux';
import { useForm } from "react-hook-form";
import  { changeTitle } from '../store/actions/Courses'

function Resume ({coursesState,dispatch}){

    const {register,handleSubmit} = useForm(); 

    function toggleTitle(data){
        //console.log(data);
        dispatch(changeTitle(data.course));
    }

    return(
        <div>
            {console.log(coursesState)}
            <h1>{coursesState.id}</h1>
            <h1>{coursesState.title}</h1>
            <form>
                <input type="text" placeholder="Digite um curso" {...register('course', { required: true })}></input>
                <button type="submit" onClick={handleSubmit(toggleTitle)}>Cadastrar</button>
            </form>
            
            
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        coursesState:state.courses,
    }
}

//mapeia o actioncreator para o props deste componente //a função action creator já vai pro props do componente
/* const mapDispatchToProps = dispatch => {
    return {
        changeTitle(newTitle){
            const action = changeTitle(newTitle);
            dispatch(action);
        }
    }
} */

export default connect (mapStateToProps)(Resume)