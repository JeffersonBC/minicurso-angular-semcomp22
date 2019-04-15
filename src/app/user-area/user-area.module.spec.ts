import { UserAreaModule } from './user-area.module';

describe('UserAreaModule', () => {
  let userAreaModule: UserAreaModule;

  beforeEach(() => {
    userAreaModule = new UserAreaModule();
  });

  it('should create an instance', () => {
    expect(userAreaModule).toBeTruthy();
  });
});
