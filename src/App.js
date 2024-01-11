// import logo from './logo.svg';
import './App.css';
import CompUpdate from './Component/LifecycleMethod/CompUpdate';
// import Counter from './Component/Counter';
// import FirstComp from './Component/FirstComp';
// import ComDidMount from './Component/LifecycleMethod/ComDidMount';
// import GetDerived from './Component/LifecycleMethod/GetDerived';
// import LCM from './Component/LifecycleMethod/LCM';
// import ParentCount from './Component/ShouldComp/ParentCount';
// import GetDerived from './Component/LifecycleMethod/GetDerived';
// import Task from './Component/Task';
import ParentCountF from './Component/LifecycleMethod/ParentCountF';
import UnmountComp from './Component/LifecycleMethod/UnmountComp';
function App() {
  return (
    <div className="App">
      {/* <FirstComp /> */}
      {/* <Task/> */}
      {/* <Counter/> */}
      <ParentCountF/>
      <CompUpdate/>
      <UnmountComp/>
      {/* <LCM/>
      <GetDerived academyProps="Hello world" />
      <ComDidMount />
      <ParentCount /> */}

    </div>
  );
}

export default App;
