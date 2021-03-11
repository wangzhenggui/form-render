import { selector } from 'recoil';
import { queryNames } from '../service';

const studentName = selector({
  key: 'studentName',
  get: async () => {
    const { data = [] } = await queryNames({});
    return data;
  },
});

export default { studentName };
