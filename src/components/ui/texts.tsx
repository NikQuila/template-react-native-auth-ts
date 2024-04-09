import { Dimensions, Text } from 'react-native';
import fonts from '../../utils/fonts';

const { width } = Dimensions.get('window');

type TextProps = {
  children: React.ReactNode;
  className?: string;
  style?: any;
  fontWeigth?: 'regular' | 'semibold' | 'bold';
};

export const XSText: React.FC<TextProps> = ({
  children,
  className,
  style,
  fontWeigth = 'regular',
}) => {
  return (
    <Text
      style={[
        { fontSize: width * 0.035, fontFamily: fonts.regular },
        fontWeigth == 'semibold' && { fontFamily: fonts.semibold },
        fontWeigth == 'bold' && { fontFamily: fonts.bold },
        style,
      ]}
      className={className}
    >
      {children}
    </Text>
  );
};

export const SMText: React.FC<TextProps> = ({
  children,
  className,
  style,
  fontWeigth = 'regular',
}) => {
  return (
    <Text
      style={[
        { fontSize: width * 0.04, fontFamily: fonts.regular },
        fontWeigth == 'semibold' && { fontFamily: fonts.semibold },
        fontWeigth == 'bold' && { fontFamily: fonts.bold },
        style,
      ]}
      className={className}
    >
      {children}
    </Text>
  );
};

export const NormalText: React.FC<TextProps> = ({
  children,
  className,
  style,
  fontWeigth = 'regular',
}) => {
  return (
    <Text
      style={[
        { fontSize: width * 0.05, fontFamily: fonts.regular },
        fontWeigth == 'semibold' && { fontFamily: fonts.semibold },
        fontWeigth == 'bold' && { fontFamily: fonts.bold },
        style,
      ]}
      className={className}
    >
      {children}
    </Text>
  );
};

export const LGText: React.FC<TextProps> = ({
  children,
  className,
  style,
  fontWeigth = 'regular',
}) => {
  return (
    <Text
      style={[
        { fontSize: width * 0.06, fontFamily: fonts.regular },
        fontWeigth == 'semibold' && { fontFamily: fonts.semibold },
        fontWeigth == 'bold' && { fontFamily: fonts.bold },
        style,
      ]}
      className={className}
    >
      {children}
    </Text>
  );
};
