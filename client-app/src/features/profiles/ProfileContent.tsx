import { observer } from 'mobx-react-lite'
import React from 'react'
import { Tab } from 'semantic-ui-react'
import ProfileActivities from './ProfileActivities'
import ProfileDescription from './ProfileDescription'
import ProfileFollowings from './ProfileFollowings'
import ProfilePhotos from './ProfilePhotos'

const panes = [
    {menuItem: 'About', render: () => <ProfileDescription />},
    {menuItem: 'Photos', render: () => <ProfilePhotos />},
    {menuItem: 'Activities', render: () => <ProfileActivities /> },
    {menuItem: 'Followers', render: () => <ProfileFollowings />},
    {menuItem: 'Following', render: () => <ProfileFollowings />},
]

const ProfileContent:React.FC<{setActiveTab: (activeIndex: any) => void}> = ({setActiveTab}) => {
    return (
        <Tab 
        menu={{fluid: true, vertical: true}}
        menuPosition = 'right'
        panes={panes}
        onTabChange={(e, data) => setActiveTab(data.activeIndex)}
        />
    )
}

export default observer(ProfileContent)
