import { Header } from "../Header";
import { Footer } from "../Footer";

export const HomeLayout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
