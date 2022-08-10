import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import Tooltip from '@mui/material/Tooltip';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function ButtonAppBar(props) {

  const { handleModeChange, mode, setFilters, filters, filterData } = props
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const clearFilters = () => {
    setState(false)
    setFilters({});
    filterData('clear')
  }
  const applyFilters = () => {
    filterData('find')
    setState(false)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#3b3838 !important', padding: '18px 0px' }} position="static">
        <Toolbar>
          <Tooltip title="Disposition">
            <ToggleButtonGroup
              exclusive
              onChange={() => handleModeChange(mode === 12 ? 4 : mode === 6 ? 12 : mode + 2)}
              style={{ color: '#67d4be !important' }}
              fontSize="large"
              value={mode}
            >
              <ToggleButton fontSize="large" style={{ color: '#67d4be' }} value="grid">
                <ViewModuleIcon fontSize="large" sx={{ color: '#67d4be', fontSize: '40px !important' }} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Tooltip>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#a367c7 !important', fontWeight: 'bold !important', fontFamily: 'cursive !important' }}>
            Autogermana
          </Typography>

          <Button size="large" onClick={toggleDrawer(true)} sx={{ color: '#67d4be !important' }}>
            <Typography variant="h6" component="div">
              Filters
            </Typography>
          </Button>


        </Toolbar>
      </AppBar>
      <Drawer
        anchor="bottom"
        open={state}
        onClose={toggleDrawer(false)}
      >

        <Grid container spacing={1} sx={{ padding: '12px 15px', width: '90% !important', maxHeight: 'auto% !important' }}>
          <Grid item md={2}>
            <TextField onChange={(e) => setFilters({ ...filters, [e.target.name]: e.target.value })} value={filters.userId} name="userId" fullWidth type="number" label="User ID" variant="outlined" />
          </Grid>

          <Grid item md={2}>
            <TextField onChange={(e) => setFilters({ ...filters, [e.target.name]: e.target.value })} value={filters.id} name="id" fullWidth type="number" label="ID" variant="outlined" />

          </Grid>
          <Grid item md={4}>
            <TextField onChange={(e) => setFilters({ ...filters, [e.target.name]: e.target.value })} value={filters.title} name="title" fullWidth label="Title" variant="outlined" />
          </Grid>
          <Grid item md={2} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}>
            <Button
              onClick={applyFilters}
              variant="outlined">Apply filters
            </Button>
          </Grid>
          <Grid item md={2} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}>
            <Button
              onClick={clearFilters}
              variant="outlined">
              Clear filters
            </Button>
          </Grid>

        </Grid>
      </Drawer>
    </Box>
  );
}
