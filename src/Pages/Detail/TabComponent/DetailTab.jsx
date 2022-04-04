import React from 'react'
import { Tabs, Radio } from 'antd';

const { TabPane } = Tabs;

export default function DetailTab() {
  return (
    <>
     <Tabs defaultActiveKey="1" type="card" size='default'>
          <TabPane tab="Card Tab 1" key="1">
            Content of card tab 1
          </TabPane>
          <TabPane tab="Card Tab 2" key="2">
            Content of card tab 2
          </TabPane>
          <TabPane tab="Card Tab 3" key="3">
            Content of card tab 3
          </TabPane>
        </Tabs>
    </>
  )
}
