import React, { useEffect } from 'react';
import moment from 'moment';
import { Modal, Result, Button, Form, DatePicker, Input, Select } from 'antd';
import styles from '../style.less';

const { TextArea } = Input;
const formLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 13,
  },
};

const OperationModal = props => {
  const [form] = Form.useForm();
  const { done, visible, current, onDone, onCancel, onSubmit } = props;
  useEffect(() => {
    if (form && !visible) {
      form.resetFields();
    }
  }, [props.visible]);
  useEffect(() => {
    if (current) {
      form.setFieldsValue({
        ...current,
        createdAt: current.createdAt ? moment(current.createdAt) : null,
      });
    }
  }, [props.current]);

  const handleSubmit = () => {
    if (!form) return;
    form.submit();
  };

  const handleFinish = values => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  const modalFooter = done
    ? {
        footer: null,
        onCancel: onDone,
      }
    : {
        okText: 'Save',
        onOk: handleSubmit,
        onCancel,
      };

  const getModalContent = () => {
    if (done) {
      return (
        <Result
          status="success"
          title="Successful operation"
          subTitle="A series of information descriptions, very short, can also be punctuated."
          extra={
            <Button type="primary" onClick={onDone}>
              understood
            </Button>
          }
          className={styles.formResult}
        />
      );
    }

    return (
      <Form {...formLayout} form={form} onFinish={handleFinish}>
        <Form.Item
          name="title"
          label="mission name"
          rules={[
            {
              required: true,
              message: 'Please enter a task name',
            },
          ]}
        >
          <Input placeholder="please enter" />
        </Form.Item>
        <Form.Item
          name="createdAt"
          label="Starting time"
          rules={[
            {
              required: true,
              message: 'Please select a start time',
            },
          ]}
        >
          <DatePicker
            showTime
            placeholder="please choose"
            format="YYYY-MM-DD HH:mm:ss"
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
        <Form.Item
          name="owner"
          label="Task leader"
          rules={[
            {
              required: true,
              message: 'Please select the person in charge',
            },
          ]}
        >
          <Select placeholder="please choose">
            <Select.Option value="Fu Xiaoxiao">Fu Xiaoxiao</Select.Option>
            <Select.Option value="Zhou Maomao">Zhou Maomao</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="subDescription"
          label="product description"
          rules={[
            {
              message: 'Please enter a product description of at least five characters!',
              min: 5,
            },
          ]}
        >
          <TextArea rows={4} placeholder="Please enter at least five characters" />
        </Form.Item>
      </Form>
    );
  };

  return (
    <Modal
      title={done ? null : `Task ${current? 'Edit': 'Add'}`}
      className={styles.standardListForm}
      width={640}
      bodyStyle={
        done
          ? {
              padding: '72px 0',
            }
          : {
              padding: '28px 0 0',
            }
      }
      destroyOnClose
      visible={visible}
      {...modalFooter}
    >
      {getModalContent()}
    </Modal>
  );
};

export default OperationModal;
