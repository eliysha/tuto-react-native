import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '0.5rem',
    paddingVertical: '0.7rem'
  },
  title: {
    color: '$whiteColor',
    fontSize: 25,
    fontFamily: 'montserrat'
  },
  contentContainer: {
    flex: 1
  },
  meetupCard: {
    height: 200,
    width: 175,
    marginHorizontal: '0.3rem',
    backgroundColor: '$redColor'
  },
  meetupCardTopContainer: {
    flex: 1,
    position: 'relative'
  },
  meetupCardTitle: {
    fontFamily: 'montserratBold',
    position: 'absolute',
    color: '$whiteColor',
    top: '1rem',
    left: '0.5rem'
  },
  meetupCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '0.5rem'
  },
  meetupCardMetaName: {
    fontSize: 15,
    fontFamily: 'montserrat'
  },
  meetupCardMetaDate: {
    fontSize: 13,
    fontFamily: 'montserratLight'
  }
});

export default styles;
