import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

// Styles
import {styles} from './styles';

interface ProductSwiperProps {
  productNews: Array<ProductItem>;
}

export interface ProductItem {
  id: number;
  productImage: string;
}

const ProductSwiper = ({productNews}: ProductSwiperProps) => {
  const activeDot = () => <View style={styles.activeDot} />;
  const inactiveDot = () => <View style={styles.inactiveDot} />;
  return (
    <View style={styles.root}>
      <Swiper
        loop
        horizontal
        dot={inactiveDot()}
        activeDot={activeDot()}
        paginationStyle={styles.pagination}>
        {productNews &&
          productNews?.map(item => {
            return (
              <View style={styles.slide} key={`${item.id}`}>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={{
                    uri: item.productImage,
                  }}
                />
              </View>
            );
          })}
      </Swiper>
    </View>
  );
};

export default ProductSwiper;
