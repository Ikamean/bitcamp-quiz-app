import './App.css';
import React from 'react'
import CategorysPage from './pages/categoryList'
import Difficulty from './pages/difficulty'
import QuestionList from './pages/questionList'
import Result from './pages/result'
import { Switch, Route } from "react-router-dom";
import StartPage from './pages/startPage'


function App() {

  return (
      <>
      <Switch>

        <Route exact path='/'>
          <StartPage />
        </Route>

        <Route exact path='/category'>
          <CategorysPage />
        </Route>

        <Route exact path='/difficulty'>
          <Difficulty />
        </Route>


        <Route exact path='/questions'>
          <QuestionList />
        </Route>

        <Route exact path='/result'>
          <Result/>
        </Route>

      </Switch>


      </>
  );
}

export default App;
