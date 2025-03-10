import { useParams } from 'react-router-dom';

export const ProductEdit = () => {
  const params = useParams();

  return (
    <div>
      <h2>ProductEdit</h2>
      <pre>{JSON.stringify(params, undefined, 2)}</pre>
    </div>
  );
};

