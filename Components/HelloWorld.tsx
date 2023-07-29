interface Props {
   message: string;
}

export const HelloWorld = ({ message }: Props) => {
   return <div>Hello, {message}</div>;
};
