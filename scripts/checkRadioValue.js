const checkRadioValue = () => {
    const selectedRadioValue = document.querySelector( 'input[name="searchType"]:checked' ).value;
    const isUserSelection = selectedRadioValue === 'users';
    return isUserSelection;
};

export default checkRadioValue;