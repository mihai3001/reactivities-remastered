import React from 'react'
import { Image, List, Popup } from 'semantic-ui-react'
import { IAttendee } from '../../../app/models/activity'

const styles = {
    borderColor: '#226B9B',
    borderWidth: 2
}
const ActivityListItemAttendees: React.FC<{ attendees: IAttendee[] }> = ({ attendees }) => {
    return (
        <List horizontal>
            {attendees.map((attendee) => (
                <List.Item key={attendee.username}>
                    <Popup header={attendee.displayName}
                        trigger={<Image size='mini' circular
                            src={attendee.image || '/assets/user.png'}
                            bordered
                            style={attendee.following ? styles : null} />} />
                </List.Item>
            ))}
        </List>
    )
}

export default ActivityListItemAttendees
