import PropTypes from 'prop-types';

import {Block, Title} from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      <Block>
        <Title>{title}</Title>
        {children}
      </Block>
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
