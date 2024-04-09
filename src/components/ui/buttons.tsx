import { TouchableOpacity } from 'react-native';
import { SMText } from './texts';

type ButtonProps = {
  onPress: () => void;
  text: string;
  fontWeigth?: 'semibold' | 'regular';
  styles?: string;
  isFullWidth?: boolean;
  variant?: 'solid' | 'light';
  type?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

const sizeStyles = {
  xs: 'py-1 px-3 text-xs',
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-base', // Consider this as your normal size
  lg: 'py-3 px-8 text-lg',
  xl: 'py-4 px-10 text-xl',
};

export const CustomButton = ({
  onPress,
  text,
  styles,
  isFullWidth,
  fontWeigth = 'semibold',
  variant = 'solid',
  type = 'primary',
  size = 'md',
}: ButtonProps) => {
  let buttonStyles;
  let textStyles;

  if (variant == 'solid' && type == 'primary') {
    buttonStyles = 'bg-main';
    textStyles = 'text-white';
  } else if (variant == 'light' && type == 'primary') {
    buttonStyles = 'border border-main';
    textStyles = 'text-main';
  } else if (variant == 'light' && type == 'secondary') {
    buttonStyles = 'border border-secondary';
    textStyles = 'text-secondary';
  } else if (variant == 'solid' && type == 'secondary') {
    buttonStyles = 'bg-secondary';
    textStyles = 'text-white';
  }

  const buttonSizeStyles = sizeStyles[size] || sizeStyles.md; // Fallback to 'md' if size is not defined in sizeStyles

  return (
    <TouchableOpacity
      onPress={onPress}
      className={` ${buttonStyles} ${buttonSizeStyles} rounded-md  ${styles} ${
        isFullWidth ? 'w-full' : 'self-center'
      }`}
    >
      <SMText fontWeigth={fontWeigth} className={`${textStyles} text-center`}>
        {text}
      </SMText>
    </TouchableOpacity>
  );
};
