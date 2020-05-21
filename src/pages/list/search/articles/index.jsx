import React, { useEffect } from 'react';
import { Button, Card, Col, Form, List, Row, Select, Tag } from 'antd';
import { LoadingOutlined, StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import ArticleListContent from './components/ArticleListContent';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import styles from './style.less';

const { Option } = Select;
const FormItem = Form.Item;
const pageSize = 5;

const Articles = ({ dispatch, listAndsearchAndarticles: { list }, loading }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    dispatch({
      type: 'listAndsearchAndarticles/fetch',
      payload: {
        count: 5,
      },
    });
  }, []);

  const setOwner = () => {
    form.setFieldsValue({
      owner: ['wzj'],
    });
  };

  const fetchMore = () => {
    dispatch({
      type: 'listAndsearchAndarticles/appendFetch',
      payload: {
        count: pageSize,
      },
    });
  };

  const owners = [
    {
            id: 'wzj',
            name: 'Myself',
          },
          {
            id: 'wjh',
            name: 'Wu Jiahao',
          },
          {
            id: 'zxx',
            name: '周 星',
          },
          {
            id: 'zly',
            name: '赵丽颖',
          },
          {
            id: 'ym',
            name: 'Yao Ming',
          },
  ];

  const IconText = ({ type, text }) => {
    switch (type) {
      case 'star-o':
        return (
          <span>
            <StarOutlined
              style={{
                marginRight: 8,
              }}
            />
            {text}
          </span>
        );

      case 'like-o':
        return (
          <span>
            <LikeOutlined
              style={{
                marginRight: 8,
              }}
            />
            {text}
          </span>
        );

      case 'message':
        return (
          <span>
            <MessageOutlined
              style={{
                marginRight: 8,
              }}
            />
            {text}
          </span>
        );

      default:
        return null;
    }
  };

  const formItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
      md: {
        span: 12,
      },
    },
  };
  const loadMore = list.length > 0 && (
    <div
      style={{
        textAlign: 'center',
        marginTop: 16,
      }}
    >
      <Button
        onClick={fetchMore}
        style={{
          paddingLeft: 48,
          paddingRight: 48,
        }}
      >
        {loading ? (
          <span>
            <LoadingOutlined /> Loading...
          </span>
        ) : (
          'load more'
        )}
      </Button>
    </div>
  );
  return (
    <>
      <Card bordered={false}>
        <Form
          layout="inline"
          form={form}
          initialValues={{
            owner: ['wjh', 'zxx'],
          }}
          onValuesChange={() => {
            dispatch({
              type: 'listAndsearchAndarticles/fetch',
              payload: {
                count: 8,
              },
            });
          }}
        >
          <StandardFormRow
            title="Affiliation"
            block
            style={{
              paddingBottom: 11,
            }}
          >
            <FormItem name="category">
              <TagSelect expandable>
              <TagSelect.Option value = "cat1"> Category one </TagSelect.Option>
                <TagSelect.Option value = "cat2"> Category 2 </TagSelect.Option>
                <TagSelect.Option value = "cat3"> Category three </TagSelect.Option>
                <TagSelect.Option value = "cat4"> Category 4 </TagSelect.Option>
                <TagSelect.Option value = "cat5"> Category five </TagSelect.Option>
                <TagSelect.Option value = "cat6"> Category VI </TagSelect.Option>
                <TagSelect.Option value = "cat7"> Category seven </TagSelect.Option>
                <TagSelect.Option value = "cat8"> Category eight </TagSelect.Option>
                <TagSelect.Option value = "cat9"> Category nine </TagSelect.Option>
                <TagSelect.Option value = "cat10"> Category ten </TagSelect.Option>
                <TagSelect.Option value = "cat11"> Category eleven </TagSelect.Option>
                <TagSelect.Option value = "cat12"> Category 12 </TagSelect.Option>
              </TagSelect>
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="owner" grid>
            <FormItem name="owner" noStyle>
              <Select mode="multiple" placeholder="select owner">
                {owners.map(owner => (
                  <Option key={owner.id} value={owner.id}>
                    {owner.name}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <a className={styles.selfTrigger} onClick={setOwner}>
            Just look at your own
            </a>
          </StandardFormRow>
          <StandardFormRow title="Other options" grid last>
            <Row gutter={16}>
              <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                <FormItem {...formItemLayout} label="active user" name="user">
                  <Select
                    placeholder="Unlimited"
                    style={{
                      maxWidth: 200,
                      width: '100%',
                    }}
                  >
                    <Option value="lisa">Li San</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                <FormItem {...formItemLayout} label="Praise of" name="rate">
                  <Select
                    placeholder="Unlimited"
                    style={{
                      maxWidth: 200,
                      width: '100%',
                    }}
                  >
                    <Option value="good">good</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </StandardFormRow>
        </Form>
      </Card>
      <Card
        style={{
          marginTop: 24,
        }}
        bordered={false}
        bodyStyle={{
          padding: '8px 32px 32px 32px',
        }}
      >
        <List
          size="large"
          loading={list.length === 0 ? loading : false}
          rowKey="id"
          itemLayout="vertical"
          loadMore={loadMore}
          dataSource={list}
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <IconText key="star" type="star-o" text={item.star} />,
                <IconText key="like" type="like-o" text={item.like} />,
                <IconText key="message" type="message" text={item.message} />,
              ]}
              extra={<div className={styles.listItemExtra} />}
            >
              <List.Item.Meta
                title={
                  <a className={styles.listItemMetaTitle} href={item.href}>
                    {item.title}
                  </a>
                }
                description={
                  <span>
                    <Tag>Ant Design</Tag>
                    <Tag>Design language</Tag>
                    <Tag>Ant Financial</Tag>
                  </span>
                }
              />
              <ArticleListContent data={item} />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default connect(({ listAndsearchAndarticles, loading }) => ({
  listAndsearchAndarticles,
  loading: loading.models.listAndsearchAndarticles,
}))(Articles);
