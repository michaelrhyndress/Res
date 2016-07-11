import {
  cyan700,
  fullWhite,
  darkBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: darkBlack,
    accent1Color: cyan700,
    // accent2Color: pinkA400,
    // accent3Color: pinkA100,
    textColor: fullWhite,
    //secondaryTextColor: fullWhite,
    alternateTextColor: fullWhite,
    // canvasColor: '#303030',
    // borderColor: fade(fullWhite, 0.3),
//     disabledColor: fade(fullWhite, 0.3),
//     pickerHeaderColor: fade(fullWhite, 0.12),
//     clockCircleColor: fade(fullWhite, 0.12),
  },
};