using System.Threading.Tasks;
using CollabSpaceAPI.Domain.Configs;
using CollabSpaceAPI.Domain.Entities;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace CollabSpaceAPI.Infrastructure.Repositories
{
    public interface IAccountRepository
    {
        Task<bool> IsEmailUnique(string email);
        Task CreateUser(User user);
    }

    public class AccountRepository : IAccountRepository
    {
        private readonly IMongoCollection<User> _userCollection;
        public AccountRepository(IOptions<DatabaseSettings> databaseSettings)
        {
            var mongoClient = new MongoClient(
                databaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                databaseSettings.Value.DatabaseName);

            _userCollection = mongoDatabase.GetCollection<User>(
                databaseSettings.Value.UsersCollectionName);
        }

        public async Task<bool> IsEmailUnique(string email)
        {
            var user = await _userCollection.Find(u => u.Email == email).FirstOrDefaultAsync();
            return user == null;
        }

        public async Task CreateUser(User user)
        {
            await _userCollection.InsertOneAsync(user);
        }
        // Implement MongoDB database access and repository methods
    }
}
