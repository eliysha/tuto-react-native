import axios from 'axios';
import { Platform } from 'react-native';

let url;

if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:3000/api'; // to avoid network error on android
} else {
  url = 'http://localhost:3000/api';
}

axios.defaults.baseURL = url;

const fakeGroupId = '5993570072d31c2fa25e1325';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    // will be added at the end of base url as the endpoint
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    const { data } = await axios.get(this.path);

    return data.meetups;
  }
}

export { MeetupApi };
