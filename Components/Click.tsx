import { useState } from "react";
import { Paragraph } from "./Click.style";

export const Click = () => {
   const [value, setValue] = useState(0);

   const AddValue = () => {
      setValue(value + 1);
   };

   const MinValue = () => {
      setValue(value - 1);
   };

   return (
      <div>
         <Paragraph>{value}</Paragraph>
         <button onClick={AddValue}>Tambah</button>
         <button onClick={MinValue}>Kurangi</button>
      </div>
   );
};
