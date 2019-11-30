import { resolve } from 'path';
import Mail from '../../lib/Mail';

class EnrollmentMail {
  get key() {
    return 'EnrollmentMail';
  }

  async handle({ data }) {
    const { student, plan, formattedEndDate } = data;
    const folder = resolve(__dirname, '..', 'views', 'emails', 'images');

    await Mail.sendMail({
      to: `${student.name} <${student.email}> `,
      subject: 'Bem vindo ao gympoint!',
      template: 'enrollment',
      context: {
        student: student.name,
        plan: plan.title,
        price: plan.price,
        duration: plan.duration,
        endDate: formattedEndDate,
      },
      attachments: [
        {
          filename: 'logo.svg',
          path: `${folder}/logo.svg`,
          cid: 'logo',
        },
      ],
    });
  }
}

export default new EnrollmentMail();
