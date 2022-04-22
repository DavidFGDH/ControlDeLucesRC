import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import {FormControlLabel, Grid} from "@mui/material";
import FlashlightOffIcon from '@mui/icons-material/FlashlightOff';
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import dataService from "../services/DataService";

const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
        '&:after': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
    },
}));
export default function BasicCard(props) {
    const [estado,setestado]=React.useState(props.Estado)
    const updateState = (e) => {
        setestado(e.target.checked)
        dataService.update({
            id:props.id,
            Nombre:props.Nombre
        },e.target.checked)
    }
    return (
        <Card>
            <CardContent>

            <Grid container spacing={3} >
                <Grid item xs={1} style={{paddingLeft:15}} >
                    {estado && <>
                        <FlashlightOnIcon  color={'success'} fontSize={'large'}/>
                    </>}
                    {!estado && <FlashlightOffIcon color={'warning'} fontSize={'large'}/>}
                </Grid>
                <Grid item xs={11}>
                    <FormControlLabel
                        control={<Android12Switch checked={estado} onChange={(e)=>{
                            updateState(e)
                        }} />}
                        label={props.Nombre}
                    />
                </Grid>
            </Grid>
            </CardContent>
            <Grid>

            </Grid>

        </Card>
    );
}