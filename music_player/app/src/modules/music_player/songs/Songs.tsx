import { Box, Button, Container, FormGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom';
import { ERequestStatus, useAsyncData } from '../../../hooks/useAsyncData';
import { ISong } from '../models';
import { songService } from './service';

export const SongsTable = () => {

    const { state: songsApply, call } = useAsyncData<ISong[] | ISong>();

    React.useEffect(() => {
        if (songsApply.status === ERequestStatus.IDLE) {
            call(() => songService.getSongs());
        }
    }, [songsApply.status, call]);
    const songs: any = songsApply.data

    const [songName, setSongName] = useState('')
    const [artists, setArtists] = useState('')
    const [mediaUrl, setMediaUrl] = useState('')
    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault()
        const songg: ISong = {
            _id: '1',
            name: songName,
            artists: artists,
            media_url: mediaUrl,
            upload_date: Date.now.toString(),

        }


        console.log(songg)
        call(() => songService.addSong(songg))

    }
    console.log(songsApply)

    return (<>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>

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

        </form>

        <div> <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Song Name</b></TableCell>
                        <TableCell><b>Artist</b></TableCell>
                        <TableCell><b>Madia URL</b></TableCell>
                        <TableCell><b>Upload Date</b></TableCell>
                        <Link to="/songs/add"><b><a className="text-decoration-none p-2 text-white" href="/songs/add"></a>ADD SONG </b></Link>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        (songs != null) && songs.map((song: ISong) => {
                            return (<TableRow  >
                                <TableCell component="th" scope="row">
                                    {song.name}
                                </TableCell>
                                <TableCell >{song.artists}</TableCell>
                                <TableCell >{song.media_url}</TableCell>
                                <TableCell >{song.upload_date}</TableCell>
                            </TableRow>)
                        })
                    }

                </TableBody>
            </Table>
        </TableContainer>

        </div></>
    )
}

