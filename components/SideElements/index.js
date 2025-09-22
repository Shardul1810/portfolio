

import React from 'react'
import Instagram from '../SVGs/Instagram'
import LinkedIn from '../SVGs/LinkedIn'


const SideElementsItem = ({ items, position }) => {
    return (
        <div className={`mk-side-elements-container mk-side-elements-${position}`} >
            {(items || []).map((item, i) => (
                <div key={i} className='mk-side-elements-item'>
                    {item}
                </div>
            ))}
            <div className='mk-side-elements-line' />
        </div>
    )
}


const SideElements = ({ data: {
    emailButton,
    handleIconClick,
} }) => {
    return (
        <div className='mk-side-elements'>
            {/* left side  */}
            <SideElementsItem
                position="left"
                items={[
                    <Instagram onClick={() => handleIconClick('instagram')} key="Instagram" width={20} height={20} />,
                    <LinkedIn onClick={() => handleIconClick('linkedin')} key="LinkedIn" width={20} height={20} />,
                ]}
            />

            {/* right side  */}
            <SideElementsItem
                position="right"
                items={[
                    <div
                        onClick={emailButton?.onClick}
                        key="website" className='mk-side-elements-text'>
                        {emailButton?.label}
                    </div>,
                ]}
            />
        </div>
    )
}

SideElements.propTypes = {}

export default SideElements