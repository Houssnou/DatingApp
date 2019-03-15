using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthController
  {
    private readonly IAuthRepository _repo;

    public AuthController(IAuthRepository repo)
    {
      _repo = repo;
    }

    [HttpPost("register")];
  }
}