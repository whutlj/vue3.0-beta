import { createDecorator } from 'vue-class-component';

export const NoCache = createDecorator((options, key, parameterIndex) => {
  // options.computed[key].cache = false;
});
