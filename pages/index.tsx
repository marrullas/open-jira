import { Typography } from '@mui/material'
import type { NextPage } from 'next'

import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (

    <Layout>
      <Typography variant="h1" color='primary'> Hola Magola</Typography>

    </Layout>
  )
}

export default HomePage
