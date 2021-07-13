import { createStore, combineReducers} from 'redux'
import CourserReducer from './reducers/Courses'

//qualquer action disparada, chama TODOS os reducers
const reducers = combineReducers({
    courses: CourserReducer
})

//criando o store a partir dos reducers
function storeConfig(){
    return createStore(reducers)
}

export default storeConfig