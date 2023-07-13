import { useRouter } from 'next/router';
import UserForm from '../../components/UserForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FormPage = () => {
  const router = useRouter();
  const { _id } = router.query;
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (_id) {
      axios.get(`http://localhost:5000/forms/${_id}`)
        .then((response) => {
          const form = response.data;
          setForm(form);
        })
        .catch((error) => {
          console.log('Error getting form:', error);
        });
    }
  }, [_id]);
  
  if (!form) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserForm fields={form.fields} />
    </div>
  );
};

export default FormPage;
