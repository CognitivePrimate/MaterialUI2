
import './App.css';

// material ui
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

function App() {
  return (
    <div >
      <Button
      // all optional properties below
      // startIcon={<SaveIcon />}
      // imported SaveIcon from icon library above
      endIcon={<SaveIcon />} 
      size="large"
      href="#" 
      variant="contained" 
      color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
