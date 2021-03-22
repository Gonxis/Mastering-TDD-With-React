import React from 'react';
import { Typography } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import BookListContainer from './BookListContainer';
import BookDetailContainer from './BookDetailContainer';

const App = () => {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Switch>
        <Route exact path='/' component={BookListContainer} />
        <Route path='/books/:id' component={BookDetailContainer} />
      </Switch>
    </div>
  );
}

export default App;
