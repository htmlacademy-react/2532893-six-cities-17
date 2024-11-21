import MainScreen from '../pages/main-screen/main-screen.tsx';
import {ReactNode} from 'react';

type AppProps = {
  offersCount: number;
}

export default function App({offersCount}: AppProps):ReactNode{
  return (
    <MainScreen offersCount={offersCount}/>
  );
}
