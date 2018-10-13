import {Navigation} from 'react-native-navigation';
import SubmissionList from './SubmissionList';
import Submission from './Submission';
import EventDetails from './EventDetails';
import Settings from './Settings';
import {IconButton} from './utils';

export function registerScreens() {
  Navigation.registerComponent('AuthorPortal.SubmissionList', () => SubmissionList);
  Navigation.registerComponent('AuthorPortal.Submission', () => Submission);
  Navigation.registerComponent('AuthorPortal.EventDetails', () => EventDetails);
  Navigation.registerComponent('AuthorPortal.Settings', () => Settings);
  Navigation.registerComponent('AuthorPortal.IconButton', () => IconButton);
}
