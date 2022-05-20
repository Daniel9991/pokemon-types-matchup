import React from 'react'

import './Header.css'

export default function Header() {
  return (
	<header>
		<h1 className="header-title">Pokemon Types Matchup</h1>
		<div className="under-bar">
			<div className="under-bar-red"></div>
			<div className="under-bar-white"></div>
			<div className="under-bar-ball">
				<div className="under-bar-ball-center"></div>
			</div>
		</div>
	</header>
  )
}
