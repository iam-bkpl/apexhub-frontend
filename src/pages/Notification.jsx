import React from 'react'
import NotificationCard from '../components/NotificationCard'

const Notification = () => {
  return (
    <>
        <section className="section-50 pt-5 bg-light" >
        <div className="container justify-content-center">
            <h3 className="m-b-50 heading-line mb-3">Notifications <i className="fa fa-bell text-muted"></i></h3>
    
            <div className="notification-ui_dd-content mb-5 col-lg-10">
                {/* Notification Goes Here */}
                <NotificationCard/>
            </div>
    
            <div className="text-center">
                <a href="" className="text-dark">Load more activity</a>
            </div>
    
        </div>
    </section>
    </>
  )
}

export default Notification