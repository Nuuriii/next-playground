// pages/index.tsx
import React from "react";
import { HelloWorld } from "../Components/HelloWorld";
import { Click } from "../Components/Click";

const Home: React.FC = () => {
   return (
      <div>
         <Click />
         <HelloWorld message='Dunia' />
      </div>
   );
};

export default Home;
