// Third party dependencies.
import { TextInputProps as RNTextInputProps } from 'react-native';

// External dependencies.
import { TextVariants } from '../../Texts/Text';

/**
 * TextInput component props.
 */
export interface TextInputProps extends Omit<RNTextInputProps, 'editable'> {
  /**
   * Optional enum to select between Typography variants.
   * @default sBodyMD
   */
  textVariant?: TextVariants;
  /**
   * Optional boolean to disable TextInput.
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional boolean to disable state styles.
   * @default false
   */
  disableStateStyles?: boolean;
}
