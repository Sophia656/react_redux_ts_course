import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCretors from '../store/action-creators/';

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCretors, dispatch)
}