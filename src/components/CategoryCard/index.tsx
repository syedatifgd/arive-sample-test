import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface CategoryCardProps {
  catData: CategoryItem;
  onPressCard: Function;
}

export interface CategoryItem {
  id: number;
  name: string;
  categoryThumbnail: string;
}

const CategoryCard = ({catData, onPressCard}: CategoryCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPressCard()}>
      <View style={styles.catNameContainer}>
        <Text style={styles.catNameText}>{catData.name}</Text>
      </View>
      <Image
        source={{uri: catData.categoryThumbnail}}
        resizeMode="cover"
        style={styles.catImage}
      />
    </TouchableOpacity>
  );
};

CategoryCard.defaultProps = {
  onPressCard: () => {},
};

export default CategoryCard;
