import React, { useContext } from "react";
import { Grid } from '@mui/material';
import { useStyles } from './itemEm.style.component';
import { FoodManagement } from '../../../context/FoodManagement';



function ItemEm(props) {
    const classes = useStyles();
    const { recentBill } = useContext(FoodManagement);



    return (            
                recentBill.map((item, index) => {
                    return  <div className={classes.root}>
                    <Grid className={classes.grid} spacing={2}>
                    <Grid className={classes.item} item xs={5}>
                        {item.User_Name}
                    </Grid>
                    <Grid className={classes.item} item xs={4}>
                        {item.Phone}
                    </Grid>
                    <Grid className={classes.item} item xs={4}>
                        {item.Address}
                    </Grid>
                    <Grid className={classes.item} item xs={2}>
                        {item.Id}
                    </Grid>
                </Grid>
                </div>
                   
                }
                )
    );
}

export default ItemEm;
