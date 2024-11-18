import { TextField } from "@mui/material"

const TextInput = ({ id, label, value, onChange, type, placeholder, multiline }) => {

  return (
    <div className='TextInput'>
      <TextField 
      variant="outlined" 
      id={id} 
      label={label} 
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      multiline={multiline}
      />
    </div>
  )
}
export default TextInput