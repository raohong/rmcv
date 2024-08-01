import { DeleteOutlined } from '@rmc-vant/icons';
import {
  Button,
  CellGroup,
  Form,
  FormItem,
  FormList,
  Input,
  Radio,
  RadioGroup,
} from 'rmc-vant';

export default () => {
  return (
    <Form>
      <FormList name='list' initialValue={[{}]}>
        {(fields, { remove, add }) => {
          return (
            <>
              {fields.map(({ key, name }, index) => (
                <CellGroup
                  sx={{ margin: '0 -16px 24px' }}
                  title={(
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span>用户</span>
                      <Button
                        icon={<DeleteOutlined />}
                        shape='round'
                        size='small'
                        onClick={() => remove(index)}
                      />
                    </div>
                  )}
                  key={key}
                  inset
                >
                  <FormItem
                    name={[name, 'username']}
                    label='姓名'
                    rules={[{ required: true, message: '请输入姓名' }]}
                  >
                    <Input placeholder='请输入用户名' clearable />
                  </FormItem>
                  <FormItem
                    name={[name, 'gender']}
                    label='性别'
                    rules={[{ required: true, message: '请选择性别' }]}
                  >
                    <RadioGroup direction='horizontal'>
                      <Radio value='male'>男</Radio>
                      <Radio value='female'>女</Radio>
                    </RadioGroup>
                  </FormItem>
                </CellGroup>
              ))}
              <Button
                sx={{ marginTop: 24 }}
                onClick={() => add()}
                shape='round'
                block
              >
                新增用户
              </Button>
            </>
          );
        }}
      </FormList>
    </Form>
  );
};
