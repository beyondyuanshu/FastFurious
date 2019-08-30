import React from "react"
import { makeStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import NativeSelect from "@material-ui/core/NativeSelect"
import Typography from "@material-ui/core/Typography"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    minWidth: 150,
    borderRadius: 20,
  },
}))

function CreateTableOfContent() {
  const classes = useStyles()

  const [theme, setTheme] = React.useState({
    palette: {
      type: "light",
    },
  })
  const [state, setState] = React.useState({
    arboardSort: "Left to Right",
    arboardInnerLayersSort: "Bottom to Top",
  })

  window.setTheme = function(themeColor) {
    let newPaletteType = themeColor === "dark" ? "dark" : "light"
    setTheme({
      palette: {
        type: newPaletteType,
      },
    })
  }

  const handleChange = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  const handleCancel = () => {
    window.postMessage("cancel")
  }

  const handleCreate = () => {
    window.postMessage("artboardSort", state.arboardSort)
    window.postMessage("artboardInnerLayersSort", state.arboardInnerLayersSort)
    window.postMessage("create")
  }

  const muiTheme = createMuiTheme(theme)

  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <Container className={classes.container} margin="500px" maxWidth="sm">
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item>
              <Typography variant="h6" color="textPrimary" align="right">
                Artboard Sort:
              </Typography>
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <NativeSelect value={state.arboardSort} onChange={handleChange("arboardSort")}>
                  <optgroup label="From the Layer List:">
                    <option value="Top to Bottom">Top to Bottom</option>
                    <option value="Bottom to Top">Bottom to Top</option>
                  </optgroup>
                  <optgroup label="From the Canvas:">
                    <option value="Left to Right">Left to Right</option>
                    <option value="Right to Left">Right to Left</option>
                    <option value="Top to Bottom 1">Top to Bottom</option>
                  </optgroup>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item>
              <Typography variant="h6" color="textPrimary" align="right">
                Artboard Inner Layers Sort:
              </Typography>
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <NativeSelect
                  value={state.arboardInnerLayersSort}
                  onChange={handleChange("arboardInnerLayersSort")}
                >
                  <optgroup label="From the Layer List:">
                    <option value="Top to Bottom">Top to Bottom</option>
                    <option value="Bottom to Top">Bottom to Top</option>
                  </optgroup>
                </NativeSelect>
              </FormControl>
            </Grid>
          </Grid>
          <Typography style={{ height: "50px" }} />
          <Grid container spacing={2} alignItems="flex-end" justify="center">
            <Grid item>
              <Button className={classes.button} variant="outlined" onClick={() => handleCancel()}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => {
                  handleCreate()
                }}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </MuiThemeProvider>
  )
}

export default CreateTableOfContent