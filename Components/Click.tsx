import { useState } from "react";

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
         <p>{value}</p>
         <button onClick={AddValue}>Tambah</button>
         <button onClick={MinValue}>Kurangi</button>
      </div>
   );
};
