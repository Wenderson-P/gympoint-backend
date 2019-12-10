import { resolve } from 'path';
import Mail from '../../lib/Mail';

class QuestionAnsweredEmail {
  get key() {
    return 'QuestionAnweredMail';
  }

  async handle({ data }) {
    const folder = resolve(__dirname, '..', 'views', 'emails', 'images');

    const { student, helpOrder, answer } = data;
    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: `Sua pergunta foi respondida`,
      context: {
        student_name: student.name,
        question: helpOrder.question,
        answer,
      },
      template: 'questionAnswered',
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

export default new QuestionAnsweredEmail();
