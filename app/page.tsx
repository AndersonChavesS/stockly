import Header, { HeaderLeft, HeaderSubTitle, HeaderTitle } from "./_components/header";

export default function Home() {
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-slate-100 p-8">
     <Header>
      <HeaderLeft>
        <HeaderSubTitle>Visão Geral dos Dados</HeaderSubTitle>
        <HeaderTitle>Dashboard</HeaderTitle>
      </HeaderLeft>
     </Header>
    </div>
  );
}
