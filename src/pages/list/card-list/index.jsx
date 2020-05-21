import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, List, Typography } from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'umi';
import styles from './style.less';

const { Paragraph } = Typography;

class CardList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'listAndcardList/fetch',
      payload: {
        count: 8,
      },
    });
  }

  render() {
    const {
      listAndcardList: { list },
      loading,
    } = this.props;
    const content = (
      <div className={styles.pageHeaderContent}>
        <p>
        Paragraph: the Ant Financial Service Design Platform ant.design, with minimal workload, seamlessly connects to Ant Financial ’s ecology, Provide experience solutions that span design and development.
        </p>
        <div className={styles.contentLink}>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" />{' '}
            Quick start
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" />{' '}
            Product Brief
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" />{' '}
            Product documentation
          </a>
        </div>
      </div>
    );
    const extraContent = (
      <div className={styles.extraImg}>
        <img
          alt="This is a title"
          src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
        />
      </div>
    );
    const nullData = {};
    return (
      <PageHeaderWrapper content={content} extraContent={extraContent}>
        <div className={styles.cardList}>
          <List
            rowKey="id"
            loading={loading}
            grid={{
              gutter: 24,
              lg: 3,
              md: 2,
              sm: 1,
              xs: 1,
            }}
            dataSource={[nullData, ...list]}
            renderItem={item => {
              if (item && item.id) {
                return (
                  <List.Item key={item.id}>
                    <Card
                      hoverable
                      className={styles.card}
                      actions={[<a key="option1">Operation 1</a>, <a key="option2">Operation 2</a>]}
                    >
                      <Card.Meta
                        avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                        title={<a>{item.title}</a>}
                        description={
                          <Paragraph
                            className={styles.item}
                            ellipsis={{
                              rows: 3,
                            }}
                          >
                            {item.description}
                          </Paragraph>
                        }
                      />
                    </Card>
                  </List.Item>
                );
              }

              return (
                <List.Item>
                  <Button type="dashed" className={styles.newButton}>
                    <PlusOutlined /> New product
                  </Button>
                </List.Item>
              );
            }}
          />
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default connect(({ listAndcardList, loading }) => ({
  listAndcardList,
  loading: loading.models.listAndcardList,
}))(CardList);
