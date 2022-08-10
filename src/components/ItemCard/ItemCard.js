import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  // Button,
  Card,
  CardHeader,
  Typography,
} from '@material-ui/core';


import getInitials from './../../utils/getInitials';


const ProjectCard = props => {
  const { project } = props;

  const getColor = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`
  }
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            // alt="Author"
            style={{backgroundColor: getColor()}}
          >
            {getInitials(project.title)}
          </Avatar>
        }
        disableTypography
        subheader={
          <Typography variant="body2">
            Id{' '}
            | {project.id}
            <br />
           User Id{' '}
           | {project.userId}
          </Typography>
        }
        title={project.title}
      />
    </Card>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default ProjectCard;
