import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      title: {
        color: 'white'
      },
      buttonColor: 'white',
      backButton: {
        showTitle: false,
        color: 'white',
      },
      background: {
        color: '#DD4830'
      }
    }
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'AuthorPortal.SubmissionList'
          }
        }]
      }
    }
  });
});
