import { App } from 'vue';
import { Button, Modal } from 'ant-design-vue';

export default (app: App<Element>): App<Element> => {
  app.use(Button);
  app.use(Modal);

  return app;
};
