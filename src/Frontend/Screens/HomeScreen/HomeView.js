
import BaseView from 'frontend/Containers/BaseView'
import React from 'react'
import { FlatList, View, WebView } from 'react-native'
import { icBar } from 'utils/globalIcons'
import ClientCell from './Components/ClientCell'
import styles from './styles'
import PropTypes from 'prop-types'
import { TabBarBottom } from 'react-navigation'

export const HomeView = ({ navigation, clientState, gotoDetail }) => (
    <WebView
      scalesPageToFit={false}
      source={{ uri: 'https://itviec.com/' }}
    />
  )

HomeView.defaultProps = {
  navigation: {},
  gotoDetail: (clients) => {},
  clientState: {}
}

HomeView.propTypes = {
  navigation: PropTypes.object,
  gotoDetail: PropTypes.func,
  clientState: PropTypes.object
}
