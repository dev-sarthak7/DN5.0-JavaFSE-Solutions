import React from 'react';
import { mount, shallow } from 'enzyme';
import CohortDetails from './CohortDetails';
import CohortData from '../data/Cohort';

describe('Cohort Details Component', () => {
  const sampleCohort = CohortData[0];

  test('should create the component', () => {
    const wrapper = shallow(<CohortDetails cohort={sampleCohort} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should initialize the props', () => {
    const wrapper = mount(<CohortDetails cohort={sampleCohort} />);
    expect(wrapper.props().cohort).toEqual(sampleCohort);
  });

  test('should display cohort code in h3', () => {
    const wrapper = mount(<CohortDetails cohort={sampleCohort} />);
    const heading = wrapper.find('h3');
    expect(heading.text()).toBe(sampleCohort.code);
  });

  test('should always render same html', () => {
    const wrapper = mount(<CohortDetails cohort={sampleCohort} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
