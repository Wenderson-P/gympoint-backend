import Bee from 'bee-queue';
import EnrollmentEmail from '../app/jobs/EnrollmentMail';
import redisConfig from '../config/redis';

const jobs = [EnrollmentEmail];
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
}

export default new Queue();
