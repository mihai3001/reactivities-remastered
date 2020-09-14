import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import ActivityStore from '../../../app/stores/activityStore';


const ActivityList: React.FC = () => {

    const activityStore = useContext(ActivityStore);
    const {activitiesByDate, selectActivity, deleteActivity, submitting, target} = activityStore;
    return (
        <Segment clearing>
            <Item.Group divided>
                {activitiesByDate.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color='blue' />
                                <Label basic content={activity.category} />
                                <Button name={activity.id} 
                                loading={target=== activity.id && submitting} 
                                onClick={(event) => deleteActivity(event, activity.id)} 
                                floated='right' 
                                content='Delete' 
                                color='red' />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>

    )
}

export default observer(ActivityList)