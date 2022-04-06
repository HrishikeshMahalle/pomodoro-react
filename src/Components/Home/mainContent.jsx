import React from 'react'
import './mainContent.css'
import TodoItems from '../Elements/TodoItems/todoItems'

export default function MainContent() {
  return (
    <>
    <div className="main-content">
        {/* <div className="header">
            <div className="searchbar">
                Search-bar
            </div>
            <div className="login-bar">
                Login-Logo
            </div>
        </div>
        <div className="head-title">
            Projects
        </div> */}
        <div className="content">
            <div className="sub-content">
                <div className="sub-header">
                    Todos
                </div>
                <div className="addBtn">
                    <button>+</button>
                </div>
                <TodoItems/>
            </div>
            <div className="sub-content">
                <div className="sub-header">
                    In Progress
                </div>
                <div className="addBtn">
                    <button>+</button>
                </div>


            </div>
            <div className="sub-content">
                <div className="sub-header">
                    Completed
                </div>
                <div className="addBtn">
                    <button>+</button>
                </div>

            </div>
            
        </div>
    </div>
    </>
  )
}
