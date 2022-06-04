import { Button, FormGroup, TextField } from '@material-ui/core';
import { Box, Container } from '@material-ui/core';
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants';
import React, { useState } from 'react'
import { FormEvent } from 'react';
import { ERequestStatus, useAsyncData } from '../../../hooks/useAsyncData';
import { ISong } from '../models';
import { songService } from './service';

export const AddSong = () => {

    // const { state: songsApply, call } = useAsyncData<ISong[] | ISong>();
    // React.useEffect(() => {
    //     if (songsApply.status === ERequestStatus.IDLE) {
    //         call(() => songService.getSongs());
    //     }
    // }, [songsApply.status, call]);
    // const [songName, setSongName] = useState('')
    // const [artists, setArtists] = useState('')
    // const [mediaUrl, setMediaUrl] = useState('')

    // const handleSubmit = (evt: FormEvent) => {
    //     evt.preventDefault()
    //     const songg: ISong = {
    //         name: songName,
    //         artists: artists,
    //         media_url: mediaUrl,
    //         upload_date: Date.now.toString(),

    //     }


    //     console.log(songg)
    //     call(() => songService.addSong(songg))

    // }
    // console.log(songsApply)

    return (
        <div>
            jkln
            {/* <form noValidate autoComplete="off" onSubmit={handleSubmit}>

                <Box>
                    <Container>
                        <FormGroup>
                            <TextField
                                id="standard-basic"
                                value={songName}
                                onChange={evt => setSongName(evt.target.value)}
                                label="Song Name"
                                name="songName"
                                type="text" />
                        </FormGroup>
                        <FormGroup>
                            <TextField
                                id="standard-basic"
                                label="Artist(s) name "
                                name="artists"
                                type="text"
                                value={artists}
                                onChange={evt => setArtists(evt.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <TextField
                                id="standard-basic"
                                label="Medi Url"
                                name="mediaUrl"
                                type="text"
                                value={mediaUrl}
                                onChange={evt => setMediaUrl(evt.target.value)} />
                        </FormGroup>
                        <Button type="submit" color="primary" variant="contained">
                            Submit
         </Button>
                    </Container>

                </Box>

            </form> */}

        </div>
    )
}

