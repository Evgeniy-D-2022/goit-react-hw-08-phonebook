import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { selectError } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Loader from 'components/Loader/Loader';

const Contacts = () => {
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts)
    }, [dispatch])

    return (
        <div className={css.container}>
        <h1 className={css.title}>
          Phonebook
        </h1>
        <Form />
  
        {contacts.length > 0 ? (
          <>
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <p className={css.contacts__text}>No available contacts</p>
        )}
        {isLoading && !error && <Loader />}
      </div>
    )

};

export default Contacts;