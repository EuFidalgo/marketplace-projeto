import React from 'react';


const header = () => {
  const classes = styles();

  return (
    <div className={classes.header}>
      <h1 className={classes.headerh1}>
        <i className={classes.icon} icon='house' }></i> {props.title}
      </h1>
      <p className="lead text-muted">{props.subtitle}</p>
    </div>
  );
};

export default header;
