import { App } from 'vue';
import { Button, Modal, Form, Input, InputNumber } from 'ant-design-vue';

export default (app: App<Element>): App<Element> => {
  app.use(Button);
  app.use(Modal);
  app.use(Form);
  app.use(Input);
  app.use(InputNumber);

  return app;
};
