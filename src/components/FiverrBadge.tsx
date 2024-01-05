import React from 'react';

const FiverrBadge = () => {
  return (
    <div
      itemScope
      itemType="http://schema.org/Person"
      className="fiverr-seller-widget"
      style={{ display: 'inline-block' }}>
      <a
        itemProp="url"
        href="https://www.fiverr.com/byte_sized_code"
        rel="nofollow"
        target="_blank"
        style={{ display: 'inline-block' }}>
        <div
          className="fiverr-seller-content"
          id="fiverr-seller-widget-content-fb222bf3-36c9-45b7-a8d5-99004922ec6c"
          itemProp="contentURL"
          style={{ display: 'none' }}></div>
        <div
          id="fiverr-widget-seller-data"
          style={{ display: 'none' }}>
          <div itemProp="name">byte_sized_code</div>
          <div
            itemScope
            itemType="http://schema.org/Organization">
            <span itemProp="name">Fiverr</span>
          </div>
          <div itemProp="jobtitle">Seller</div>
          <div itemProp="description">
            Designing & Developing Top Notch, High-Quality code for 4+ years. I
            have strong knowledge of HTML5, CSS3, JavaScript (React, Node),
            modern responsive framework, Java, Python, and C. I strive to
            provide my clients with excellent service and to be available 24/7.
          </div>
        </div>
        <script
          id="fiverr-seller-widget-script-fb222bf3-36c9-45b7-a8d5-99004922ec6c"
          src="https://widgets.fiverr.com/api/v1/seller/byte_sized_code?widget_id=fb222bf3-36c9-45b7-a8d5-99004922ec6c"
          data-config='{"category_name":"\n                                    Programming \u0026 Tech\n\n                            "}'
          async={true}
          defer={true}></script>
      </a>
    </div>
  );
};

export default FiverrBadge;
