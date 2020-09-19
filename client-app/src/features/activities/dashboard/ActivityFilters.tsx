import React, { Fragment, useContext } from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { Calendar } from 'react-widgets';
import { RootStoreContext } from '../../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';

const ActivityFilters = () => {

  const rootStore = useContext(RootStoreContext);
  const { predicate, setPredicate } = rootStore.activityStore;

  return (
    <Fragment>
      <Menu vertical size={'large'} style={{ width: '100%', marginTop: 50 }}>
        <Header icon={'filter'} attached color={'teal'} content={'Filters'} />
        <Menu.Item
          active={predicate.size === 0}
          color={'blue'}
          name={'all'}
          content={'All Activities'}
          onClick={() => setPredicate('all', 'true')} />
        <Menu.Item
          active={predicate.has('isGoing')}
          color={'blue'}
          name={'username'}
          content={"I'm Going"}
          onClick={() => setPredicate('isGoing', 'true')} />
        <Menu.Item
          color={'blue'}
          name={'host'}
          content={"I'm hosting"}
          active={predicate.has('isHost')}
          onClick={() => setPredicate('isHost', 'true')} />
      </Menu>
      <Header icon={'calendar'} attached color={'teal'} content={'Select Date'} />
      <Calendar
        onChange={(date) => setPredicate('startDate', date!)}
        value={predicate.get('startDate') || new Date()} />
    </Fragment>
  );
}

export default observer(ActivityFilters);