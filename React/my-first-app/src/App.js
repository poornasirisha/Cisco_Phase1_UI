import logo from './logo.svg';
import './App.css';
import SimpleClassComponent from './Components/SimpleClassComponent';
import MountingLifecycleExample from './Components/MountingLifecycleExample';
import UpdatingLifecycleExample from './Components/UpdatingLifecycleExample';
import BookList from './Components/ListRendering';
import ParentComponent from './Components/MethodsAsProp/ParentComponent';

import Greeting from './Components/ConditionalRendering';
import UseStateHookForm from './Components/UseStateHookForm';
import UseEffectHook1 from './Components/UseEffectHook1';
import FetchDataUseEffect from './Components/FetchDataUseEffect';
import UseReducerHook from './Components/UseReducerHook';
function App() {
  const valueForSomeProps = "Hello, this is the value for someProps";
  const parentValue = "From parent props changed";
  return (
    <div className="App">  
      
      <SimpleClassComponent someProp = {valueForSomeProps} />

      <MountingLifecycleExample initialValue={parentValue}/>

      <UpdatingLifecycleExample />

      <BookList name='ABC'/>

      <ParentComponent />

      <Greeting />

      <UseStateHookForm />

      <UseEffectHook1 />

      <UseReducerHook />


      


      
    </div>
  );
}

export default App;
