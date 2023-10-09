import React from 'react'
import { Link } from 'gatsby'

function IconButton({variant, color, route, icon: Icon}) {
  return (
    <Link
      to={route ? route : "#"}
      className={`icon-btn icon-btn-${variant} ${color}`}>
      <Icon />
    </Link>
  )
}

export default IconButton