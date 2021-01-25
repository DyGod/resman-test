import { Meteor } from 'meteor/meteor';
import Prizes from '../collections/Prizes.js';

Meteor.publish('prizes', function () {
  return Prizes.find();
});
