import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
const data = [
  { pic: './public/images/assesment.png',heading: 'Examination Module', title1: 'Assesment becomes easy.', title2: 'Fast assesment of the result possible'},
  { pic: './public/images/child.png',heading: 'Student Lifecycle', title1: 'Increases a student performance', title2: 'Better coordination among students and teachers'},
  { pic: './public/images/f2.png',heading: 'Transportation Module' ,title1: 'Increases bus route effeciency', title2: 'Easy to track school buses for parents'},
  { pic: './public/images/f3.png',heading: 'Accounts Module' ,title1: 'Fee structure gets easy for parents', title2: 'Get notified for all fee issues'},
  { pic: './public/images/f8.png',heading: 'HR Module' ,title1: 'Easy hiring of staff possible', title2: 'Easy to manage staff of the school'},
  { pic: './public/images/f5.png',heading: 'Library Module' ,title1: 'All library related activities gets simple', title2: 'Manage book record more easily'},
];
const Card = (props) => (
  <div className="erp-inner-content">
    <h2 className="erp-heading-content">{props.heading}</h2>
    <div className="erp-card-border">
      <img src={props.pic} className="erp-card-image"/>
      <ul>
        <li dangerouslySetInnerHTML={{__html: props.title1}} className="erp-card-text"></li>
        <li dangerouslySetInnerHTML={{__html: props.title2}} className="erp-card-text"></li>
      </ul>
    </div>
  </div>
)
const RowCard = ({data}) => (
  <div className="erp-inner-row">
    <div className="erp-inner-section">
      <Card {...data[0]} />
      <Card {...data[1]} />
    </div>
  </div>
)
const ErpPage = () => {
  const rowData = _.chunk(data, 2);
  return(
    <main>
      <HeaderSection />
      <section>
        <div className="erp-inner-background">
          <h1 className="erp-inner-heading">Enterprise Resource Planning(ERP)</h1>
        </div>
        <div className="erp-inner-section">
          <div>
            {rowData.map((item, index) =>
             <RowCard key={index} data={item} />
            )}
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
};
export default ErpPage;
