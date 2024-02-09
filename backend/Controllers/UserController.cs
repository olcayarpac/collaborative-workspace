using Microsoft.AspNetCore.Mvc;

namespace CollabSpaceAPI.Controllers{

  [ApiController]
  public class UserController : ControllerBase{



    [HttpGet]
    [Route("/all")]
    public string GetAll(){
      return "All users";
    }
  }
}