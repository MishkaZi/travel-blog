import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  heading: {
    color: '#55133B',
    fontWeight: '400',
    textTransform: 'lowercase',
  },
  image: {
    marginLeft: '15px ',
    borderRadius: '40%',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}));
