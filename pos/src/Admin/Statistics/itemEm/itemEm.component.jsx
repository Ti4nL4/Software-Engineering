import React, { useContext } from "react";
import { Grid } from '@mui/material';
import { useStyles } from './itemEm.style.component';
import { FoodManagement } from '../../../context/FoodManagement';



function ItemEm(props) {
    const classes = useStyles();
    const { billWithPrice } = useContext(FoodManagement);



    return (
        billWithPrice !== [] ? billWithPrice.map((item, index) => {
            return <div className={classes.root}>
                <Grid className={classes.grid} spacing={2}>
                    <Grid className={classes.item} item xs={4}>
                        {item.User_Name}
                    </Grid>
                    <Grid className={classes.item} item xs={3}>
                        {item.Address}
                    </Grid>
                    <Grid className={classes.item} item xs={6}>
                        {item.Date}
                    </Grid>
                    <Grid className={classes.item} item xs={2}>
                        {item.Total_Price}
                    </Grid>
                </Grid>
            </div>

        }
        ) :
        <div className={classes.root}>
            <Grid className={classes.grid} spacing={2}>
            <Grid className={classes.item} item xs={4}>
            No Record
            </Grid>
            </Grid>
        </div>
    );
}

export default ItemEm;
