import * as React from 'react';
import Layout from '../components/Layout';
import { ThemeProvider } from '../components/ThemeContext';
import { ThemeConsumer } from '../components/ThemeContext';

import { UserProvider } from './UserContext';

class Main extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <UserProvider>
          <Layout>{this.props.children}</Layout>
          <ThemeConsumer>
            {({ theme }) => (
              <style jsx global>{`
                body {
                  font-family: 'Arial';
                  color: ${theme.textColor};
                  background-color: ${theme.bodyColor};
                }
                a {
                  font-weight: bold;
                  text-decoration: none;
                  color: ${theme.textColor};
                  margin-right: 1.5rem;
                }
                a:hover {
                  font-weight: bold;
                  text-decoration: underline;
                }
                table {
                  padding: 1rem;
                  border: 1px #ddd solid;
                }
                th {
                  min-width: 6rem;
                  text-align: left;
                }
                button {
                  font-size: 1rem;
                  padding: 0.5rem;
                  margin-top: 1rem;
                  margin-right: 1rem;
                  border-radius: 5px;
                }
                input {
                  font-size: 1rem;
                  display: block;
                  margin: 0.5rem 0;
                }
                input[type='submit'] {
                  font-size: 1rem;
                  padding: 0.5rem;
                  margin-top: 1rem;
                  margin-right: 1rem;
                  border-radius: 5px;
                }
                .card {
                  float: left;
                  margin-right: 3rem;
                }
                select {
                  margin-left: 1rem;
                }
                .clearfix::after {
                  display: block;
                  content: '';
                  clear: both;
                }
              `}</style>
            )}
          </ThemeConsumer>
        </UserProvider>
      </ThemeProvider>
    );
  }
}

export default Main;
