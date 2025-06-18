const UserArchiveConnector = require('./UserArchiveConnector');

describe('#UserArchiveConnector', () => {
  const mockOptions = {
    db: {
      find: jest.fn(),
      findOne: jest.fn(),
      insertOne: jest.fn()
    }
  };
  let connector;

  beforeEach(() => {
    jest.clearAllMocks();
    connector = new UserArchiveConnector(mockOptions);
  });

  describe('#getAllUsers', () => {
    it('should called db.find when get all users', async () => {
      const mockUsers = [{ id: '1', name: 'User 1' }, { id: '2', name: 'User 2' }];
      mockOptions.db.find.mockResolvedValue(mockUsers);

      const users = await connector.getAllUsers();

      expect(mockOptions.db.find).toHaveBeenCalled();
      expect(users).toEqual(mockUsers);
    });
  });

  describe('#getUserById', () => {
    it('should called db.findOne when get user by id', async () => {
      const userId = '12345';
      const mockUser = { id: userId, name: 'Test User' };
      mockOptions.db.findOne.mockResolvedValue(mockUser);

      const user = await connector.getUserById(userId);

      expect(mockOptions.db.findOne).toHaveBeenCalledWith({ id: userId });
      expect(user).toEqual(mockUser);
    });
  });

  describe('#createUser', () => {
    it('should called db.insertOne when create user', async () => {
      const userData = { name: 'John Doe', email: 'john@  example.com' };

      await connector.createUser(userData);

      expect(mockOptions.db.insertOne).toHaveBeenCalledWith(userData);
    });

    it('should return the created user', async () => {
      const userData = { name: 'Jane Doe', email: 'jane@example.com' };
      const createdUser = await connector.createUser(userData);

      expect(createdUser).toEqual(userData);
    });
  });
});
