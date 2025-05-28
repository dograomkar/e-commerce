import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='decriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce varius, velit in tincidunt venenatis, lorem purus ullamcorper sapien, at feugiat massa erat in nisl. Curabitur auctor, libero eget sollicitudin ullamcorper, justo ligula pharetra arcu, id cursus lorem nisl nec augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce varius, velit in tincidunt venenatis, lorem purus ullamcorper sapien, at feugiat massa erat in nisl. Curabitur auctor, libero eget sollicitudin ullamcorper, justo ligula pharetra arcu, id cursus lorem nisl nec augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</p>
        </div>
    </div>
  )
}
export default DescriptionBox