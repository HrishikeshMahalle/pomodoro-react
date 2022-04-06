import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <> 
    <div className="sidebar">
        <div className="main-logo">
          La Todo
        </div>
        <div className="navigations">
          <div className="nav-item">
            <div className="nav-logo">
              Logo
            </div>
            <div className="nav-title">
              Overview
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-logo">
              Logo
            </div>
            <div className="nav-title">
              Stats
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-logo">
              Logo
            </div>
            <div className="nav-title">
              Calender
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
