using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        public CityController(){}

        [HttpGet("")]
        public IEnumerable<string> Getstrings()
        {
            return new string[] {"Abu-Dhabi", "Dubai", "Sharjah"};
        }
    }
}