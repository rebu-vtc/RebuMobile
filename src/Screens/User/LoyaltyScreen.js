import React, { useEffect, useState } from 'react'
import { SafeAreaView, 
    Text, 
    StyleSheet, 
    View,
    Platform,
    StatusBar,
    TouchableOpacity,
    Image,
    FlatList 
} 
from 'react-native';
import { AppIcon, FONTS, globalStyles, ThemeStyles } from '../../ThemeStyles';
import Card from '../../components/layouts/Card';
import RenderHeader from '../../components/layouts/RenderHeader';
import RenderFooter from '../../components/layouts/RenderFooter';


const LoyaltyScreen = () =>  {

  const [loyal, setLoyal] = useState([
    {content: 'Lorem ipsum dolor sit amet', id: '1'},
    {content: 'Lorem ipsum dolor sit amet', id: '2'},
    {content: 'Lorem ipsum dolor sit amet', id: '3'},
    {content: 'Lorem ipsum dolor sit amet', id: '4'},
    {content: 'Lorem ipsum dolor sit amet', id: '5'},
    {content: 'Lorem ipsum dolor sit amet', id: '6'},
    {content: 'Lorem ipsum dolor sit amet', id: '7'},
  ])

  return (
      <View style={styles.container}>
        <RenderHeader label="Détails du trajet" />
        <RenderFooter style={globalStyles.footer}>
          <FlatList 
          data={loyal}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={ () => console.log(item.id)}>
              <Card style={styles.listItem}>
                <Image 
                  source={AppIcon.images.avatarC}
                  style={styles.coverImage}
                />
                <View style={styles.metaInfo}>
                  <Text style={globalStyles.titleText}>{ item.content }</Text>
                </View>
              </Card>
            </TouchableOpacity>
          )}
        />
        </RenderFooter>
      </View>
      
  );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeStyles.color.tint
  },
  textContent: {
    fontWeight: 'bold', 
    fontSize: 20, 
    paddingBottom: 10, 
    
  }, 
  coverImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  }, 
  metaInfo: {
    marginLeft: 10,
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row'
  }
})

export default LoyaltyScreen