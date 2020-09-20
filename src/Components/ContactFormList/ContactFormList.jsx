import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import ContactFormListItem from '../ContactFormListItem/ContactFormListItem';
import phoneBookOperations from '../../redux/phoneBookActions/phoneBookOperations';
import phoneBookSelectors from '../../redux/phoneBookActions/phoneBookSelectors';
import styles from './ContactList.module.css';
import Filter from '../Filter/Filter';

const ContactFormList = ({ contacts, onRemoveContacts }) => (
  <>
    {/* {this.props.contacts.length > 1 && <Filter />} */}

    <Filter />
    <TransitionGroup component="ul" className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition
          key={id}
          timeout={1000}
          classNames={styles}
          unmountOnExit
        >
          <ContactFormListItem
            key={id}
            name={name}
            number={number}
            onRemove={() => onRemoveContacts(id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

const mapStateToProps = state => {
  // console.log(state, "stateList");
  return {
    items: phoneBookSelectors.getContacts(state),
    contacts: phoneBookSelectors.getFilteredContacts(state),
  };
};

const mapDispatchToProps = {
  onRemoveContacts: phoneBookOperations.onRemoveContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormList);
