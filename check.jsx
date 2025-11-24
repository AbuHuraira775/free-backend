import React from "react";
import notificationIcon from '../../src/assets/images/notification.png'
import hrprofile from '../../src/assets/images/profile.svg'
import arrow from '../../src/assets/images/arrow.svg'
import searchIcon from '../../src/assets/images/searchIcon.svg'
import arrowBottomSide from '../../src/assets/images/arrowBottomSide.svg'


function ScreenNine() {

  return (
    <div className="main">
      <div className="header flex mr-2.5 ml-2.5 mt-9">
        <div className="leftHeader w-3/6">
          <h3 className="fs-20 fw-600">Add New Employee</h3>
          <div className="flex">
            <p className="font-light text-sm">All Employee</p>
            <img src={arrow} alt="ArrowIcon" />
            <p className="font-light text-sm">Add New Employee</p>
          </div>

        </div>
        <div className="rightHeader flex w-3/6 justify-around" >
          <div className="search-bar sm:w-3 mx-2   flex rounded-lg items-center justify-center "  >
            <div className="search-div" ><img className="search-icon" src={searchIcon} alt="searchIcon" /></div>
            <input className="border-none outline-none px-1.5" type="text" placeholder="Search" />
          </div>
          <div className="notification-icon flex items-center justify-center size-12 rounded-lg" >
            <img src={notificationIcon} alt="NotificationIcon" />
          </div>
          <div className="hr-manager flex mx-2 items-center rounded-lg ">
            <img src={hrprofile} alt="HRProfile" className="size-10 mx-1" />
            <div className="mx-1">
              <h3 className="font-semibold text-base">Robert Allen</h3>
              <p className="hr-small-text text-xs font-light">HR Manager</p>
            </div>
            <div className="mx-2">
            <img src={arrowBottomSide} alt="Arrow" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ScreenNine