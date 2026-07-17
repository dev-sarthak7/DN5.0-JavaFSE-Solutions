import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const titleColor = cohort.status === 'ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: titleColor }}>{cohort.code}</h3>
      <dl>
        <dt>Track</dt>
        <dd>{cohort.track}</dd>
        <dt>Status</dt>
        <dd>{cohort.status}</dd>
        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
