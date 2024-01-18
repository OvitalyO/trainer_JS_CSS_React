import './App.css';
import Variables from "./components/Variables";
import Function from "./components/Function";

function App() {
    // const myInfo = {
    //     name : "Vitaly",
    //     age : 36,
    //     work : true,
    // };
    // const { name, age, work} = myInfo;
    // // console.log(name)
    //
    // function aboutMe (name, age){
    //     return "My name is " + name+ ", age is " + age;
    // }
    // aboutMe()aboutMe
  return (
    <div className="App">
        {/*<Variables/>*/}
        <Function/>
    </div>
  );
}

export default App;
