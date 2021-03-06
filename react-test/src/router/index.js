import React from 'react'
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import AppContainer from '../container/AppContainer/AppContainer'
import AdminContainer from '../container/AdminContainer/AdminContainer'
// import HomeContainer from '../container/HomeContainer/HomeContainer'
// import ArchivesContainer from '../container/ArchivesContainer/ArchivesContainer'
// import DemoContainer from '../container/DemoContainer/DemoContainer'
// import AboutContainer from '../container/AboutContainer/AboutContainer'
import NotFoundPage from '../container/NotFoundPage'


const RootRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact  path="/" component={AppContainer} />
      <Route path='/archives' component={AppContainer} />
      <Route path="/demo" component={AppContainer} />
      <Route path="/demoDetail" component={AppContainer} />
      <Route path="/about" component={AppContainer} />
      <Route path="/detail" component={AppContainer} />
      <Route path="/admin" component={AdminContainer} />
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
);
export default RootRouter;