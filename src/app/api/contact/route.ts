import { sendEmail } from '@/app/service/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.isValidSync(body))
    return new Response(JSON.stringify({ message: '유효하지 않은 포맷' }), {
      status: 400,
    });

  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: '메일이 발송되었습니다.' }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error);
      return new Response(JSON.stringify({ message: '메일 발송 실패' }), {
        status: 500,
      });
    });
}
