import React from 'react'
import { useStyles } from './listEm.style.component';
import { Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ItemEm from './../itemEm/itemEm.component';

function ListEmployee() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.leftheader}>
                    <p>DANH SÁCH NHÂN VIÊN</p>
                </div>
                <div className={classes.rightheader}>
                    <Button>
                        <AddIcon/> NEW
                    </Button>
                </div>
            </div>

            <div className={classes.boxmain}>
                <div className={classes.searchbox}>
                    <form action="" autoComplete="off">
                        <input type='text' name='search' placeholder="Search user..."></input>
                    </form>
                </div>

                <div className={classes.listcus}>
                    <div className={classes.head}>
                        <Grid className={classes.grid} spacing={2}>
                            <Grid className={classes.item} item xs={3}>
                                Name
                            </Grid>
                            <Grid className={classes.item} item xs={3}>
                                Email
                            </Grid>
                            <Grid className={classes.item} item xs={2}>
                                Phone
                            </Grid>
                            <Grid className={classes.item}item xs={2}>
                                Username
                            </Grid>
                            <Grid className={classes.item}item xs={2}>
                                Salary
                            </Grid>
                        </Grid>
                    </div>

                    <div className={classes.listitem}>
                        <ItemEm id={1}></ItemEm>
                        <ItemEm id={2}></ItemEm>
                        <ItemEm id={3}></ItemEm>
                        <ItemEm id={4}></ItemEm>
                        <ItemEm id={5}></ItemEm>
                        <ItemEm id={6}></ItemEm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListEmployee
