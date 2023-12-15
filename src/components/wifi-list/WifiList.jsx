import React from 'react'
import WifiItem from '../wifi-item/WifiItem'
import './WifiList.scss'

function WifiList() {
  
  const wifiList = [
    {name: 'wifi1'},
    {name: 'wifi3'},
    {name: 'wifi5'},
    {name: 'wifi7'},
    {name: 'wifi8'},
  ]

  return (
    <div>
    <nav className="wifi_list">
      {
        wifiList.map(wifi => (
          <WifiItem key={wifi.name} name={wifi.name} />
        ))
      }
    </nav>
    </div>
  )
}

export default WifiList