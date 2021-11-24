import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(({
    root: {
        height: '60px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: '#eeeeeeee',
        },
        '& button': {
            minWidth: '40px',
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            color: '#999',
        }
    },
    grid: {
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        width: '95% !important',
        padding: '0 40px',
    },
    item: {
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 !important',
    },
    boxPop: {
        height: '80px',
        width: '150px',
        '& button': {
            height: '40px',
            width: '150px',
            border: '1px solid #eee',
        }
    }
}))