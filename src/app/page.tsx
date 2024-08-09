import Home from "./pages/home/Home";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jakob Heine',
};

export default function Page() {
  return <Home />;
}
