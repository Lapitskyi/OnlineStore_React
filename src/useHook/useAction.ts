import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../redux/action-creators';

// hook Dispatch(useDispatch)
const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreator, dispatch);
};

export default useAction;
