import { cls } from '@/libs/utils';

export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

type Props = {
  banner: BannerData;
};

export default function Banner({ banner: { message, state } }: Props) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '❌';
  return (
    <p
      className={cls(
        'absolute bottom-10 right-10 px-3 py-2 rounded-md animate-fadeInUp',
        isSuccess ? 'bg-green-300' : 'bg-red-300'
      )}
    >
      {`${icon} ${message}`}
    </p>
  );
}
