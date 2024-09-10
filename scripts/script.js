/*
[x] Create function => performSearch (searchTerm,isUserSelection(users||org))
[x] Call performSearch inside Button event
[x] performSearch Implementation:
    [x] fetch data from url
    [x] if OK then show data
    [x] if not then show error msg

*/
import checkRadioValue from './checkRadioValue.js';
import { btnElement, inputElement } from './elements.js';
import performSearch from './performSearch.js';

// Start Button EventListener
btnElement?.addEventListener( 'click', ( e ) => {
    e.preventDefault();
    performSearch( inputElement.value, checkRadioValue() );
    // performSearch( inputElement.value, usersInputElement.checked );
} );

