type Props = {
  id?: string;
  name?: string | null;
  email?: string | null;
  country?: string | null;
  nik?: string | null;
};

const EditUser = ({ id, name, email, country, nik }: Props) => {
  return (
    <div className="w-full">
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{country} ini country</h1>
      <h1>{nik} ini nik</h1>

    </div>
  );
};

export default EditUser;
