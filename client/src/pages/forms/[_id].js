import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Box, Typography, TextField, FormControl, RadioGroup, FormControlLabel, Radio, Checkbox, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    maxWidth: '800px',
    margin: '3rem auto',
    padding: '3rem',
    borderRadius: '15px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.1)',
  },
  header: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  subheader: {
    fontSize: '1.5rem',
    fontWeight: '500',
    marginBottom: theme.spacing(3),
    color: theme.palette.secondary.main,
  },
  field: {
    marginBottom: theme.spacing(5),
    padding: theme.spacing(2),
    borderRadius: '10px',
    backgroundColor: '#fafafa',
  },
  question: {
    fontSize: '1.3rem',
    fontWeight: '500',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
    backgroundColor: '#dddddd',
  },
}));

const FormPage = () => {
  const classes = useStyles();
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

  const handleInputChange = (event) => {
    // Handle changes to form input values
  };

  return (
    <Box className={classes.formWrapper}>
      <Typography variant="h1" className={classes.header}>{form.title}</Typography>
      <Typography variant="h2" className={classes.subheader}>{form.description}</Typography>
      <Divider className={classes.divider} />
      {form.fields.map((field, i) => {
        return (
          <Box key={i} className={classes.field}>
            <Typography className={classes.question}>{field.question}</Typography>
            {field.type === 'text' && <TextField fullWidth onChange={handleInputChange} type={field.type} />}
            {field.type === 'radio' && 
              <FormControl component="fieldset">
                <RadioGroup onChange={handleInputChange}>
                  {field.options.map((option, index) => (
                    <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                  ))}
                </RadioGroup>
              </FormControl>
            }
            {field.type === 'checkbox' && 
              <FormControl component="fieldset">
                {field.options.map((option, index) => (
                  <FormControlLabel 
                    key={index} 
                    control={<Checkbox onChange={handleInputChange} value={option} />} 
                    label={option} 
                  />
                ))}
              </FormControl>
            }
          </Box>
        );
      })}
    </Box>
  );
};

export default FormPage;
