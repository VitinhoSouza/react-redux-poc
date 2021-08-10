import {connect} from 'react-redux';
import { useForm } from "react-hook-form";
import  { changeTitle, increaseId } from '../store/actions/Courses'

function Resume ({coursesState,changeTitle,increaseId}){

    const {register,handleSubmit} = useForm(); 

    function toggleTitle(data){
        changeTitle(data.course);
    }

    function toggleId(){
        increaseId(coursesState.id+1);
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
        changeTitle(newTitle){
            dispatch(changeTitle(newTitle));
        },
        increaseId(newId){
            dispatch(increaseId(newId));
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Resume)