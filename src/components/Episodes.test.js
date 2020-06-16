import React from 'react';
import {render, getAllByText, screen} from '@testing-library/react'
import Episodes from './Episodes'
import {data} from './testData'
import {formatSeasons} from '../utils/formatSeasons'
import fetchShow from '../api/fetchShow'

test('check to see if component renders correctly with list of episodes', ()=>{
    //bring in data and format it
    const seasons = formatSeasons(data.embedded.episodes)
    const episodes = seasons['Season 1']
    //render the Episodes component empty
    const {rerender} = render(<Episodes episodes={[]}/>)
    //find all the seasons, should be 0
    let AllEpisodes = screen.queryAllByText(/chapter/i)
    //assert there are 0
    expect(AllEpisodes).toHaveLength(0)
    //rerender with the episodes data
    rerender(<Episodes episodes={episodes} />)
    //assert that the episodes rendered
    AllEpisodes = screen.queryAllByText(/chapter/i)
    expect(AllEpisodes).toHaveLength(8)
})



















