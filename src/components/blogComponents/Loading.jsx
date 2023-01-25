import React from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'

TopBarProgress.config({
    barColors: {
        "0" : "#9fd1cd",
        "0.5" : " #7dc0ba",
        "1.0": "#5FC2BA"
    },
    shadowBlur: 10

})

const Loading = () => {
  return (
    <TopBarProgress />
  )
}

export default Loading