import React, { Component } from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactEditor from './components/ContactEditor';
import Filter from './components/Filter';
import styles from './App.module.css';
import { connect } from 'react-redux';
import * as operatimport from './redux/contact/contact.operations';

// import Modal from './components/BackDrop/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  // toggleModal = () => {
  //   this.setState(({showModal}) => ({showModal: !showModal}))
  // }

  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    // const { showModal } = this.state;

    return (
      <div className={styles.container}>
        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>this Modal content</h1>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )} */}

        <h1>Phonebook</h1>
        <ContactEditor />

        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    );
  }
}

const mapDispatchToPtops = dispatch => ({
  fetchContact: () => dispatch(operatimport.fetchContact()),
});

export default connect(null, mapDispatchToPtops)(App);
