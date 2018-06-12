//named exports use {} with name created in file
import {addHeader, addParagraph} from './helpers';
//default has no curly brackets and can name whatever, should call it file name
import add, {multiply} from './add';

addHeader('This function is from the helpers file');

addHeader(`54 + 67 = ${add(54, 67)}`);

addParagraph('I have added a paragraph');