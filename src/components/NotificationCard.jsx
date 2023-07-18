import React from 'react'

const NotificationCard = () => {
    return (
        <>
            <div className="notification-list notification-list--unread bg-white border">
                <div className="notification-list_content">
                    <div className="notification-list_img">
                        <img src="" alt=""/>
                    </div>
                    <div className="notification-list_detail py-2 px-5 ">
                        <p><b>Username</b> reacted to your post</p>
                        <p className="text-muted"><small>10 mins ago</small></p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationCard