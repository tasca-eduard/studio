import React from 'react'

const OrangeCounter = (props) => {
    const renderOranges = () => {
        const counter = props.counter;
        let oranges = [];

        for(let i = 0; i < counter; i++) {
          oranges.push('🍊');
        }

        return oranges.map(orange => orange);
      }

    return (
        <div>
            {renderOranges()}
        </div>
    )
}

export default OrangeCounter
