import iconGlyphs from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
type MaterialIconName = keyof typeof iconGlyphs;

interface IconProps {
    name: MaterialIconName;
    className?: string,
    color?: string,
    size?: number
}

const Icon = ({ name, className="m-2", color='black', size=32 }: IconProps) => {
    return <MaterialIcon name={name} size={size} color={color} className={className} />;
  };
export {Icon}