import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {getCategories, getProductNews} from './api';
import {AriveStatusBar} from './components';
import AuthenticatedApp from './navigation/authenticated';

const App = () => {
  const [productNews, setProductNews] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(true);
  // Mount - Fetch Data from Mock API
  useEffect(() => {
    getProductNews()
      .then(res => {
        if (res && res.length) {
          setProductNews(res);
          getCategories().then(catData => {
            if (catData && catData.length) {
              setCategoryData(catData);
              setIsFetchingData(false);
            }
          });
        } else {
          setIsFetchingData(false);
        }
      })
      .catch(e => {
        console.error(e);
      });
  }, []);
  return (
    <View style={{flex: 1}}>
      <AriveStatusBar backgroundColor="#000000" barStyle="light-content" />
      {isFetchingData ? (
        <ActivityIndicator
          size="large"
          style={{
            marginTop: 40,
          }}
        />
      ) : (
        <AuthenticatedApp
          productNews={productNews}
          categoryData={categoryData}
        />
      )}
    </View>
  );
};

export default App;
