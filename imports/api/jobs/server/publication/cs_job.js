import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Jobs } from '/imports/api/jobs/jobs.js'

Meteor.publish("csJobs", function(type){
  return Jobs.find({type:type});
  // console.log('displayDta', displayData);
});
