import React from 'react'
import { Tabs, Radio } from 'antd';

const { TabPane } = Tabs;

export default function DetailTab(props) {
  const { des } = props
  const { describe } = des;
  return (
    <>
      <Tabs defaultActiveKey="1" type="card" size='default'>
        <TabPane tab="Mô Tả" key="1">
          <h4>Thông Số Kỹ Thuật Đồng Hồ {des.name}</h4>
          <div className="row">
            <div className="col-6">
              <ul>
                <li className='py-2'><b>Thương Hiệu :</b><span className='ml-3 text-right'> {describe?.thuonghieu} </span></li>
                <li className='py-2'><b>Giới Tính :</b><span className='ml-3'> {describe?.gioitinh} </span></li>
                <li className='py-2'><b>Loại Kính :</b><span className='ml-3'> {describe?.loaikinh} </span></li>
                <li className='py-2'><b>Máy :</b><span className='ml-3'> {describe?.may} </span></li>
                <li className='py-2'><b>Chất Liệu Dây :</b><span className='ml-3'> {describe?.chatlieuday} </span></li>
                <li className='py-2'><b>Màu Mặt số :</b><span className='ml-3'> {describe?.maumatso} </span></li>

              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className='py-2'><b>Đường Kính :</b><span className='ml-3 text-right'> {describe?.duongkinh} </span></li>
                <li className='py-2'><b>Độ Dày :</b><span className='ml-3'> {describe?.doday} </span></li>
                <li className='py-2'><b>Màu Dây :</b><span className='ml-3'> {describe?.mauday} </span></li>
                <li className='py-2'><b>Niềng :</b><span className='ml-3'> {describe?.nieng} </span></li>
                <li className='py-2'><b>Chịu Nước :</b><span className='ml-3'> {describe?.chiunuoc} </span></li>
                <li className='py-2'><b>Chức Năng :</b><span className='ml-3'> {describe?.chucnang} </span></li>

              </ul>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Chính Sách Bảo Hành" key="2">
          <div 
              dangerouslySetInnerHTML={{
                __html: `${des.warrantyPolicy}`
              }}
              />
        </TabPane>
        <TabPane tab="Bình Luận" key="3">
          Content of card tab 3
        </TabPane>
      </Tabs>
      <hr/>
    </>
  )
}
