import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    fontFamily: 'Bungee Hairline',
    fontSize: 8
  },

  aboutTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: 900,
    paddingRight: 15
  },

  aboutBio: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 30,
    fontSize: 15,
    lineHeight: '1.6',
    textAlign: 'justify',
    textJustify: 'inter-word',
    fontFamily: 'Bungee Hairline',
    fontWeight: 900,
    borderTop: '5px solid black'
  },

  aboutTitleSection: {
    display: 'flex',
    justifyContent: 'space-evenly',
    color: 'white',
    fontSize: 20
  },

  press: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'black'
  },

  pressBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  image: {
    display: 'flex',
    width: 700,
    paddingBottom: 25,
    paddingLeft: 20,
  },

  '@media (max-width: 505px)': {
    aboutContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'white',
      fontFamily: 'Bungee Hairline',
      fontSize: 8,
    },

    aboutBio: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 30,
      fontSize: 15,
      textAlign: 'justify',
      textJustify: 'inter-word',
      fontFamily: 'Bungee Hairline',
      fontWeight: 900,
      borderTop: '5px solid black'
    },

    pressBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },

    image: {
      display: 'flex',
      width: '100%',
      paddingBottom: 25,
      paddingLeft: 5,
    },
  }

})

export default useStyles;