import React, { Component } from 'react';
import ErrorPage from '../components/ErrorPage';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show error message
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or send an error report here
    console.error(error);
    console.error(errorInfo);
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return (
        <ErrorPage/>
      );
    }

    return this.props.children;
  }
}
