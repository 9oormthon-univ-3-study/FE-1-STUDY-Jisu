import React from 'react';
import styled from 'styled-components';

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#3498db' : '#ecf0f1')};
  color: ${(props) => (props.active ? '#fff' : '#2c3e50')};
  border-radius: 5px;
  margin-right: 10px;
  
  &:hover {
    background-color: #3498db;
    color: #fff;
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const MonthTabs = ({ activeMonth, setActiveMonth }) => {
  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  return (
    <TabsWrapper>
      {months.map((month, index) => (
        <Tab
          key={index}
          active={activeMonth === index}
          onClick={() => setActiveMonth(index)}
        >
          {month}
        </Tab>
      ))}
    </TabsWrapper>
  );
};

export default MonthTabs;
