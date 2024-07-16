import { LoggingConfig } from '@/config';

interface MockApp {
  use: jest.Mock<any, any>;
}

class MockApp {
  use = jest.fn();
}

jest.mock('morgan'); // Mock morgan module

describe('LoggingConfig', () => {
  let mockApp: MockApp; // Use your mock Application class
  let useSpy: jest.SpyInstance;

  beforeEach(() => {
    mockApp = new MockApp(); // Instantiate mockApp with your mock Application class
    useSpy = jest.spyOn(mockApp, 'use');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should configure Morgan for logging', () => {
    new LoggingConfig(mockApp);

    expect(useSpy).toHaveBeenCalledTimes(1);
    expect(useSpy).toHaveBeenCalledWith(expect.any(Function));
  });

  // Add more tests as needed
});
