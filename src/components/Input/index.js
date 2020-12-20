import React from 'react';
import { Input as ElementInput } from 'react-native-elements';
import inputStyles from './style';

const Input = (props) => {
    return (
        <ElementInput
            {...props}
            ref={props.inputRef}
            containerStyle={inputStyles.containerStyle}
            placeholderTextColor={'gray'}
            inputContainerStyle={inputStyles.inputContainerStyle}
            inputStyle={inputStyles.inputStyle}
        />
    );
}
export default Input;