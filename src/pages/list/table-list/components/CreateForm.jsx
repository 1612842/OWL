import React from 'react';
import { Form, Input, Modal } from 'antd';

const FormItem = Form.Item;

const CreateForm = props => {
  const [form] = Form.useForm();
  const { modalVisible, onSubmit: handleAdd, onCancel } = props;

  const okHandle = async () => {
    const fieldsValue = await form.validateFields();
    form.resetFields();
    handleAdd(fieldsValue);
  };

  return (
    <Modal
      destroyOnClose
      title="New rule"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => onCancel()}
    >
      <Form form={form}>
        <FormItem
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 15,
          }}
          label="description"
          name="desc"
          rules={[
            {
              required: true,
              message: 'Please enter a rule description of at least five characters!',
              min: 5,
            },
          ]}
        >
          <Input placeholder="please enter" />
        </FormItem>
      </Form>
    </Modal>
  );
};

export default CreateForm;
