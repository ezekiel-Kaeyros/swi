import NavBar from './navbar/NavBar';

export default async function Header({ lang }: { lang: string }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <header className="py-6 absolute right-4 lg:right-12 z-10">
      <NavBar lang={lang} />
    </header>
  );
}
