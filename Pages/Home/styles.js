import { StyleSheet, Dimensions, Platform } from 'react-native';
import { shadow } from 'react-native-paper';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const ColNum = 2;
const BOOK_ITEM_HEIGHT = 150;
const BOOK_ITEM_MARGIN = 20;

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;
const { width: screenWidth } = Dimensions.get('window')


const styles = StyleSheet.create({

  background: {
    backgroundColor: "white",
    height: "100%"
  },

  
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#cccccc',
    flexDirection: 'row',
    width: 150,
    height: 200,

  },
  photo: {
    width: 150,
    height: 210,

  },
 
  divider: {
    width: "80%",
    alignSelf: "center",
    marginVertical: 30
  },
  title: {
    textAlign: 'right',
    flex: 1,
    fontSize: 15,
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  scrollview: {
    height: 'auto',
    paddingBottom: 5,
  },
  leftIcon2: {
    backgroundColor: "transparent",
    color: "#000000",
    fontSize: 35,
    height: 40,
    width: 39,
  },
  mainContainer: {
    alignItems: 'center',
    paddingTop: 7
  },

  genresContainer: {
    flex: 0.5,
    direction: "rtl",
  },
  genresItem: {
    flex: 1,
    justifyContent: "center",
    alignContent: "flex-start",
    height: 20,
    margin: 8,


  },
  item: {
    marginLeft: 9,
    marginBottom: 4,
    alignItems: 'center',
  },
  
});

export default styles;
