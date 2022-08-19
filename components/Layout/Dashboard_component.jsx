import React from 'react'
import Banner_components from '../Others/Banner_components'
import Layout from './Layout_component'

const Dashboard = () => {
  return (
    <Layout isAuth={true}>
      <div>Dashboard</div>
      <Banner_components/>
    </Layout>
  )
}

export default Dashboard