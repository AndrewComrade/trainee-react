import React, {FC} from 'react';
import styles from './AddUserForm.module.scss';
import {Button, Form, Input, InputNumber, Checkbox} from "antd";
import {useAppDispatch} from "@/store";
import {usersActions} from "@/components/User/model/slice/usersSlice";
import {User} from "@/components/User/model/types/user";
import {v4} from "uuid";

interface AddUserFormProps {
  onClose: () => void;
}

type FormValues = Pick<User, "age" | "name" | "isActive">

const initialFormValue: FormValues = {
  age: 1,
  name: '',
  isActive: false
}

export const AddUserForm: FC<AddUserFormProps> = ({onClose}) => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()

  const onFinish = (values: FormValues) => {
    const preparedValue: User = {
      id: v4(),
      counter: 0,
      ...values
    }

    dispatch(usersActions.addUser(preparedValue))

    onClose()
  };

  const formItemLayout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
  }

  return (
    <Form
      className={styles.AddUserForm}
      name="addUserForm"
      onFinish={onFinish}
      initialValues={initialFormValue}
      form={form}
      labelAlign="left"
      {...formItemLayout}
    >
      <h3>Add new user</h3>
      <Form.Item
        label="User name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Enter name'
          }
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="User age"
        name="age"
        rules={[
          {
            required: true,
            message: 'Enter age'
          },
          {
            type: 'number',
            message: 'Only numbers'
          }
        ]}
      >
        <InputNumber min={1}/>
      </Form.Item>
      <Form.Item
        label="Is active"
        name="isActive"
        valuePropName="checked"
      >
        <Checkbox/>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </Form>
  );
};
