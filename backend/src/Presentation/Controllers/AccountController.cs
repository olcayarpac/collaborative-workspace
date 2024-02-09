using CollabSpaceAPI.Application.Services;
using CollabSpaceAPI.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace CollabSpaceAPI.Controllers
{

  [Route("account")]
  [ApiController]
  public class AccountController : ControllerBase
  {
    private readonly IUserService _userService;

    public AccountController(IUserService userService)
    {
      _userService = userService;
    }

    [HttpGet]
    [Route("test")]
    public string Test()
    {
      Console.WriteLine("request to test");
      return "account controller test 1";
    }

    [HttpPost("signup")]
    public async Task<IActionResult> SignUp([FromBody]User user)
    {
      string email = user.Email;
      string password = user.PasswordHash;

      Console.WriteLine("Request to signup");
      // Validate user input
      if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
      {
        return BadRequest("Email and password are required.");
      }

      // Check if email is unique
      bool isUnique = await _userService.IsEmailUnique(email);
      if (!isUnique)
      {
        return Conflict("Email is already in use.");
      }

      // Sign up the user
      await _userService.SignUpUser(email, password);

      return Ok("User signed up successfully.");
    }
  }
}