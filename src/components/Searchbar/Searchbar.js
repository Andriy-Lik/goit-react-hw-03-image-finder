import { Component } from "react";
import PropTypes from 'prop-types';
import { BiSearch } from "react-icons/bi";
import toast, { Toaster } from 'react-hot-toast';
import css from './Searchbar.module.css';


class Searchbar extends Component {
    state = {
        inputValue: '',
    };

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    onSubmitForm = e => {
        e.preventDefault();

        const { inputValue } = this.state;
        const { onSubmit } = this.props;
        if (inputValue.trim() === '') {
            toast.error('Error!!! Enter a search term!');
            return;
        }
        onSubmit(inputValue);
    };

    onChangeInput = e => {
        this.setState({ inputValue: e.currentTarget.value });
    };


    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.onSubmitForm}>
                    <button type="submit" className={css.SearchFormButton}>
                        <BiSearch className={css.SearchFormIcon} />
                    </button>
                    <Toaster 
                        toastOptions={{
                            className: '',
                            style: {
                              border: '1px solid #713200',
                              padding: '5px',
                              color: '#713200',
                              background: '#FF8133',
                            },
                        }}
                    />

                    <input
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.inputValue}
                        onChange={this.onChangeInput}
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;