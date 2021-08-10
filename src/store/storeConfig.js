import { createStore, combineReducers} from 'redux'
import CourserReducer from './reducers/Courses'
import UserReducer from './reducers/Users'

//qualquer action disparada, chama TODOS os reducers
const reducers = combineReducers({
    courses: CourserReducer,
    users:UserReducer
})

//criando o store a partir dos reducers
function storeConfig(){
    return createStore(reducers)
}

export default storeConfig