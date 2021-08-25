import {useState} from "react";
import './App.css';

// material ui components
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

// material ui icons
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete"

// import components/elements from material ui
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';



// material ui functionality
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core/styles";

// import colors for theme
import {orange, green} from "@material-ui/core/colors";

// useStyles & makeStyles example for Test Styled Button
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: "0",
    borderRadius: "15px",
    color: "white",
    padding: "10px, 30px"
  }
})


// CreateTheme example
const theme = createTheme({
  // can set global styling of fonts through typography below
  typography: {
    h2: {
      fontSize: 35,
      marginBottom: 15
    }
  },
  // can set color palette below 
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[400]
    }
  }
})

// COMPONENTS -- not in sep files but normally would be
function CheckBoxExample() {
  const [checked, setChecked] = useState(true)
  return(
    // can change checkbox icon from checkbox to whatever icon --- see below
    <FormControlLabel control={
    <Checkbox 
      checked={checked}
      // icon={<DeleteIcon />}
      checkedIcon={<SaveIcon />} 
      onChange={(e)=> setChecked(e.target.checked)} 
      color="primary" 
      inputProps={{"aria-label" : "secondary checkbox"}} />}
      label="Testing Checkbox"
      />
  )
}

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function App() {
  return (
    <div className="App">
      {/* ThemeProvider requires theme prop to apply to all elements wrapped in ThemeProvider element */}
      <ThemeProvider theme={theme}>
        <Container maxWidth="md"> {/* can use sm, lg, xs(for mobile), etc for container sizes -- see documentation */}
          <AppBar>
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                MUI Themeing
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h2" component="div">
            Welcome to Material UI
          </Typography>
          <Typography variant="subtitle1" component="div">
            Learn how to use Material UI
          </Typography>
          <ButtonStyled />
          <TextField variant="outlined" color="primary" type="date"/>
          <TextField variant="filled" color="primary" type="time" label="The Time" />
          <TextField variant="filled" color="secondary" type="email" placeholder="test@test.com"/>
          <CheckBoxExample />
          <ButtonGroup>
            <Button
            // all optional properties below
            // startIcon={<SaveIcon />}
            // imported SaveIcon from icon library above
            endIcon={<SaveIcon />} 
            size="large"
            href="#" 
            variant="contained" 
            color="primary">
              Save
            </Button>

            <Button
            // all optional properties below
            // startIcon={<SaveIcon />}
            // imported SaveIcon from icon library above
            endIcon={<DeleteIcon />} 
            size="large"
            href="#" 
            variant="contained" 
            color="secondary">
              Discard
            </Button>
          </ButtonGroup>
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={3} sm={6}>
              <Paper style={{height: 75, width: "100%"}}></Paper>
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{height: 75, width: "100%"}}></Paper>
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{height: 75, width: "100%"}}></Paper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
