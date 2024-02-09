using System.Threading.Tasks;
using CollabSpaceAPI.Domain.Entities;
using CollabSpaceAPI.Infrastructure.Repositories;

namespace CollabSpaceAPI.Application.Services
{
    public interface IUserService
    {
        Task<bool> IsEmailUnique(string email);
        Task SignUpUser(string email, string password);
    }

    public class UserService : IUserService
    {
        private readonly IAccountRepository _userRepository;

        public UserService(IAccountRepository userRepository)
        {
            Console.WriteLine("User service constructor");
            _userRepository = userRepository;
        }

        public async Task<bool> IsEmailUnique(string email)
        {
            // Implement logic to check if email is unique
            return await _userRepository.IsEmailUnique(email);
        }

        public async Task SignUpUser(string email, string password)
        {
            // Implement logic to sign up user
            // Hash the password and create a user object
            string hashedPassword = HashPassword(password);
            var user = new User { Email = email, PasswordHash = hashedPassword };
            await _userRepository.CreateUser(user);
        }

        private string HashPassword(string password)
        {
            // Implement password hashing
            // Example: return BCrypt.Net.BCrypt.HashPassword(password);
            return password;
        }
    }
}
