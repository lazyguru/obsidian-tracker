import 'colors';
import { footer } from '../test-utils';

const globalTeardown = async (): Promise<void> => {
  console.log('\nTeardown...'.italic);
  console.log(footer);
};

export default globalTeardown;
