type Props = {
  id?: string;
  name?: string | null;
};

const EditUser = ({ id, name }: Props) => {
  return (
    <div className="w-full">
      <h1>{id}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default EditUser;
