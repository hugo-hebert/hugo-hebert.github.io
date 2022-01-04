
const Value_Statement = ({title, value_stat}) => {

  return (
    <div className="value-statement">
      <h3 className="value-statement--title">{title}</h3>
      <span className="value-statement--body">{value_stat}</span>
    </div>
  );
};

export default Value_Statement;