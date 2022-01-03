

const Employment_History = ({emp_hist}) => {

  return (
    <div className="employment-history">
      {emp_hist.data.map( (emp, ix) => {
        return (
          <div key={ix}>
            {emp.attributes.title}
          </div>
        )
      })}
    </div>
  )

};

export default Employment_History;