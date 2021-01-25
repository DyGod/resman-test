import { Meteor } from 'meteor/meteor';
import Prizes from '../collections/Prizes.js';

Meteor.methods({
  'redeemPrize'(id) {
    let prize = Prizes.findOne( { _id : id });
    if (prize.quantity < 1)
    {
      throw new Meteor.Error(`${prize.name} is out of stock`);
    }

    return Prizes.update({ _id : id }, { $inc : { "quantity" : -1 } } );
   
  },
});
