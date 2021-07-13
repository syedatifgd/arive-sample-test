import React from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import {AppHeader, Button, ProductSwiper} from '../components';
import {ProductItem} from '../components/ProductSwiper';
import CategoryCard, {CategoryItem} from '../components/CategoryCard';

// Styles and Icons
import {styles} from './styles';
// @ts-ignore
import RocketIcon from '../../images/rocket.png';
// @ts-ignore
import ChatIcon from '../../images/chat.png';

interface AuthenticatedAppProps {
  productNews: Array<ProductItem>;
  categoryData: Array<CategoryItem>;
}

const AuthenticatedApp = ({
  productNews,
  categoryData,
}: AuthenticatedAppProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        {/* App Header with Greetings */}
        <AppHeader />
        {/* Product Swiper */}
        <View
          style={{
            height: 170,
            marginHorizontal: 10,
            position: 'absolute',
            top: 230,
            borderRadius: 20,
            zIndex: 4,
            backgroundColor: 'blue',
          }}>
          <ProductSwiper productNews={productNews} />
        </View>
      </View>
      {/* Floating Button */}
      <TouchableOpacity style={styles.floatingButton}>
        <Image
          source={ChatIcon}
          resizeMode="cover"
          style={styles.floatingButtonImage}
        />
      </TouchableOpacity>
      {/* Categories */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.lowerContainer}>
        {categoryData &&
          categoryData?.map(item => {
            return (
              <View key={`${item.id}`} style={styles.lowerContainerItem}>
                <CategoryCard catData={item} />
              </View>
            );
          })}
      </ScrollView>
      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomBarInnerContainer}>
          <Image
            source={RocketIcon}
            resizeMode="cover"
            style={styles.rocketIcon}
          />
          <Text style={styles.txtBold}>Yay!</Text>
          <Text style={styles.txtRegular}>We deliver to your area!</Text>
        </View>
        <Button
          buttonText={'GET STARTED'}
          styles={styles.btnGetStarted}
          buttonTextStyles={styles.btnGetStartedText}
        />
      </View>
    </View>
  );
};

export default AuthenticatedApp;
