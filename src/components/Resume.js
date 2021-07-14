import {connect} from 'react-redux';
import { useForm } from "react-hook-form";
import  { changeTitleAndId } from '../store/actions/Courses'

function Resume ({coursesState,changeTitleAndId}){

    const {register,handleSubmit} = useForm(); 

    function toggleTitle(data){
        changeTitleAndId(data.course,coursesState.id+1);
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
const mapDispatchToProps = dispatch => {
    return {
        changeTitleAndId(newTitle,newId){
            dispatch(changeTitleAndId(newTitle,newId));
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Resume)