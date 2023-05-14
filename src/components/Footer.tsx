export default function Footer() {
  return (
    <p className='bg-slate-900 text-white py-2 text-sm text-center'>
      {`Next 13 tutorial | All Right Reserved`} &copy;{' '}
      {new Date().getFullYear()}
    </p>
  );
}
