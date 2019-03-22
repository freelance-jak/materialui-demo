import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";

class Login extends React.Component {
  handleClickLogin = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <TextField
          id="standard-with-placeholder"
          label="ユーザ名"
          placeholder="username"
          margin="normal"
          required="true"
        />
        <br />
        <TextField
          id="standard-with-placeholder"
          label="パスワード"
          placeholder="password"
          margin="normal"
          required="true"
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickLogin}
        >
          LOGIN
        </Button>
      </div>
    );
  }
}

export default withRouter(Login);
