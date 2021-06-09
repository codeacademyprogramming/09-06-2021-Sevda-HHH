import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ERequestStatus, useAsyncData } from '../../../hooks/useAsyncData';
import { ISong } from '../models';
import { songService } from './service';

export const SongsPage = () => {

    // const { state: songsApply, call } = useAsyncData<ISong[] | ISong>();

    // React.useEffect(() => {
    //     if (songsApply.status === ERequestStatus.IDLE) {
    //         call(() => songService.getSongs());
    //     }
    // }, [songsApply.status, call]);
    // const songs: any = songsApply.data
    return (
        <div>Songs page
            {/* <BrowserRouter>
                <Switch>
                    <Route path="/songs" exact component={SongsTable} />
                    <Route path="/songs/addSong" exact component={AddSong} />

                </Switch>
            </BrowserRouter> */}
        </div>
    )
}
