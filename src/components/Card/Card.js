import React from 'react';

const Card = (props) => {
  return (
    <div className='container col'>
      <div>
        <div className='card' style={{ width: '20rem' }}>
          <div className='card-body'>
            <h5 className='card-title alert alert-secondary text-center'>
              {props.employee.first_name + ' ' + props.employee.last_name}
            </h5>
            <p>email: {props.employee.email}</p>
            <p>Gender: {props.employee.gender}</p>
            <p>Department: {props.employee.department}</p>
            <p>Title: {props.employee.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
