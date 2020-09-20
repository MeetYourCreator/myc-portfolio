import React from 'react'
import axios from 'axios'

import { createUseStyles } from 'react-jss'

import Layout from '../../Components/shared/Layout/Layout.jsx'
import Meeting from '../../Components/Meeting/Meeting.jsx'

const useStyles = createUseStyles({
  meetingCard: {
    display: 'flex',
    flexDirection: 'column',
    margin: 100,
}
})

export default function Meetings() {
  const classes = useStyles()

  //Meeting card game plan
  //Use map to render t
  //each specific meeting using the Meeting componen in a table
  return (
    <table className={classes.meetingCard}>
      <tbody>
        <Meeting
          name="name"
          address1="address1"
          address2="address2"
          city="city"
          state="state"
          dayOfWeek="dayOfWeek"
          timeOfDay="timeOfDay"
          organization="organization"
        />
        <Meeting
          name="name"
          address1="address1"
          address2="address2"
          city="city"
          state="state"
          dayOfWeek="dayOfWeek"
          timeOfDay="timeOfDay"
          organization="organization"
        />
        <Meeting
          name="Woodbridge Time Takes Time"
          address1="Trinity Episcopal Church Red Sexton House"
          address2="69 Trinity Lane"
          city="Woodbridge"
          state="NJ"
          zipcode="90210"
          dayOfWeek="Friday"
          timeOfDay="12:15"
          latitude="40.56301"
          longitude="-74.27074"
          organization="AA"
        />
        <Meeting
          name="Drink and Die"
          address1="Greenpoint Reformed Church"
          address2="136 Milton St"
          city="Brooklyn"
          state="NY"
          zipcode="90210"
          dayOfWeek="Sunday"
          timeOfDay="14:00"
          latitude="40.72918"
          longitude="-73.95496"
          organization="AA"
        />
      </tbody>
    </table>
  )
}