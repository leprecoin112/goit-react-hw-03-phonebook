import React from 'react';
import Title from 'shared/components/Title/Title';
import styles from './Section.module.scss';

function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <Title title={title} />
      {children}
    </div>
  );
}

export default Section;
