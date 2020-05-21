import React, { useState } from 'react';
import { Form, Button, DatePicker, Input, Modal, Radio, Select, Steps } from 'antd';

const FormItem = Form.Item;
const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;
const formLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 13,
  },
};

const UpdateForm = props => {
  const [formVals, setFormVals] = useState({
    name: props.values.name,
    desc: props.values.desc,
    key: props.values.key,
    target: '0',
    template: '0',
    type: '1',
    time: '',
    frequency: 'month',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    values,
  } = props;

  const forward = () => setCurrentStep(currentStep + 1);

  const backward = () => setCurrentStep(currentStep - 1);

  const handleNext = async () => {
    const fieldsValue = await form.validateFields();
    setFormVals({ ...formVals, ...fieldsValue });

    if (currentStep < 2) {
      forward();
    } else {
      handleUpdate(formVals);
    }
  };

  const renderContent = () => {
    if (currentStep === 1) {
      return (
        <>
          <FormItem name="target" label="Monitoring object">
            <Select
              style={{
                width: '100%',
              }}
            >
              <Option value="0">表一</Option>
              <Option value="1">表二</Option>
            </Select>
          </FormItem>
          <FormItem name="template" label="Rule template">
            <Select
              style={{
                width: '100%',
              }}
            >
              <Option value="0">Rule template one</Option>
              <Option value="1">Rule template two</Option>
            </Select>
          </FormItem>
          <FormItem name="type" label="Rule type">
            <RadioGroup>
              <Radio value="0">Strong</Radio>
              <Radio value="1">weak</Radio>
            </RadioGroup>
          </FormItem>
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          <FormItem
            name="time"
            label="开始时间"
            rules={[
              {
                required: true,
                message: '请选择开始时间！',
              },
            ]}
          >
            <DatePicker
              style={{
                width: '100%',
              }}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="选择开始时间"
            />
          </FormItem>
          <FormItem name="frequency" label="调度周期">
            <Select
              style={{
                width: '100%',
              }}
            >
              <Option value="month">月</Option>
              <Option value="week">周</Option>
            </Select>
          </FormItem>
        </>
      );
    }

    return (
      <>
        <FormItem
          name="name"
          label="规则名称"
          rules={[
            {
              required: true,
              message: '请输入规则名称！',
            },
          ]}
        >
          <Input placeholder="请输入" />
        </FormItem>
        <FormItem
          name="desc"
          label="规则描述"
          rules={[
            {
              required: true,
              message: '请输入至少五个字符的规则描述！',
              min: 5,
            },
          ]}
        >
          <TextArea rows={4} placeholder="请输入至少五个字符" />
        </FormItem>
      </>
    );
  };

  const renderFooter = () => {
    if (currentStep === 1) {
      return (
        <>
          <Button
            style={{
              float: 'left',
            }}
            onClick={backward}
          >
            Previous
          </Button>
          <Button onClick={() => handleUpdateModalVisible(false, values)}>cancel</Button>
          <Button type="primary" onClick={() => handleNext()}>
          Next step
          </Button>
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          <Button
            style={{
              float: 'left',
            }}
            onClick={backward}
          >
            Previous
          </Button>
          <Button onClick={() => handleUpdateModalVisible(false, values)}>cancel</Button>
          <Button type="primary" onClick={() => handleNext()}>
          carry out
          </Button>
        </>
      );
    }

    return (
      <>
        <Button onClick={() => handleUpdateModalVisible(false, values)}>cancel</Button>
        <Button type="primary" onClick={() => handleNext()}>
        Next step
        </Button>
      </>
    );
  };

  return (
    <Modal
      width={640}
      bodyStyle={{
        padding: '32px 40px 48px',
      }}
      destroyOnClose
      title="Rule configuration"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible(false, values)}
      afterClose={() => handleUpdateModalVisible()}
    >
      <Steps
        style={{
          marginBottom: 28,
        }}
        size="small"
        current={currentStep}
      >
        <Step title="Basic Information" />
        <Step title="Configure rule properties" />
        <Step title="Set scheduling period" />
      </Steps>
      <Form
        {...formLayout}
        form={form}
        initialValues={{
          target: formVals.target,
          template: formVals.template,
          type: formVals.type,
          frequency: formVals.frequency,
          name: formVals.name,
          desc: formVals.desc,
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default UpdateForm;
