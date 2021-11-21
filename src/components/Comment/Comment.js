import React from 'react'
import { StyledComment } from './Comment.styles'

export const Comment = (comment) => {
    return (
        <StyledComment>
            <div>
                <p>
                    {comment}
                </p>
            </div>
        </StyledComment>
    )
}
