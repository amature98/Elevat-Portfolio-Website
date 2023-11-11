import { Box } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import NavBar from '../Components/Navigation/Navbar'
import PropTypes from 'prop-types'
import Footer from '../Components/Footer/Footer'

function Page({children, title=''}) {
  return (
      <Box>
          <Helmet>
              <title> {title} </title>
          </Helmet>
              <NavBar /> 
              {children}
              <Footer />
    </Box>
  )
}
Page.prototype = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string
}

export default Page