import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    width: "100%"
  },
  menulist: {
    backgroundColor: "#ddd"
  }
};

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <div>AAA</div>
        </Grid>
        {/* <Paper square> */}
        <MenuList className={classes.menulist}>
          <Grid container direction="row">
            <Link
              to="/shift"
              style={{ textDecoration: "none", display: "block" }}
            >
              <MenuItem>My account</MenuItem>
            </Link>
            <MenuItem>Logout</MenuItem>
          </Grid>
        </MenuList>
        {/* </Paper> */}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
