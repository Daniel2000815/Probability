import React from 'react';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import Breadcrumb from 'antd/lib/breadcrumb';

const Body = (props) => {
    return(
      <div style={{background:"#fff", padding:25, minHeight:520}}>
      <Breadcrumb>
        <BreadcrumbItem>
          {props.distribution}
        </BreadcrumbItem>
      </Breadcrumb>
      </div>
    )
}

export default Body