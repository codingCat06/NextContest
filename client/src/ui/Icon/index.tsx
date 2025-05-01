import iconGlyphs from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
type MaterialIconName = keyof typeof iconGlyphs;

interface IconProps {
    name: MaterialIconName;
  }

const Icon = ({ name }: IconProps) => {
    return <MaterialIcon name={name} size={28} color="black" />;
  };
export {Icon}