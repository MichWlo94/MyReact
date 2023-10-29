export default function Error({ title, message }) {
    return (
      <div className= 'p-4 mx-auto mt-8 text-xl text-center text-black bg-red-500  w-fit'>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    );
  }