import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import './FAQ.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>

    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="FAQ by Doctors" {...a11yProps(0)} />
          <Tab label="FAQ for Doctors" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className="b">
          <div className="qDiv">
            <p className="question">
              Is there an advantage of X-Ray over Biopsy?
            </p>
            <p className="answer">
            > The procedure is less invasive than surgical biopsy, leaves little or no scarring and can be performed in less than an hour.
            > Stereotactic breast biopsy is an excellent way to evaluate calcium deposits or masses that are not visible on ultrasound.
            > Stereotactic core needle biopsy is a simple procedure that may be performed in an outpatient imaging center.
            > Compared with open surgical biopsy, the procedure is about one-third the cost.
            > Very little recovery time is required.
            > Generally, the procedure is not very painful.
            > No breast defect remains and, unlike surgery, stereotactic needle biopsy does not distort the breast tissue or make it difficult to read future mammograms.
            > Recovery time is brief and patients can soon resume their usual activities.
            > No radiation remains in a patient's body after an x-ray examination.
            > X-rays usually have no side effects in the typical diagnostic range for this exam.
            </p>
          </div>

          <div className="qDiv">
            <p className="question">Are there any other Deployed service like this?</p>
            <p className="answer">
              This is Deployed on state of the art technolgies and is the only Deployed service on the web.
            </p>
          </div>
          <div className="qDiv">
            <p className="question">Can Doctors be banned from using the service?</p>
            <p className="answer">
              Yes, there are various ways of getting banned from the service.
              Some of which are fruadulant activiites, incorrect diagnosis or breaking Pateint Doctor confidentiality.
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="u">
          <div className="qDiv">
            <p className="question">How do I use it?</p>
            <p className="answer">
              After registeration the Doctor is prompted to the Dashboard from where they will be able to add Patients in the Patient component. Diagnosis will begin after adding a Patient.
            </p>
          </div>
          <div className="qDiv">
            <p className="question">Is it free?</p>
            <p>To register for the service, there are multiple plans offered and after opting for a given service plan. The Admin will verify crentials and the Doctor will be able to use the service.</p>
          </div>
          <div className="qDiv">
            <p className="question">What is the use of the Mobile App?</p>
            <p>The Mobile App is an aid to the Doctor who are busy and cant use the desktop application. The full service remains on the web but small scheduling and profiles are available on mobile.</p>
          </div>
        </div>
      </TabPanel>
    </div>
    <Link to="/dashboard" type="button" class="btn btn-primary btn-lg">Go Back</Link>
    </div>
  );
}