import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({
    root: {
        width: '100%',
        height: '700px',
    },
    header: {
        height: '40px',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        alignItems: 'center',
        
    },
    leftheader: {
        width: '50%',
    },
    rightheader: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
        '& button': {
            backgroundColor: 'rgb(0, 171, 85)',
            boxShadow: 'rgb(0 171 85 / 24%) 0px 8px 16px 0px',
            color: 'white',
            '&:hover': {
                backgroundColor: 'rgb(0, 123, 85)',
            }
        }
    },
    boxmain: {
        height: '600px',
        width: '100%',
        boxShadow: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px',
        marginTop: '20px',
        borderRadius: '20px',
        padding: '20px',
        backgroundColor:'white'

    },
    searchbox: {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        width: '400px',
        '& input': {
            height: '50px',
            width: '200px',
            border: '1px solid #ddd',
            outline: 'none',
            padding: '0 20px',
            borderRadius: '10px',
            transition: '0.5s',
            fontSize: '16px',
            color: '#555',
            '&:focus': {
                width: '250px',
                boxShadow: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 10px 20px -4px',
            },
            '&:active': {
                width: '250px',
            }
        }
    },
    listcus: {
        width: '100%',
        height: '450px',
        marginTop: '20px',
    },
    head: {
        height: '60px',
        width: '100%',
        backgroundColor: '#eeeeeeee',
        borderRadius: '10px',
        padding: '0',
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
        fontWeight:'800'
    }
}))