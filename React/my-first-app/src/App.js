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
import UseReducerForm from './Components/UseReducerForm';
import UseContextHook from './Components/UseContextHook';
import LoginFormContextReducerEffect from './Components/LoginFormContextReducerEffect';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
function App() {
  const valueForSomeProps = "Hello, this is the value for someProps";
  const parentValue = "From parent props changed";
  return (
    <div className="App">  
      
      

      
      

      

      

      <Greeting />

      <UseStateHookForm />

      <UseEffectHook1 />

      <UseReducerHook />

      <Router>
        <div>
          <nav className='horizontal-nav'>
            <ul>
              <li>
                <Link to ="/">Class Component</Link>
              </li>
              <li>
                <Link to ="/life-cycle">LifeCycle Methods</Link>
              </li>
              <li>
                <Link to ="/updating-life-cycle">Updating LifeCycle Methods</Link>
              </li>
              <li>
                <Link to ="/list-rendering">List Rendering</Link>
              </li>
              <li>
                <Link to ="/parent">Parent</Link>
              </li>
              <li>
                <Link to ="/use-reducer-form">Use Reducer Form</Link>
              </li>
              <li>
                <Link to ="/use-context">Use Context</Link>
              </li>
              <li>
                <Link to ="/login-context-reducer-effect">Login Form (Context)</Link>
              </li>
            </ul>
          </nav>
          <hr />

          <Routes>
            <Route path="/" exact element = {<SimpleClassComponent someProp = {valueForSomeProps} />} />
            <Route path="/life-cycle"  element = {<MountingLifecycleExample initialValue={parentValue}/>
} />
            <Route path="/updating-life-cycle"  element = {<UpdatingLifecycleExample />} />
            <Route path="/list-rendering"  element = {<BookList name='ABC'/>} />
            <Route path="/parent"  element = {<ParentComponent />} />
            <Route path="/use-reducer-form"  element = {<UseReducerForm />} />
            <Route path="/use-context"  element = {<UseContextHook />} />
            <Route path="/login-context-reducer-effect" element = {<LoginFormContextReducerEffect />}/>
          </Routes>
        </div>
      </Router>


      


      
    </div>
  );
}

export default App;
