const Select = ({ data, label, id,onChange,...props}) => {
  return (
    <>
      <label style={{ fontSize: 16,textAlign:'left', width:'100%' }} htmlFor={id}>
        {label}
      </label>
      <select onChange={onChange} id={id} style={{ padding: 10 }}>
        {props.children}
      </select>
    </>
  );
};

export default Select;
