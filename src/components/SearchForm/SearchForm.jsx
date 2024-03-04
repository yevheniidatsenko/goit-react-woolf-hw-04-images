import React, { Component } from 'react';
import styles from './SearchForm.module.css';

import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';

export class SearchForm extends Component {
  state = {
    searchText: '',
  };

  handleChange = evt => {
    this.setState({ searchText: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.handleSubmit(this.state.searchText.trim());
    this.setState({ searchText: '' });
  };

  render() {
    return (
      <header className={styles.SearchBar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <IconContext.Provider value={{ size: '1.5em' }}>
              <div>
                <FiSearch />
              </div>
            </IconContext.Provider>
          </button>
          <input
            type="text"
            name="searchQuery"
            value={this.state.searchText}
            onChange={this.handleChange}
            placeholder="Search images and photos"
            className={styles.SearchFormInput}
            autoComplete="off"
            autoFocus
          ></input>
        </form>
      </header>
    );
  }
}
