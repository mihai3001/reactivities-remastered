import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import NavBar from '../../features/nav/NavBar';
import { IActivity } from '../models/activity';

const App = () => {

  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity| null>(null);
  const [editMode, setEditMode] = useState(false);


  const handleSelectActivty = (id: string) => {
    setSelectedActivity(activities.filter(x => x.id === id)[0]);
    setEditMode(false);
  }

  const handleCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  }
  const handleEditActivity = (activity: IActivity) => {
    setActivities([...activities.filter(a=> a.id !==activity.id), activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  }
  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  }

  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter(a=> a.id !==id)]);
  }

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        let activities: IActivity[] = [];
        response.data.forEach(activity => {
          activity.date = activity.date.split('.')[0];
          activities.push(activity);
        });
        setActivities(activities);
      });
  }, [])
  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm}/>
      <Container style={{marginTop:'7em'}}>
        <ActivityDashboard 
          deleteActivity={handleDeleteActivity}
          activities={activities} 
          selectActivity={handleSelectActivty}
          selectedActivity={selectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          createActivity={handleCreateActivity}
          editActivity={handleEditActivity}
          />
      </Container>
    </Fragment>
  );
}

export default App;
