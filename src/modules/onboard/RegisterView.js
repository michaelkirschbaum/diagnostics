import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form';

class RegisterView extends Component {
  render() {
    return (
      <form></form>
    );
  }
}

RegisterView = reduxForm({
  form: 'register'
})(OnboardView);
