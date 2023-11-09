import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faCrown, faMedal, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons'

export const RewardIcon = [
  {
    value: 'award',
    label: (
      <div>
        <FontAwesomeIcon icon={faAward} /> Award
      </div>
    ),
  },
  {
    value: 'crown',
    label: (
      <div>
        <FontAwesomeIcon icon={faCrown} /> Crown
      </div>
    ),
  },
  {
    value: 'medal',
    label: (
      <div>
        <FontAwesomeIcon icon={faMedal} /> Medal
      </div>
    ),
  },
  {
    value: 'star',
    label: (
      <div>
        <FontAwesomeIcon icon={faStar} /> Star
      </div>
    ),
  },
  {
    value: 'trophy',
    label: (
      <div>
        <FontAwesomeIcon icon={faTrophy} /> Trophy
      </div>
    ),
  },
]
