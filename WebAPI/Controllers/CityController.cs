namespace WebAPI.Controllers
{

    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> GetStrings()
        {
            return new string[] {"Abu-Dhabi", "Dubai"};
        }
    }
}