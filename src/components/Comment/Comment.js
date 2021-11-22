import React from 'react'
import { StyledComment } from './Comment.styles'

export const Comment = (name, comment) => {
    return (
        <StyledComment>
            <div>
                <h5>
                    {name}
                </h5>
                <p>
                    {comment}
                </p>
            </div>
        </StyledComment>
    )
}
