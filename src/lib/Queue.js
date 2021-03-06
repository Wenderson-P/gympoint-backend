import Bee from 'bee-queue';
import EnrollmentEmail from '../app/jobs/EnrollmentMail';
import QuestionAnsweredEmail from '../app/jobs/QuestionAnsweredEmail';
import redisConfig from '../config/redis';

const jobs = [EnrollmentEmail, QuestionAnsweredEmail];
class Queue {
  constructor() {
    this.queues = {};
    this.init();
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job, error) {
    console.log(`Queue ${job.queue.name} : FAILED`, error);
  }
}

export default new Queue();
