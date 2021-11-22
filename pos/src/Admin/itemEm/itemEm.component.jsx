import React from "react";
import { Grid } from '@mui/material';
import { useStyles } from './itemEm.style.component';


function ItemEm(props) {
    const classes = useStyles(); 

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} spacing={2}>
                <Grid className={classes.item} item xs={3}>
                    Name
                </Grid>
                <Grid className={classes.item} item xs={4}>
                    Email
                </Grid>
                <Grid className={classes.item} item xs={3}>
                    Phone
                </Grid>
                <Grid className={classes.item} item xs={2}>
                    Username
                </Grid>

            </Grid>
        </div>
    );
}

export default ItemEm;
