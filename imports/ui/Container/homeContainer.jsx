import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Jobs } from '/imports/api/jobs/jobs.js'
import Homepage2 from '/imports/ui/Home/Homepage2.jsx';
export default createContainer((props) =>{

  let jobSub = Meteor.subscribe('csJobs','CS');
  const jobs = Jobs.find({}).fetch();
  console.log('job', jobs);
  return {
    jobs: jobs,
    loading: !jobSub.ready()
  };
}, Homepage2);
